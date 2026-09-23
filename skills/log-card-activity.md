# Add notes and log email / status updates on a card

Tools: `dealdesk.get_card`, `dealdesk.add_card_note`, `dealdesk.patch_card_note`, `dealdesk.list_status_updates`, `dealdesk.create_status_update`, `dealdesk.patch_status_update`, `dealdesk.log_email`

Use add_card_note and patch_card_note for internal structured notes. Log inbound or outbound email with dealdesk.log_email (direction incoming or outgoing, from, to, subject, text, cardId). That creates an email_incoming or email_outgoing touchpoint. Use create_status_update for comments, tasks, calls, and meetings, and patch_status_update to change them. Never store emails as card notes.

Allowed tools: dealdesk.get_card, dealdesk.add_card_note, dealdesk.patch_card_note, dealdesk.list_status_updates, dealdesk.create_status_update, dealdesk.patch_status_update, dealdesk.log_email

Never call DELETE tools.
