/**
 * Admission Enquiry Data Model
 * Simple schema definition for candidate application data
 */
class AdmissionEnquiry {
  constructor({ id, fullName, email, phone, countryCode, selectedClass, state, createdAt }) {
    this.id = id || `tis_${Date.now()}`;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.countryCode = countryCode || "+91";
    this.selectedClass = selectedClass;
    this.state = state;
    this.status = "PENDING_COUNSELOR_REVIEW";
    this.createdAt = createdAt || new Date().toISOString();
  }
}

module.exports = { AdmissionEnquiry };
