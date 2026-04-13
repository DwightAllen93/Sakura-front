import { MapPin } from "lucide-react";
import { Link } from "react-router";
import { useData } from "../context/DataContext";
import { useEffect, useState } from "react";

export function HomeLocationsPreview() {
  const { locations = [] } = useData();

  const [addresses, setAddresses] = useState({});

  const API = "https://ejeepthesis.site/backend/uploads/locations/";

  // ✅ only get first 3
  const previewLocations = locations.slice(0, 3);
  useEffect(() => {
    previewLocations.forEach(loc => {
      if (!loc.lat || !loc.lng) return;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${loc.lat}&lon=${loc.lng}`
      )
        .then(res => res.json())
        .then(data => {
          setAddresses(prev => ({
            ...prev,
            [loc.id]: data.display_name
              ? data.display_name.split(",").slice(0, 2).join(", ")
              : ""
          }));
        });
    });
  }, [locations]);

  return (
   <section className="py-20 bg-[#f6eef2]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-primary">
            Accommodations
          </h2>
          <p className="text-muted-foreground">
            Safe and comfortable homes available near you
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ✅ DB DATA (3 ONLY) */}
          {previewLocations.map(location => (
            <div
              key={location.id}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >

              {/* IMAGE */}
              {location.images && location.images.length > 0 && (
                <img
                  src={API + location.images[0]}
                  className="w-full h-40 object-cover"
                />
              )}

              <div className="p-4">

                <h3 className="font-semibold mb-1">
                  {location.name}
                </h3>

                <p className="text-xs text-gray-400 mb-2">
                  📸 {location.images?.length || 0} photos
                </p>

                {/* ADDRESS */}
                <div className="flex gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 text-[#f89d64]" />
                  <p>
                    {addresses[location.id] || "Loading..."}
                  </p>
                </div>

                {/* BUTTON */}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
                  target="_blank"
                  className="text-[#f89d64] text-sm hover:underline"
                >
                  Directions →
                </a>

              </div>
            </div>
          ))}

          {/* ✅ SEE MORE CARD */}
          <div className="border rounded-xl flex flex-col justify-center items-center text-center p-6 hover:shadow-lg transition">

            <h3 className="text-lg font-semibold mb-2">
              See More
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Explore all available locations
            </p>

            <Link
              to="/locations"
              className="bg-[#f89d64] text-white px-4 py-2 rounded-lg hover:bg-primary"
            >
              View All
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}