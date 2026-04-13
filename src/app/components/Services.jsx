import {
  Home,
  Briefcase,
  Heart,
  Users,
  GraduationCap,
  UserCog,
  HandHeart,
} from "lucide-react";

import { Link } from "react-router";
import { useData } from "../context/DataContext";

// ✅ map DB icon string -> component
const iconMap = {
  home: Home,
  briefcase: Briefcase,
  heart: Heart,
  users: Users,
  graduationcap: GraduationCap,
  user: UserCog,
  handheart: HandHeart,
};

export function Services() {
  const { services = [] } = useData();

  // ✅ LIMIT SERVICES (preview only)
  const previewServices = services.slice(0, 5);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl text-primary">
            Our Services
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support services tailored to meet the
            unique needs of every individual
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* ✅ SERVICES FROM DB */}
          {previewServices.length > 0 ? (
            previewServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Home;

              return (
                <div
                  key={service.id || index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 space-y-4 hover:scale-105 hover:-translate-y-2 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* ICON */}
                  <div className="w-12 h-12 bg-[#fcc9a8] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f89d64]">
                    <Icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl text-card-foreground">
                    {service.title}
                  </h3>

                  {/* TAGLINE */}
                  <p className="text-muted-foreground">
                    {service.tagline}
                  </p>

                  {/* LINK */}
                  <Link
                    to="/services"
                    className="text-[#f89d64] hover:text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Learn more →
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="col-span-3 text-center text-muted-foreground">
              Loading services...
            </p>
          )}

          {/* ✅ SEE MORE CARD */}
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">

            <h3 className="text-xl text-card-foreground mb-2">
              See More
            </h3>

            <p className="text-muted-foreground mb-4">
              Explore all our services in detail
            </p>

            <Link
              to="/services"
              className="bg-[#f89d64] text-white px-4 py-2 rounded-lg hover:bg-primary transition-all"
            >
              View All Services
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}