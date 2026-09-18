# agenthouse dealdesk-mcp

DealDesk-scoped MCP courtesy package. Keep this catalog in lockstep with DealDesk HTTP and `backend/agenthouse-api/api.yaml` in neri-de/AgentHouse.

- Generate tools from annotated OpenAPI (`x-agenthouse.mcp`). Do not hand-register DealDesk tools.
- Never expose DELETE or customer-impersonation operations (`expose: false`).
- OAuth Connect is primary; project API keys are the stdio/CI fallback.
- Shipped skills only in v1. No tenant skill admin.
- MCP Apps widgets are optional; tools must work without UI.
- Do not publish to npm until that approval is explicit.

Tracking: https://github.com/neri-de/AgentHouse/issues/180
