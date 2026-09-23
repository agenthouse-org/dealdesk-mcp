# Work with orders from quotes

Tools: `dealdesk.discover`, `dealdesk.list_orders`, `dealdesk.get_order`, `dealdesk.create_order_from_quote`, `dealdesk.patch_order`

Call dealdesk.discover with domain orders first. The server keeps that unlock for this API key or OAuth user. Then list, get, create from a quote, or patch metadata. Never delete orders through MCP.

Allowed tools: dealdesk.discover, dealdesk.list_orders, dealdesk.get_order, dealdesk.create_order_from_quote, dealdesk.patch_order

Never call DELETE tools.
