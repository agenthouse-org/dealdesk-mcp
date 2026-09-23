# Find or create a company/contact

Tools: `dealdesk.list_companies`, `dealdesk.get_company`, `dealdesk.create_company`, `dealdesk.patch_company`, `dealdesk.list_contacts`, `dealdesk.get_contact`, `dealdesk.create_contact`, `dealdesk.patch_contact`

Search first. Create only when no suitable match exists. Companies take legalName or name. Contacts take displayName or name. externalId is optional and is generated as local-company-<uuid> or local-contact-<uuid> when omitted. patch_company and patch_contact require expectedRevision.

Allowed tools: dealdesk.list_companies, dealdesk.get_company, dealdesk.create_company, dealdesk.patch_company, dealdesk.list_contacts, dealdesk.get_contact, dealdesk.create_contact, dealdesk.patch_contact

Never call DELETE tools.
