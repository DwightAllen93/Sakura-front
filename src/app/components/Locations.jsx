import { MapPin } from "lucide-react";
import { CherryBlossoms } from "./CherryBlossoms";
import { useData } from "../context/DataContext";
import { useEffect, useState } from "react";

export function Locations() {

  const { locations } = useData();

  const [addresses, setAddresses] =
    useState({});


  // ================= reverse geocode

  useEffect(() => {

    locations.forEach(loc => {

      if (!loc.lat || !loc.lng) return;5

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${loc.lat}&lon=${loc.lng}`
      )
        .then(res => res.json())
        .then(data => {

          setAddresses(prev => ({
            ...prev,
            [loc.id]:
              data.display_name,
          }));

        });

    });

  }, [locations]);


  return (

    <section
      className="py-20 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          `url(/background.png)`
      }}
    >

      <CherryBlossoms />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


        {/* Header */}

        <div className="mb-12">

          <h2 className="text-4xl lg:text-5xl text-foreground mb-4">
            Our <span className="font-bold">
              Service Locations
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            We're local. Find the services and support near you.
          </p>

        </div>


        {/* container */}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="grid lg:grid-cols-2 min-h-[600px]">


            {/* list */}

            <div className="p-6 overflow-y-auto max-h-[600px] border-r border-gray-200">


              <div className="mb-4">

                <p className="text-sm text-muted-foreground">

                  <span className="font-semibold text-foreground">
                    Number Of Locations:
                  </span>{" "}

                  {locations.length}

                </p>

              </div>


              <div className="space-y-4">


                {locations.map(location => (

                  <div
                    key={location.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
                  >

                    <h3 className="font-semibold mb-2">
                      {location.name}
                    </h3>


                    <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">

                      <MapPin className="w-4 h-4 text-[#f89d64]" />

                      <div>

                        {/* reverse address */}

                        <p>
                          {addresses[location.id]
                            ? addresses[location.id]
                            : "Loading address..."}
                        </p>

                      </div>

                    </div>


                    {/* directions */}

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#f89d64] text-white px-4 py-2 rounded-lg text-sm hover:bg-primary transition-all duration-300"
                    >
                      Directions
                    </a>

                  </div>

                ))}

              </div>

            </div>


            {/* map iframe keep design */}

            <div className="relative bg-gray-100">

              <iframe
                src="https://maps.google.com/maps?q=Australia&t=&z=4&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Service Locations Map"
                className="w-full h-full"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}