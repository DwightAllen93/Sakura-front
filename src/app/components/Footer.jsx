
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Sakura Care</h3>
            <p className="text-sm text-gray-300">
              Where every life Blooms with Care
            </p>
          </div>

          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-[#f89d64] transition-colors"
                >
                  We provide accommodation (SIL)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#f89d64] transition-colors"
                >
                  Community participation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#f89d64] transition-colors"
                >
                  Travel Assistance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#f89d64] transition-colors"
                >
                  Respite
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-[#f89d64] transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>1300 928 928</li>
              <li>﻿info@sakuracare.com.au</li>
              <li>Avenue, Mawson Lakes SA 5095</li>
              <li>Endeavour House, 3E/11 Fourth</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2026 Sakura Care. All rights reserved. |{" "}
            <a
              href="#"
              className="hover:text-[#f89d64] transition-colors"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="hover:text-[#f89d64] transition-colors"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}