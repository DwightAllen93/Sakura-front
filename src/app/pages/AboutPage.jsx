import { CherryBlossoms } from "../components/CherryBlossoms";
import { Heart, Users, Smile } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600"
          alt="Professional Care for Complex Behavioural Needs"
          className="w-full h-full object-cover"
          width={1600}
          height={400}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              PROFESSIONAL CARE FOR COMPLEX
              <br />
              BEHAVIOURAL NEEDS
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
     <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background2.png)` }}
>
        <CherryBlossoms />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe we empower lives! We do this through a
            person-focused approach, a culture that here at
            Sakura Care is, and has always been, built upon
            respect and compassion for each individual. We are
            dedicated to supporting those with complex
            behavioural needs, providing comprehensive care that
            prioritizes well-being and fosters meaningful
            growth.
          </p>
        </div>
      </section>

      {/* Our Goals Section */}
      <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background.png)` }}
>
        <CherryBlossoms />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                OUR GOALS
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                At Sakura Care, our goals are rooted in
                providing high-quality services that enhance the
                individual's life stages and transitions for all
                clients. We are committed to delivering
                responsive and tailored care that recognizes the
                dignity and worth of every individual, by
                recognizing the unique strengths and needs of
                each person we support.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800"
                alt="Person celebrating outdoors"
                className="rounded-2xl shadow-2xl w-full h-auto transition-all duration-500 hover:scale-105"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Heart of Our Values */}
     <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background2.png)` }}
>
        <CherryBlossoms />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            THE HEART OF OUR VALUES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-10 h-10 text-[#E91E8C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                RESPECT
              </h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Smile className="w-10 h-10 text-[#E91E8C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                EMPATHY
              </h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-[#E91E8C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                COMMUNITY
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focused Section */}
      <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background.png)` }}
>
        <CherryBlossoms />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800"
                alt="Research focused care"
                className="rounded-2xl shadow-2xl w-full h-auto transition-all duration-500 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                RESEARCH FOCUSED
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sakura Care is committed to grounding our
                practices in research, ensuring the latest
                evidence-based methods. We integrate the latest
                clinical insights to deliver care that is both
                innovative and effective. Our dedication to
                continuous learning means we stay at the
                forefront of advancements in disability care,
                and evidence-based services to better serve
                those we care for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Importance of Diversity Section */}
    <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background2.png)` }}
>
        <CherryBlossoms />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            THE IMPORTANCE OF DIVERSITY
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Sakura Care, we celebrate the rich tapestry of
            cultures, identities, and experiences that define
            our community. Our commitment to diversity goes
            beyond mere inclusion; it's about embracing and
            valuing differences as they exist. We actively seek
            a safe space and tailor our services to reflect the
            varied backgrounds and experiences.
          </p>
        </div>
      </section>

      {/* Community Connection Section */}
       <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(/background.png)` }}
>
        <CherryBlossoms />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                COMMUNITY CONNECTION
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Community participation at Sakura Care is a
                vibrant and inclusive endeavour, aimed at
                bringing people together and creating meaningful
                connections. We believe that community
                involvement is a dynamic aspect of our mission
                and a defining aspect of our broader community,
                creating a more inclusive, compassionate
                society.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800"
                alt="Community connection and participation"
                className="rounded-2xl shadow-2xl w-full h-auto transition-all duration-500 hover:scale-105"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}