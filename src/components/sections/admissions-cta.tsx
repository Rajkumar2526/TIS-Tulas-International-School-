"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { ADMISSION_STEPS, FAQ_DATA } from "@/data/tis-data";
import { Reveal } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Clock,
  ArrowRight,
} from "lucide-react";

export function AdmissionsCta() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    otp: "",
    selectedClass: "",
    state: "",
    consent: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpMessage, setOtpMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      setOtpMessage("Please enter a valid 10-digit mobile number");
      return;
    }
    setOtpSent(true);
    setOtpMessage("OTP sent successfully to " + formData.countryCode + " " + formData.phone + " (Use: 1234)");
  };

  const handleVerifyOtp = () => {
    if (formData.otp === "1234" || formData.otp.length === 4) {
      setOtpVerified(true);
      setOtpMessage("Mobile number verified successfully!");
    } else {
      setOtpMessage("Invalid OTP. For demonstration, enter 1234.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please agree to the admissions communication consent.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#B90124", "#C09D59", "#60BAB1"],
      });
    }, 900);
  };

  const states = [
    "Uttarakhand",
    "Delhi NCR",
    "Uttar Pradesh",
    "Maharashtra",
    "Haryana",
    "Punjab",
    "Rajasthan",
    "Bihar",
    "West Bengal",
    "Madhya Pradesh",
    "Gujarat",
    "Karnataka",
    "Jammu & Kashmir",
    "Ladakh",
    "Assam / North East",
    "International / Overseas",
  ];

  const classes = [
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI (Science - Medical)",
    "Class XI (Science - Non-Med)",
    "Class XI (Commerce)",
    "Class XI (Humanities)",
    "Class XII (Transfer)",
  ];

  return (
    <section id="admissions" className="py-20 md:py-28 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tis-red/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tis-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Reveal direction="down">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-tis-gold uppercase">
              Admissions Open 2026–2027
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Begin Your Child&apos;s Journey at Tula&apos;s
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-400">
              Classes IV through XII (Co-Ed Residential &amp; Day Boarding). Connect with our senior admissions council today.
            </p>
          </Reveal>
        </div>

        {/* 4-Step Admissions Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ADMISSION_STEPS.map((step, idx) => (
            <Reveal key={step.step} direction="up" delay={0.1 * (idx + 1)}>
              <div className="h-full p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 flex flex-col justify-between relative group hover:border-tis-gold/40 transition-colors">
                <div>
                  <div className="text-3xl font-extrabold font-serif text-tis-gold mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-700/50 flex items-center gap-1.5 text-[11px] text-tis-teal font-semibold uppercase">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* High-Converting Enquiry Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left Column: Direct Helpline & Contact Info */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-neutral-800 border border-neutral-700 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tis-red/20 text-tis-red-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Admissions Office
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Get In Touch With Our Counselors
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Have questions regarding CBSE curriculum, residential hostel wings, fee structure, or athletic facilities? Our counselors are available 7 days a week.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="tel:+919837983791"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-700/80 hover:border-tis-gold/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-tis-red/20 text-tis-red-300 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Admissions Helpline</div>
                    <div className="text-sm font-bold text-white group-hover:text-tis-gold transition-colors">
                      +91-9837983791 / +91-9458319102
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@tis.edu.in"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-700/80 hover:border-tis-gold/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-tis-teal/20 text-tis-teal flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Admissions Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-tis-teal transition-colors">
                      info@tis.edu.in
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-700/80">
                  <div className="w-10 h-10 rounded-lg bg-tis-gold/20 text-tis-gold flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Campus Address</div>
                    <div className="text-xs font-medium text-white leading-relaxed">
                      Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011 (Uttarakhand), India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-700/80 flex items-center gap-2 text-xs text-neutral-400">
              <Clock className="w-4 h-4 text-tis-gold" />
              <span>Counseling hours: 8:30 AM – 6:30 PM (Mon – Sun)</span>
            </div>
          </div>

          {/* Right Column: Interactive Admission Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-neutral-800/90 border border-neutral-700 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Online Admission Enquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Fill out the details below. Our admissions coordinator will reach out within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-300 mb-1">
                    Student / Parent Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-tis-gold transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-tis-gold transition-colors"
                  />
                </div>
              </div>

              {/* Mobile Phone + OTP Simulation */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300 mb-1">
                  Mobile Number *
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    aria-label="Country Code"
                    className="w-24 px-2 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-tis-gold"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+977">+977 (NP)</option>
                    <option value="+65">+65 (SG)</option>
                  </select>

                  <input
                    id="phone"
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-tis-gold transition-colors"
                  />

                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={otpVerified}
                    className="px-4 py-2.5 rounded-xl bg-tis-teal text-tis-charcoal font-bold text-xs hover:bg-tis-teal-light transition-colors shrink-0 disabled:opacity-50"
                  >
                    {otpSent ? "Resend OTP" : "Send OTP"}
                  </button>
                </div>
              </div>

              {/* OTP Input (when sent) */}
              {otpSent && !otpVerified && (
                <div className="flex gap-2 items-center p-3 rounded-xl bg-neutral-900/90 border border-neutral-700">
                  <input
                    type="text"
                    maxLength={4}
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    placeholder="Enter 4-digit OTP"
                    className="w-36 px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-600 text-white text-sm text-center tracking-widest focus:outline-none focus:border-tis-gold"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="px-4 py-1.5 rounded-lg bg-tis-gold text-tis-charcoal font-bold text-xs hover:bg-tis-gold-light"
                  >
                    Verify OTP
                  </button>
                  <span className="text-xs text-neutral-400">Demo code: 1234</span>
                </div>
              )}

              {otpMessage && (
                <div
                  className={`text-xs ${otpVerified ? "text-emerald-400 font-semibold" : "text-amber-400"
                    }`}
                >
                  {otpMessage}
                </div>
              )}

              {/* Class & State Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="selectedClass" className="block text-xs font-semibold text-neutral-300 mb-1">
                    Seeking Admission In *
                  </label>
                  <select
                    id="selectedClass"
                    required
                    value={formData.selectedClass}
                    onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-tis-gold"
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="state" className="block text-xs font-semibold text-neutral-300 mb-1">
                    Current State / Region *
                  </label>
                  <select
                    id="state"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-tis-gold"
                  >
                    <option value="">Select State</option>
                    {states.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  id="consent"
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-neutral-700 bg-neutral-900 text-tis-red focus:ring-tis-red accent-tis-red"
                />
                <label htmlFor="consent" className="text-xs text-neutral-400 leading-snug cursor-pointer">
                  I agree to receive communications, prospectus information, and application updates from Tula&apos;s International School, Dehradun via call, SMS, or WhatsApp.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full justify-center text-base py-3 bg-tis-red hover:bg-tis-red-600 shadow-xl shadow-tis-red/30"
                >
                  Submit Admission Enquiry
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Admissions FAQs Section */}
        <div className="max-w-4xl mx-auto pt-6">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-tis-teal flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </span>
            <h3 className="text-2xl font-bold text-white">
              Everything You Need to Know Before Applying
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-neutral-800/80 border border-neutral-700 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white hover:text-tis-gold transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${activeFaq === index ? "rotate-180 text-tis-gold" : "text-neutral-400"
                      }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-700/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confirmation Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Enquiry Submitted Successfully!"
        description="Tula's International School Admissions Team"
      >
        <div className="space-y-4 text-tis-charcoal dark:text-neutral-200">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                Thank you, {formData.fullName || "Parent"}!
              </div>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                We have received your admission enquiry for {formData.selectedClass || "the upcoming session"}. Our senior counselor will connect with you at {formData.phone} shortly.
              </p>
            </div>
          </div>

          <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
            <p>
              In the meantime, you are welcome to schedule an in-person campus walkthrough or explore our 360° virtual tour.
            </p>
            <p className="font-medium text-tis-red dark:text-tis-gold">
              Admissions Helpline: +91-9837983791 | Email: info@tis.edu.in
            </p>
          </div>

          <div className="pt-2 flex justify-end">
            <Button variant="primary" size="sm" onClick={() => setShowSuccessModal(false)}>
              Close &amp; Continue Browsing
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
