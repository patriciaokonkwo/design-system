## Structured Logging Changes

- Improved error logging in `WebhookService.java` to include structured logging with request ID, user ID, and error class for better troubleshooting.
- Added metrics for monitoring redis fallback and transaction commit failures.
