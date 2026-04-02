import { Clock, UserCog, Globe } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "SERVICE AVAILABLE 24/7",
    description: "We happily provide 24-hour services.",
  },
  {
    icon: UserCog,
    title: "PERSONALISED PLANS",
    description: "Our care plans are always individually designed for each participant.",
  },
  {
    icon: Globe,
    title: "MULTICULTURAL FOCUS",
    description: "We are a multicultural team, together speaking over nine languages.",
  },
];

export function KeyFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:bg-[#f89d64]">
                <feature.icon className="w-10 h-10 text-[#f89d64] transition-all duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#f89d64]">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}