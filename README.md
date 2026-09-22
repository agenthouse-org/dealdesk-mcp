# DealDesk MCP for agenthouse

Connect your AI assistant to **DealDesk** — create and update desk cards, log email and status updates, work with quotes and the product portfolio, look up customers, and export for analysis — without leaving ChatGPT, Claude, Cursor, or Codex.

Brought to you by [agenthouse](https://agenthouse.org).

This package is an **MCP connector** (Model Context Protocol): a remote MCP URL for cloud hosts, plus this local stdio bridge for desktop hosts. It is **not** a ChatGPT Plugin, Cursor IDE extension, or browser plugin.

## What you can do

- Create and update desk cards, including notes and stage changes  
- Log inbound/outbound email and other status updates on a card timeline  
- Evaluate configurations and create quotes from your published portfolio  
- Find or create companies and contacts in the customer directory  
- Export Deal Intelligence workbooks for offline analysis  
- Preview and confirm portfolio publish (with an explicit confirmation step)

Destructive delete operations are not available through MCP. Soft-close cards by updating their stage instead.

## Before you start

You need:

1. An **agenthouse** account with DealDesk access to your tenant  
2. Either:
   - **Connect (recommended for ChatGPT / Claude remote):** sign in and grant DealDesk access when prompted, or  
   - **A project API key** (for Cursor, Claude Desktop, Codex, and other local hosts): create one under **Access management → API keys** in the agenthouse workspace. Grant at least `dealdesk:read`, or `dealdesk:access` for full write access.

You also need **Node.js 20+** for the local connector.

## Install

### Option A — Remote MCP (ChatGPT, Claude, and similar)

Add DealDesk as a remote MCP server in your host’s connector settings:

| Setting | Value |
| --- | --- |
| MCP URL | `https://api.agenthouse.org/mcp/dealdesk` |
| Authentication | OAuth (Connect) |

When Connect opens, sign in with agenthouse, choose your project (tenant), and grant DealDesk access. Your host will then list DealDesk tools automatically.

### Option B — Local connector (Cursor, Claude Desktop, Codex)

Use the DealDesk MCP package as a local stdio server. It talks securely to agenthouse with your project API key.

#### Cursor

1. Open **Cursor Settings → MCP**  
2. Add a server with the configuration below  
3. Restart MCP / reload the window if prompted  

```json
{
  "mcpServers": {
    "dealdesk": {
      "command": "npx",
      "args": ["-y", "github:agenthouse-org/dealdesk-mcp"],
      "env": {
        "AGENTHOUSE_API_URL": "https://api.agenthouse.org",
        "AGENTHOUSE_API_KEY": "ahk_your_project_api_key",
        "AGENTHOUSE_PROJECT_ID": "YOUR_TENANT_ID"
      }
    }
  }
}
```

#### Claude Desktop

Edit your Claude Desktop MCP config (typically `claude_desktop_config.json`) and add the same `mcpServers.dealdesk` block as above, then restart Claude Desktop.

#### Codex / other stdio hosts

Use the same command, arguments, and environment variables as Cursor.

#### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `AGENTHOUSE_API_KEY` | Yes | Project API key from agenthouse Access management |
| `AGENTHOUSE_PROJECT_ID` | Recommended | Default tenant id when a tool call omits `projectId` |
| `AGENTHOUSE_API_URL` | No | Defaults to `https://api.agenthouse.org` |

Keep your API key private. Do not commit it to git or share it in chat logs.

### Verify the connection

After install, ask your assistant something concrete, for example:

> List open DealDesk cards for my project.

You should see DealDesk tools available (such as listing cards or creating a quote from a configuration). If authentication fails, renew Connect or check that the API key has DealDesk permission for that tenant.

## Skills

DealDesk MCP includes guided skills for common sales workflows (create a card, log email/status updates, quote from portfolio, find or create a customer, export for analysis, publish portfolio with preview). Your host may surface these as prompts or skills depending on the product. See [`skills/`](./skills/).

## Support

- Product and product docs: [agenthouse.org](https://agenthouse.org)  
- Issues with this connector: [GitHub Issues](https://github.com/agenthouse-org/dealdesk-mcp/issues)

## License

MIT © agenthouse
