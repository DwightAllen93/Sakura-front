import {
  Home,
  Briefcase,
  Heart,
  Users,
  GraduationCap,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  HandHeart,
  UserCog,
} from "lucide-react";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // ✅ ADDED
import { CherryBlossoms } from "../components/CherryBlossoms";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useData } from "../context/DataContext";

// ✅ map string -> icon
const iconMap = {
  home: Home,
  briefcase: Briefcase,
  heart: Heart,
  users: Users,
  graduationcap: GraduationCap,
  handheart: HandHeart,
  user: UserCog,
};

export function ServicesPage() {
  const { services = [] } = useData();

  const [loading, setLoading] = useState(false); // ✅ LOADING
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      try {
        setLoading(true); // ✅ start loading

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
  duration: 3000,
  style: {
    boxShadow: "0 10px 25px rgba(236,72,153,0.2)",
  },
});// ✅ TOAST

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          toast.error("Failed to send message ❌");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error sending message ❌");
      } finally {
        setLoading(false); // ✅ stop loading
      }
    } else {
      toast.error("Please fill in all required fields ⚠️");
    }
  };

  return (
    <div className="bg-background">

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

      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(/background.png)` }}
      >
        <CherryBlossoms />

        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl text-primary">
            Our Services
          </h1>

          <p className="text-muted-foreground">
            Comprehensive personalised support services
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;

            const imageUrl = service.image
              ? "http://localhost/sakuracare-api/uploads/" + service.image
              : "/background.png";

            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* IMAGE */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <ImageWithFallback
                      src={imageUrl}
                      alt={service.title}
                      className="w-full h-[400px] object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl text-primary">
                    {service.title}
                  </h2>

                  <p className="text-lg text-pink-600 italic">
                    {service.tagline}
                  </p>

                  <p className="text-muted-foreground">
                    {service.description}
                  </p>

                  {service.features && (
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <Check className="w-5 h-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background2.png)` }}
>
         <CherryBlossoms />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl lg:text-4xl text-primary">
              Get in Touch
            </h2>
            <p className="text-lg text-primary max-w-2xl mx-auto">
              We're here to help. Reach out to us for more
              information or to schedule a consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl text-foreground">
                    Phone
                  </h3>
                  <p className="text-primary">1300 928 928</p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl text-foreground">
                    Email
                  </h3>
                  <p className="text-primary">
                    info@sakuracare.com.au
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl text-foreground">
                    Location
                  </h3>
                  <p className="text-primary">
                    Endeavour House, 3E/11 Fourth Avenue,
                  </p>
                  <p className="text-primary">
                    Mawson Lakes 5095
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl text-foreground">
                    Office Hours
                  </h3>
                  <p className="text-primary">
                    Monday to Friday: 9:00am - 5:00pm
                  </p>
                  <p className="text-primary">
                    Saturday to Sunday Closed
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-pink-50 border rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-pink-50 border rounded-lg"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-pink-50 border rounded-lg"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-pink-50 border rounded-lg"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg flex justify-center items-center"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}