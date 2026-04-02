import { Users, HeartHandshake, UsersRound } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

const communityItems = [
  {
    icon: Users,
    description: "We help you to connect with a wide range of education, skill development and employment related inclusion experiences.",
  },
  {
    icon: HeartHandshake,
    description: "We help you to connect with your local community, directly, and also volunteer into health and wellness activities.",
  },
  {
    icon: UsersRound,
    description: "We strive to provide your inclusive and accessible community.",
  },
];

export function CommunityDiversity() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Community Participation */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            COMMUNITY PARTICIPATION
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {communityItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:transform hover:scale-105 group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diversity and Inclusivity */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622258416235-d0390821fc08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwd29ya2VyJTIwaGVhZHNldCUyMGhlbHBpbmclMjBwZXJzb24lMjBvZmZpY2V8ZW58MXx8fHwxNzczNTU3NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Support worker assisting participant"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              DIVERSITY AND INCLUSIVITY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              We actively promote and inclusivity in all people in our care and services. We are a multicultural team, speaking over nine languages. We not only communicate but celebrate the unique backgrounds, experiences and identities of our clients. We strive to create a welcome and supportive environment for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}