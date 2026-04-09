import { Heart, Users, Smile, HandHeart, Gift, Scale, Handshake, Brain, Sun } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Being Heart Centred",
    description: "We care... it isn't always convenient... but it's where our heart and values are.",
  },
  {
    icon: Gift,
    title: "Compassion and Caring",
    description: "We approach clients and their needs with empathy and compassion.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description: "Embracing diversity and ensuring everyone feels valued and welcomed.",
  },
  {
    icon: Scale,
    title: "Equity",
    description: "Providing fair and equal opportunities for all participants.",
  },
  {
    icon: Smile,
    title: "Positivity",
    description: "Maintaining an optimistic and encouraging approach to care.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "Building strong, reliable relationships with participants and families.",
  },
  {
    icon: HandHeart,
    title: "Community",
    description: "Fostering connections and belonging within the community.",
  },
  {
    icon: Brain,
    title: "Empathy",
    description: "Understanding and sharing the feelings of those we support.",
  },
  {
    icon: Heart,
    title: "Respect",
    description: "Honoring the dignity and rights of every individual.",
  },
  {
    icon: Sun,
    title: "Harmony",
    description: "Creating peaceful and balanced environments for all.",
  },
];

export function OurValues() {
  return (
    <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background2.png)` }}
>
      {/* Floating Cherry Blossom Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 transition-all duration-300 hover:text-primary">
            Our Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-[#f89d64] mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            At Sakura Care, our values guide everything we do, ensuring exceptional care and support for every participant.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-2xl hover:transform hover:scale-105 hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#fcc9a8]/30 to-[#f89d64]/30 rounded-xl transition-all duration-300 group-hover:from-[#f89d64] group-hover:to-primary group-hover:scale-110 group-hover:rotate-6">
                <value.icon className="w-8 h-8 text-[#f89d64] transition-all duration-300 group-hover:text-white" />
              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#f89d64]">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#f89d64] to-primary rounded-full transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Add floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}