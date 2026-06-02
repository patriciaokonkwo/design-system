// Improved error logging in WebhookService.java

public class WebhookService {
    public void handleRequest(Request request) {
        try {
            // Process request
        } catch (Exception e) {
            logError(request.getId(), request.getUserId(), e);
        }
    }

    private void logError(String requestId, String userId, Exception e) {
        // Structured logging
        System.err.println("Error processing request. Request ID: " + requestId + ", User ID: " + userId + ", Error: " + e.getClass().getSimpleName());
    }
}