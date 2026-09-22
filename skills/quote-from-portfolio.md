# Quote from published portfolio

Tools: `dealdesk.portfolio_summary`, `dealdesk.portfolio_evaluate`, `dealdesk.create_quote_from_configuration`

1. Optionally call `portfolio_summary` to confirm a published revision exists.
2. Call `portfolio_evaluate` with the configuration (side-effect free).
3. Call `create_quote_from_configuration` with the published `portfolioRevisionId`, `priceBookRevisionId`, and the same configuration.

Do not invent prices client-side. Prefer the published revision ids returned by the API.
