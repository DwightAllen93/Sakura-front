import { useState } from "react";
import { MessageCircle, X, Phone, Mail, MapPin } from "lucide-react";

export function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#E91E8C] via-[#f89d64] to-pink-300 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-pink-300/50 group"
        aria-label="Customer Support"
      >
        {/* Cherry Blossom Petals Animation */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Icon */}
        {isOpen ? (
          <X className="w-7 h-7 text-white relative z-10 transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
        )}

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#f89d64] animate-ping opacity-20"></span>
      </button>

      {/* Support Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border-2 border-pink-200 overflow-hidden animate-slideUp">
          {/* Header with Cherry Blossom Background */}
          <div className="bg-gradient-to-r from-[#E91E8C] via-[#f89d64] to-pink-400 p-6 relative overflow-hidden">
            {/* Cherry Blossom Pattern */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            
            <h3 className="text-white text-xl font-bold relative z-10">
              How Can We Help?
            </h3>
            <p className="text-white/90 text-sm mt-1 relative z-10">
              We're here to support you
            </p>
          </div>

          {/* Contact Options */}
          <div className="p-6 space-y-4">
            <a
              href="tel:+61-XXX-XXX-XXX"
              className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#E91E8C] via-[#f89d64] to-pink-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Call Us</p>
                <p className="text-sm text-gray-600">1300 928 928</p>
              </div>
            </a>

            <a
              href="mailto:info@sakuracare.com.au"
              className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#E91E8C] via-[#f89d64] to-pink-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email Us</p>
                <p className="text-sm text-gray-600">info@sakuracare.com.au</p>
              </div>
            </a>

            <a
              href="/contact"
              className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#E91E8C] via-[#f89d64] to-pink-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Visit Us</p>
                <p className="text-sm text-gray-600">Find our locations</p>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-4 text-center">
            <p className="text-xs text-gray-600">
              Available Monday - Friday, 9AM - 5PM AEST
            </p>
          </div>
        </div>
      )}

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.7;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
}
