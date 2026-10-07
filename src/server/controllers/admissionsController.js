const { AdmissionEnquiry } = require("../models/enquiryModel");
const { NotificationService } = require("../services/notificationService");

/**
 * Controller handling admission enquiries
 */
class AdmissionsController {
  static async createEnquiry(req, res) {
    try {
      const { fullName, email, phone, countryCode, selectedClass, state } = req.body;

      if (!fullName || !phone || !selectedClass) {
        return res.status(400).json({
          success: false,
          message: "Full name, phone number, and class selection are required.",
        });
      }

      const enquiry = new AdmissionEnquiry({
        fullName,
        email,
        phone,
        countryCode,
        selectedClass,
        state,
      });

      await NotificationService.sendEnquiryAlert(enquiry);

      return res.status(201).json({
        success: true,
        message: "Enquiry submitted successfully. An admissions counselor will connect shortly.",
        data: {
          id: enquiry.id,
          createdAt: enquiry.createdAt,
        },
      });
    } catch (error) {
      console.error("AdmissionsController error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error processing enquiry.",
      });
    }
  }

  static async healthCheck(req, res) {
    return res.status(200).json({
      status: "healthy",
      service: "TIS Admissions Backend",
      timestamp: new Date().toISOString(),
    });
  }
}

module.exports = { AdmissionsController };
