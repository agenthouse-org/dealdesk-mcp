#!/usr/bin/env node
'use strict';

/**
 * @agenthouse-org/dealdesk-mcp — zero-dependency stdio MCP bridge.
 * Forwards JSON-RPC to POST {AGENTHOUSE_API_URL}/mcp/dealdesk with a project API key.
 *
 * Env:
 *   AGENTHOUSE_API_URL     (default https://api.agenthouse.org)
 *   AGENTHOUSE_API_KEY     project API key (ahk_… / local_…)
 *   AGENTHOUSE_PROJECT_ID  default projectId injected into tool arguments when omitted
 */

const http = require('http');
const https = require('https');
const { URL } = require('url');
const readline = require('readline');

const API_URL = String(process.env.AGENTHOUSE_API_URL || 'https://api.agenthouse.org').replace(/\/$/, '');
const API_KEY = String(process.env.AGENTHOUSE_API_KEY || process.env.AGENTHOUSE_TOKEN || '').trim();
const PROJECT_ID = String(process.env.AGENTHOUSE_PROJECT_ID || '').trim();

function log(msg) {
  process.stderr.write(`[dealdesk-mcp] ${msg}\n`);
}

if (!API_KEY) {
  log('AGENTHOUSE_API_KEY is required (project API key with dealdesk:read|write|access)');
  process.exit(1);
}

function postMcp(messages) {
  const body = (Array.isArray(messages) ? messages : [messages])
    .map((m) => JSON.stringify(m))
    .join('\n') + '\n';
  const target = new URL(`${API_URL}/mcp/dealdesk`);
  const lib = target.protocol === 'http:' ? http : https;
  return new Promise((resolve, reject) => {
    const req = lib.request({
      protocol: target.protocol,
      hostname: target.hostname,
      port: target.port || (target.protocol === 'http:' ? 80 : 443),
      path: target.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
        'Content-Length': Buffer.byteLength(body)
      }
    }, (res) => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const lines = data.split('\n').map((l) => l.trim()).filter(Boolean);
        const parsed = [];
        for (const line of lines) {
          try {
            parsed.push(JSON.parse(line));
          } catch (err) {
            log(`parse response: ${err.message}`);
          }
        }
        resolve(parsed);
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function injectProject(msg) {
  if (!msg || typeof msg !== 'object') return msg;
  if (msg.method === 'tools/call' && msg.params) {
    const args = msg.params.arguments || {};
    if (!args.projectId && PROJECT_ID) {
      msg.params.arguments = { ...args, projectId: PROJECT_ID };
    }
  }
  return msg;
}

async function handleLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return;
  let msg;
  try {
    msg = JSON.parse(trimmed);
  } catch (err) {
    process.stdout.write(JSON.stringify({
      jsonrpc: '2.0',
      id: null,
      error: { code: -32700, message: 'Parse error' }
    }) + '\n');
    return;
  }
  const batch = Array.isArray(msg) ? msg.map(injectProject) : [injectProject(msg)];
  try {
    const responses = await postMcp(batch);
    for (const response of responses) {
      process.stdout.write(JSON.stringify(response) + '\n');
    }
  } catch (err) {
    log(String(err && err.message || err));
    for (const m of batch) {
      if (m && m.id !== undefined && m.id !== null) {
        process.stdout.write(JSON.stringify({
          jsonrpc: '2.0',
          id: m.id,
          error: { code: -32000, message: String(err && err.message || err) }
        }) + '\n');
      }
    }
  }
}

const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
rl.on('line', (line) => {
  handleLine(line).catch((err) => log(String(err)));
});
rl.on('close', () => process.exit(0));

log(`bridging stdio → ${API_URL}/mcp/dealdesk`);
