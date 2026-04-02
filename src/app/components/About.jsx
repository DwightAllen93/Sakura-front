import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CherryBlossoms } from "./CherryBlossoms";

export function About() {
  return (
  <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background2.png)` }}
>
      <CherryBlossoms />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl text-primary">
              Our Approach: At a Glance
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Sakura Care, we move beyond traditional support
              models by focusing on a partnership that evolves
              with you. Our approach is defined by:
            </p>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong className="text-foreground">
                    Active Partnership:
                  </strong>{" "}
                  We work alongside clients, families, and
                  professionals to create a unified, transparent
                  care network.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong className="text-foreground">
                    Focus on Independence:
                  </strong>{" "}
                  We prioritize empowerment, helping individuals
                  maintain their autonomy and build on their
                  unique strengths.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong className="text-foreground">
                    Flexible Care:
                  </strong>{" "}
                  We reject "one-size-fits-all" solutions,
                  proactively adapting our services to meet the
                  changing rhythms of our clients' lives.
                </div>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">
                The Sakura Care Promise:
              </strong>{" "}
              We ensure that every individual feels seen, heard,
              and fully supported in achieving their personal
              goals.
            </p>
          </div>

          <div className="relative group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1756312177227-1dbdead7841f?w=800"
              alt="Person in wheelchair preparing food independently in kitchen"
              className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
