import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

export function Hero() {
  return (
  <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background.png)` }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div className="space-y-6 animate-fadeRight">
            <h1 className="text-4xl lg:text-5xl text-primary animate-fadeUp">
              Where every life Blooms with Care
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed animate-fadeUp delay-150">
              At Sakura Care we provide personalised care for
              individuals with complex behavioural needs. We are
              dedicated to improved quality of life through our
              services. We focus on a holistic approach,
              community engagement and a commitment to ongoing
              research and innovation.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeUp delay-300">
              <Link
                to="/about"
                className="bg-[#f89d64] text-white px-6 py-3 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative group animate-fadeLeft">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764006145420-df3006edf060?w=800"
              alt="Caregiver providing compassionate support to person in wheelchair"
              className="rounded-2xl shadow-2xl w-full h-auto transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
