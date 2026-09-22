# Create or update a desk card

Tools: `dealdesk.create_card`, `dealdesk.patch_card`, `dealdesk.get_card`, `dealdesk.list_cards`

Create a card or update title, stage, and **description**. Soft-close work by setting an appropriate closed stage rather than deleting.

Use `description` for the main card body text. Use `deskDescription` for a local desk-only description when needed. Use `dealdesk.add_card_note` only for structured notes (title + body), not as a substitute for the card description.

Do **not** use notes to log customer email. Use the [log-card-activity](./log-card-activity.md) skill (`dealdesk.log_email`).
