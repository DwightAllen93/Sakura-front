import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl text-primary transition-all duration-300">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-300">
            We're here to help. Reach out to us for more
            information or to schedule a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-[#fcc9a8] rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f89d64]">
                <Phone className="w-6 h-6 text-white transition-transform duration-300" />
              </div>
              <div className="transition-all duration-300">
                <h3 className="mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  1300 928 928
                </p>
                <p className="text-sm text-muted-foreground">
                  24/7
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-[#fcc9a8] rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f89d64]">
                <Mail className="w-6 h-6 text-white transition-transform duration-300" />
              </div>
              <div className="transition-all duration-300">
                <h3 className="mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@sakuracare.com.au
                </p>
                <p className="text-sm text-muted-foreground">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-[#fcc9a8] rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f89d64]">
                <MapPin className="w-6 h-6 text-white transition-transform duration-300" />
              </div>
              <div className="transition-all duration-300">
                <h3 className="mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Endeavour House, 3E/11 Fourth Avenue,
                </p>
                <p className="text-muted-foreground">
                  Mawson Lakes 5095
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-[#fcc9a8] rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f89d64]">
                <Clock className="w-6 h-6 text-white transition-transform duration-300" />
              </div>
              <div className="transition-all duration-300">
                <h3 className="mb-2">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday to Friday 9:00am-17:00pm
                </p>
                <p className="text-muted-foreground">
                  Saturday to Sunday Closed
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 transition-all duration-300"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 hover:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 transition-all duration-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 hover:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 transition-all duration-300"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 hover:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 transition-all duration-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all duration-300 hover:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f89d64] text-white px-6 py-3 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}