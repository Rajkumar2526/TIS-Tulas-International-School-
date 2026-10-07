import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  ExternalLink,
  ShieldAlert,
  Calendar,
  FileText,
  Compass,
} from "lucide-react";

interface FooterProps {
  onOpenEnquiry?: () => void;
  onOpenVirtualTour?: () => void;
}

export function Footer({ onOpenEnquiry, onOpenVirtualTour }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-tis-red flex items-center justify-center text-white shadow-lg">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  TULA&apos;S INTERNATIONAL SCHOOL
                </span>
                <span className="text-xs text-tis-gold tracking-widest uppercase font-semibold">
                  The Modern Gurukul • Established 2012
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed pr-2">
              Affiliated with CBSE, New Delhi. Dedicated to imparting holistic co-educational boarding
              excellence for boys and girls from Class IV to XII across a sprawling 22-acre
              pollution-free campus in the foothills of Dehradun.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-tis-red text-white hover:bg-tis-red-600 transition-colors shadow-sm"
              >
                Admissions 2026–27
              </button>
              <button
                type="button"
                onClick={onOpenVirtualTour}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-800 text-tis-gold border border-tis-gold/30 hover:bg-neutral-700 transition-colors inline-flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5" /> 360° Virtual Tour
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-neutral-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="#about" className="hover:text-tis-gold transition-colors">
                  About TIS
                </Link>
              </li>
              <li>
                <Link href="#why-tis" className="hover:text-tis-gold transition-colors">
                  Why Choose TIS
                </Link>
              </li>
              <li>
                <Link href="#academics" className="hover:text-tis-gold transition-colors">
                  Academic Streams
                </Link>
              </li>
              <li>
                <Link href="#campus" className="hover:text-tis-gold transition-colors">
                  Boarding Facilities
                </Link>
              </li>
              <li>
                <Link href="#sports" className="hover:text-tis-gold transition-colors">
                  16+ Olympic Sports
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-tis-gold transition-colors">
                  Parent Reviews
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-tis-gold transition-colors">
                  Campus Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Mandatory Policies & Portals */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-neutral-800 pb-2">
              Mandatory Policies & Portals
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a
                  href="https://tis.fedena.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-tis-teal-light"
                >
                  <span>Fedena ERP Parent Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://admission.tis.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Online Application System</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                <FileText className="w-3.5 h-3.5 text-tis-gold" />
                <span>CBSE Mandatory Disclosure</span>
              </li>
              <li className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                <ShieldAlert className="w-3.5 h-3.5 text-tis-gold" />
                <span>Child Welfare &amp; Safety Policy</span>
              </li>
              <li className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                <Calendar className="w-3.5 h-3.5 text-tis-gold" />
                <span>Academic Calendar 2026–27</span>
              </li>
              <li className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                <FileText className="w-3.5 h-3.5 text-tis-gold" />
                <span>Disciplinary &amp; Phone Policy</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Map & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-neutral-800 pb-2">
              Campus Location
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-tis-red shrink-0 mt-0.5" />
                <span>
                  Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011 (Uttarakhand), India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-tis-red shrink-0" />
                <span>Admissions: +91-9837983791</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>Landline: 0135-2699444 / 2699666</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-tis-teal shrink-0" />
                <span>info@tis.edu.in</span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-32 rounded-xl overflow-hidden border border-neutral-800 mt-2">
              <iframe
                title="Tula's International School Campus Map"
                src="https://maps.google.com/maps?q=Tula's%20International%20School%20Dehradun&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            Copyright © {currentYear} Tula&apos;s International School, Dehradun. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Designed and Managed By</span>
            <a
              href="https://netpuppys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-tis-teal font-medium transition-colors"
            >
              NetPuppys
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
