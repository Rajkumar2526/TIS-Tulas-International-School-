/**
 * Notification Service
 * Mock service for sending SMS and Email alerts to admissions staff
 */
class NotificationService {
  static async sendEnquiryAlert(enquiry) {
    // In production, integrate with SendGrid, Twilio, or AWS SES
    console.log(`[TIS Admissions Notification] New candidate enquiry received: ${enquiry.fullName} for ${enquiry.selectedClass} (${enquiry.phone})`);
    return { success: true, timestamp: new Date().toISOString() };
  }
}

module.exports = { NotificationService };
