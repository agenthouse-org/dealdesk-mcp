# Configure and create a quote from the published portfolio

Tools: `dealdesk.portfolio_summary`, `dealdesk.portfolio_evaluate`, `dealdesk.create_quote_from_configuration`, `dealdesk.update_quote_from_configuration`

Call portfolio_summary when you need the published revision. Call portfolio_evaluate with the configuration. Then create_quote_from_configuration or update_quote_from_configuration with the published portfolioRevisionId and priceBookRevisionId. Do not invent prices.

Allowed tools: dealdesk.portfolio_summary, dealdesk.portfolio_evaluate, dealdesk.create_quote_from_configuration, dealdesk.update_quote_from_configuration

Never call DELETE tools.
