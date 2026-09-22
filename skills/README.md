# DealDesk skills

These notes describe common workflows the DealDesk MCP connector supports. Your AI host may also load live skill descriptions from the agenthouse DealDesk server (`dealdesk.list_skills`).

## Guidelines

- Prefer update and soft-close over delete. Delete is not offered through MCP.
- Prefer the export skill for analysis instead of paging through large lists endlessly.
- For portfolio publish, always review the preview and confirm before publishing.
- **Notes vs email:** use `dealdesk.add_card_note` for internal notes. Log inbound/outbound email with `dealdesk.log_email` (status-update touchpoint). Never store emails as card notes.

## Shipped skills

| Skill | Purpose |
| --- | --- |
| [create-card.md](./create-card.md) | Create or update a desk card |
| [log-card-activity.md](./log-card-activity.md) | Notes, comments, tasks, and email touchpoints |
| [craft-quote.md](./craft-quote.md) | Guided classic-first quote authoring (customer, clone, groups, refine) |
| [quote-from-portfolio.md](./quote-from-portfolio.md) | Evaluate and create a quote from the published portfolio |
| [evaluate-configuration.md](./evaluate-configuration.md) | Side-effect free CPQ evaluation |
| [find-or-create-customer.md](./find-or-create-customer.md) | Directory company/contact lookup and create |
| [export-analysis.md](./export-analysis.md) | Bounded Deal Intelligence export |
| [publish-portfolio.md](./publish-portfolio.md) | Preview then confirm portfolio publish |

