# DealDesk skills

These notes describe common workflows the DealDesk MCP connector supports. Your AI host may also load live skill descriptions from the agenthouse DealDesk server (`dealdesk.list_skills`).

## Guidelines

- Prefer update and soft-close over delete. Delete is not offered through MCP.
- Prefer the export skill for analysis instead of paging through large lists endlessly.
- For portfolio publish, always review the preview and confirm before publishing.
- Skill-gated tools need `dealdesk.discover` with the matching domain first. The server remembers that unlock for the API key or OAuth user.
- **Notes vs email:** use `dealdesk.add_card_note` for internal notes. Log inbound/outbound email with `dealdesk.log_email`. Never store emails as card notes.

## Shipped skills

| Skill | Purpose |
| --- | --- |
| [help.md](./help.md) | Explain DealDesk capabilities |
| [create-card.md](./create-card.md) | Create or update a desk card |
| [log-card-activity.md](./log-card-activity.md) | Add notes and log email / status updates on a card |
| [craft-quote.md](./craft-quote.md) | Guide the user to craft an excellent classic quote |
| [quote-from-portfolio.md](./quote-from-portfolio.md) | Configure and create a quote from the published portfolio |
| [evaluate-configuration.md](./evaluate-configuration.md) | Evaluate a configuration |
| [directory-activity.md](./directory-activity.md) | Notes and commercial summary for a company or contact |
| [find-or-create-customer.md](./find-or-create-customer.md) | Find or create a company/contact |
| [share-quote.md](./share-quote.md) | Inspect quote status and manage customer share links |
| [manage-cases.md](./manage-cases.md) | Create and update DealDesk cases |
| [manage-orders.md](./manage-orders.md) | Work with orders from quotes |
| [portfolio-browse.md](./portfolio-browse.md) | Browse portfolio articles and revisions |
| [export-analysis.md](./export-analysis.md) | Export for analysis |
| [publish-portfolio.md](./publish-portfolio.md) | Publish portfolio (preview + confirm) |
