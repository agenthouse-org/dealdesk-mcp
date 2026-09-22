# Find or create a company / contact

Tools: `dealdesk.list_companies`, `dealdesk.create_company`, `dealdesk.list_contacts`, `dealdesk.create_contact`

Search the customer directory first. Create only when no suitable match exists.

Companies: send `legalName` or `name` (maps to `legalName`). `externalId` is optional and auto-generated as `local-company-<uuid>` when omitted.

Contacts: send `displayName` or `name` (or first/last name). `externalId` is optional and auto-generated as `local-contact-<uuid>` when omitted.
