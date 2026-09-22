# @agenthouse-org/dealdesk-mcp

Zero-dependency stdio MCP bridge for DealDesk. Forwards JSON-RPC to `POST {AGENTHOUSE_API_URL}/mcp/dealdesk`.

No `@modelcontextprotocol/sdk`. The remote catalog lives in agenthouse (`backend/agenthouse-api/mcp/dealdesk/`).

Tracking: [neri-de/AgentHouse#180](https://github.com/neri-de/AgentHouse/issues/180)

## Auth

| Mode | Use |
| --- | --- |
| **OAuth Connect** | ChatGPT / Claude remote MCP at `/mcp/dealdesk` — authorize, pick project, grant DealDesk scope |
| **Project API key** | This stdio package — `dealdesk:read`, `dealdesk:write`, or `dealdesk:access` |

## Cursor / Claude Desktop / Codex

```json
{
  "mcpServers": {
    "dealdesk": {
      "command": "npx",
      "args": ["-y", "@agenthouse-org/dealdesk-mcp"],
      "env": {
        "AGENTHOUSE_API_URL": "https://api.agenthouse.org",
        "AGENTHOUSE_API_KEY": "ahk_…",
        "AGENTHOUSE_PROJECT_ID": "your-project-id"
      }
    }
  }
}
```

Local development keys use the `local_…` prefix. Point `AGENTHOUSE_API_URL` at your local API when testing.

## Skills

Shipped skill prompts are listed by the remote server (`dealdesk.list_skills` / `prompts/list`). See `skills/` in this repo for human-readable copies.

Guardrails: no DELETE tools; export via `dealdesk.export_intelligence`; portfolio publish requires preview + `confirm=true`.

## Publish

Package stays `private: true` until agenthouse approves an npm release.

## License

MIT
