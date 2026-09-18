# @agenthouse-org/dealdesk-mcp

DealDesk-scoped MCP server and courtesy package for [agenthouse](https://github.com/neri-de/AgentHouse). Connect Claude, ChatGPT, Cursor, Codex, Copilot, and other MCP hosts to DealDesk: cards, quotes, CPQ portfolio, directory, and export.

This repository is a scaffold. The MCP server is not implemented yet. The npm package is **not published**.

Tracking: [neri-de/AgentHouse#180](https://github.com/neri-de/AgentHouse/issues/180)

## v1 intent

- OAuth Connect is the primary install (login, project, DealDesk scopes). Project API keys are the fallback for stdio/CI.
- Small core `dealdesk.*` tools plus shipped skills. Progressive discovery for CPQ authoring, orders, and admin.
- No DELETE tools. HTTP DELETE stays on the API. Soft close/archive via PATCH remains where DealDesk already supports it.
- No customer-impersonation tools (accept-on-behalf, public accept, confirm-on-behalf).
- MCP Apps widgets (card summary, quote totals, publish preview) on hosts that render UI. Tools-only hosts still work.
- Catalog stays in lockstep with the agenthouse DealDesk OpenAPI contract.

## Install (preview)

Not usable until the API MCP and this package ship. Intended shapes:

**ChatGPT / Claude (remote + OAuth)**

MCP URL: `https://api.agenthouse.org/mcp/dealdesk` (exact host depends on the deployment). Connect with OAuth; pick project; grant DealDesk access.

**Cursor / Claude Desktop / Codex (stdio + API key)**

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

Development keys use the `local_…` prefix.

## Shipped skills (planned)

- Create or update a desk card
- Configure and create a quote from the published portfolio
- Evaluate a configuration (no persist)
- Find or create a company/contact
- Export for analysis
- Publish portfolio (preview + confirm)

Skills never delete and never loop unbounded.

## License

MIT
