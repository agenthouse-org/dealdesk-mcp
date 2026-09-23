# Publish portfolio (preview + confirm)

Tools: `dealdesk.discover`, `dealdesk.initialize_portfolio_draft`, `dealdesk.portfolio_publish_preview`, `dealdesk.portfolio_publish`

Call dealdesk.discover with domain portfolio-authoring first. initialize_portfolio_draft only when no draft exists. Call portfolio_publish_preview and review blockers. Call portfolio_publish only with confirm=true. Confirm must work from a plain tools/call.

Allowed tools: dealdesk.discover, dealdesk.initialize_portfolio_draft, dealdesk.portfolio_publish_preview, dealdesk.portfolio_publish

Never call DELETE tools.
