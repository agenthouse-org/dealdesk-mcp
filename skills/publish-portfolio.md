# Publish portfolio (preview + confirm)

Tools: `dealdesk.discover`, `dealdesk.portfolio_publish_preview`, `dealdesk.portfolio_publish`

1. Unlock portfolio-authoring tools with `dealdesk.discover` and domain `portfolio-authoring` if needed.
2. Call `portfolio_publish_preview` and review blockers.
3. Call `portfolio_publish` only with `confirm=true` when blockers are clear.

Never publish without the explicit confirm flag. Confirm must work from a plain tools/call (no widget required).
