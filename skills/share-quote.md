# Inspect quote status and manage customer share links

Tools: `dealdesk.list_quotes`, `dealdesk.get_quote`, `dealdesk.get_quote_summary`, `dealdesk.patch_quote`, `dealdesk.render_quote_pdf`, `dealdesk.list_quote_shares`, `dealdesk.create_quote_share`, `dealdesk.patch_quote_share`

Read quote status and acceptance, list share links, and create classicPath or experiencePath links. Soft-close a share with isOpen=false. Never delete shares through MCP.

Allowed tools: dealdesk.list_quotes, dealdesk.get_quote, dealdesk.get_quote_summary, dealdesk.patch_quote, dealdesk.render_quote_pdf, dealdesk.list_quote_shares, dealdesk.create_quote_share, dealdesk.patch_quote_share

Never call DELETE tools.
