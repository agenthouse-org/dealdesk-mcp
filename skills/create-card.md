# Create or update a desk card

Tools: `dealdesk.create_card`, `dealdesk.patch_card`, `dealdesk.get_card`, `dealdesk.list_cards`

Use description for the main card body. Use deskDescription for a local desk-only description. companyId and contactId on create_card and patch_card map to Customer Directory accountRef and contactRef. patch_card also syncs a linked local case and quote customer link. Pass null to clear. Soft-close with a closed stage. Do not log email in notes.

Allowed tools: dealdesk.create_card, dealdesk.patch_card, dealdesk.get_card, dealdesk.list_cards

Never call DELETE tools.
