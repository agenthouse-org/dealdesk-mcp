# Guide the user to craft an excellent classic quote

Tools: `dealdesk.list_companies`, `dealdesk.get_company`, `dealdesk.create_company`, `dealdesk.list_contacts`, `dealdesk.get_contact`, `dealdesk.create_contact`, `dealdesk.list_quotes`, `dealdesk.get_quote`, `dealdesk.get_quote_summary`, `dealdesk.patch_quote`, `dealdesk.create_quote`, `dealdesk.clone_quote`, `dealdesk.replace_quote_items`, `dealdesk.portfolio_summary`, `dealdesk.portfolio_evaluate`, `dealdesk.discover`, `dealdesk.list_portfolio_articles`, `dealdesk.get_portfolio_article`, `dealdesk.create_quote_from_configuration`, `dealdesk.update_quote_from_configuration`, `dealdesk.create_quote_share`, `dealdesk.render_quote_pdf`

Ask for company and contact, what the quote is about, and whether to group positions. Offer to clone a past quote or create a fresh classic draft. Consult the published portfolio, then create_quote or clone_quote and refine with replace_quote_items. Use create_quote_from_configuration only when the user wants portfolio-evaluated pricing.

Allowed tools: dealdesk.list_companies, dealdesk.get_company, dealdesk.create_company, dealdesk.list_contacts, dealdesk.get_contact, dealdesk.create_contact, dealdesk.list_quotes, dealdesk.get_quote, dealdesk.get_quote_summary, dealdesk.patch_quote, dealdesk.create_quote, dealdesk.clone_quote, dealdesk.replace_quote_items, dealdesk.portfolio_summary, dealdesk.portfolio_evaluate, dealdesk.discover, dealdesk.list_portfolio_articles, dealdesk.get_portfolio_article, dealdesk.create_quote_from_configuration, dealdesk.update_quote_from_configuration, dealdesk.create_quote_share, dealdesk.render_quote_pdf

Never call DELETE tools.
