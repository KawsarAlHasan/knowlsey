import React from "react";
import logo from "../assets/Black.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Section - Logo and Links */}
          <div className="flex flex-col gap-6">
            {/* Logo */}

            <img src={logo} alt="logo" className="w-20" />

            {/* Navigation Links */}
            <div className="flex flex-col gap-3">
              <a
                href="#download"
                className="text-white hover:text-gray-300 transition-colors text-base"
              >
                Download Now
              </a>
              <a
                href="#features"
                className="text-white hover:text-gray-300 transition-colors text-base"
              >
                Features
              </a>
              <a
                href="#faq"
                className="text-white hover:text-gray-300 transition-colors text-base"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Center Section - Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold">Contact</h3>

            {/* Email */}
            <a
              href="mailto:Support@scaffassistant.co.uk"
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group"
            >
              <div className="w-5 h-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="underline">Support@scaffassistant.co.uk</span>
            </a>

            {/* Hours */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>Monday - Friday 09 : 00 - 17 : 00</span>
            </div>
          </div>

          {/* Right Section - App Downloads */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold">Get the App</h3>

            <div className="flex flex-col gap-3">
              {/* App Store Button */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-black rounded-lg px-4 py-2.5 hover:bg-gray-200 transition-colors border border-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-semibold -mt-0.5">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-lg px-4 py-2.5 hover:bg-gray-900 transition-colors border border-white"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path
                    fill="#EA4335"
                    d="M3.609 3.609L13.5 13.5 3.609 3.609z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M3.609 20.391L13.5 10.5 3.609 20.391z"
                  />
                  <path
                    fill="#4285F4"
                    d="M13.5 12L3.609 3.609 20.391 12 13.5 12z"
                  />
                  <path
                    fill="#34A853"
                    d="M13.5 12L3.609 20.391 20.391 12 13.5 12z"
                  />
                  <path
                    fill="url(#gradient)"
                    d="M3 3.609V20.391c0 .449.362.811.811.811L13.5 12 3.811 2.798A.81.81 0 003 3.609z"
                  />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#00D7FE" />
                      <stop offset="100%" stopColor="#34A853" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-semibold -mt-0.5">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Scaff Assistant. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
