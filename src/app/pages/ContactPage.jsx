import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // ✅ ADDED

export function ContactPage() {

  const [loading, setLoading] = useState(false); // ✅ ADDED

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      try {
        setLoading(true); 

        const res = await fetch("https://ejeepthesis.site/backend/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success) {
          toast.success("🌸 Your message has been sent!", { 
            style: {
              background: "#fce7f3",
              color: "#9d174d",
              border: "1px solid #f9a8d4",
              borderRadius: "12px",
            },
          });

          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
        } else {
          toast.error("Failed to send message ❌"); 
        }
      } catch (error) {
        console.error(error);
        toast.error("Error sending message ❌"); 
      } finally {
        setLoading(false); // ✅ ADDED
      }
    } else {
      toast.error("Please fill in all required fields ⚠️"); 
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">

      {/* ✅ TOASTER (ADDED ONLY, NOTHING REMOVED) */}
        {/* ✅ TOASTER */}
      <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#fce7f3", // light pink
      color: "#9d174d", // dark pink text
      border: "1px solid #f9a8d4",
      borderRadius: "12px",
      padding: "12px 16px",
      fontWeight: "500",
    },
    success: {
      iconTheme: {
        primary: "#ec4899",
        secondary: "#ffffff",
      },
    },
    error: {
      style: {
        background: "#ffe4e6",
        color: "#be123c",
      },
    },
  }}
/>

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with Sakura Care. We're here to answer your questions and help you access the support you need.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We're here to help. Reach out to us for more information or to schedule a consultation.
                </p>
              </div>

              {/* Address */}
              <div className="flex gap-4 group bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <MapPin className="w-6 h-6 text-primary transition-all duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">Endeavour House, 3E/11 Fourth Avenue,</p>
                  <p className="text-gray-700">Mawson Lakes 5095</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 group bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <Phone className="w-6 h-6 text-primary transition-all duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                  <a 
                    href="tel:1300928928" 
                    className="text-gray-700 hover:text-primary transition-colors duration-300 text-lg"
                  >
                    1300 928 928
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 group bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <Mail className="w-6 h-6 text-primary transition-all duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a 
                    href="mailto:info@sakuracare.com.au" 
                    className="text-gray-700 hover:text-primary transition-colors duration-300"
                  >
                    info@sakuracare.com.au
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-4 group bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <Clock className="w-6 h-6 text-primary transition-all duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-700">Monday to Friday: 9:00am - 5:00pm</p>
                  <p className="text-gray-700">Saturday to Sunday: Closed</p>
                </div>
              </div>
            </div>

 {/* Contact Form */}
<div className="bg-white p-8 rounded-2xl shadow-xl">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

  <form className="space-y-6" onSubmit={handleSubmit}>

    <div>
      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
        Full Name *
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        required
        value={formData.name}
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
        Email *
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="john@example.com"
        className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        required
        value={formData.email}
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
        Phone
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="0400 000 000"
        className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        value={formData.phone}
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
        Message *
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Tell us how we can help..."
        className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300"
        required
        value={formData.message}
        onChange={handleChange}
      />
    </div>

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>

  </form>
</div>

          </div>
        </div>
      </section>

      {/* Google Maps Section (UNCHANGED) */}
      <section className="pb-0">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Find Us</h2>
        </div>

        <div className="w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            src="https://www.google.com/maps/embed?... "
            width="100%"
            height="100%"
            style={{ border: 0 }}
          />
        </div>
      </section>

    </div>
  );
}