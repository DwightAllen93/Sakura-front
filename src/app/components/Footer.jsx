export function Footer() {
  return (
    <footer className="bg-[#2E1B18] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 👇 CHANGE TO 5 COLUMNS ON LARGE SCREENS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

          {/* BRAND */}
          <div>
            <h3 className="mb-4">Sakura Care</h3>
            <p className="text-sm text-gray-300">
              Where every life Blooms with Care
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>We provide accommodation (SIL)</li>
              <li>Community participation</li>
              <li>Travel Assistance</li>
              <li>Respite</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>1300 928 928</li>
              <li>info@sakuracare.com.au</li>
              <li>Avenue, Mawson Lakes SA 5095</li>
              <li>Endeavour House, 3E/11 Fourth</li>
            </ul>
          </div>

          {/* ✅ NDIS BADGE COLUMN */}
          <div className="flex flex-col items-start lg:items-end">
            <h4 className="mb-4">Registered Provider</h4>

            <img
              src="/ndis-badge.png.png"
              alt="NDIS Registered Provider"
              className="w-40 h-auto mb-3"
            />

            <p className="text-xs text-gray-300 text-left lg:text-right">
              Registration No. <br />
              405 015 4898
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2026 Sakura Care. All rights reserved. |{" "}
            <a>Privacy Policy</a> |{" "}
            <a>Terms of Service</a>
          </p>
        </div>

      </div>
    </footer>
  );
}