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
import { CherryBlossoms } from "./CherryBlossoms";
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


  return (
    <section
      className="py-20 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(/background.png)` }}
    >
      <CherryBlossoms />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16 space-y-4">

          <h2 className="text-3xl lg:text-4xl text-primary">
            Our Services
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support services tailored to meet the
            unique needs of every individual
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon =
              iconMap[service.icon] || Home;

            return (

              <div
                key={service.id || index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 space-y-4 hover:scale-105 hover:-translate-y-2 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >

                <div className="w-12 h-12 bg-[#fcc9a8] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f89d64]">

                  <Icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-6" />

                </div>


                <h3 className="text-xl text-card-foreground">
                  {service.title}
                </h3>


                <p className="text-muted-foreground">
                  {service.tagline}
                </p>


                <Link
                  to="/services"
                  className="text-[#f89d64] hover:text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more →
                </Link>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}