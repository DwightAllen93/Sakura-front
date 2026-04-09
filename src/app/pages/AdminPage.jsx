import { LogOut, MapPin, Briefcase, Mail, Plus } from "lucide-react";
import { CherryBlossoms } from "../components/CherryBlossoms";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";

export function AdminPage() {

  // ✅ MOVE HOOKS HERE (INSIDE COMPONENT)
  const { services = [], locations = [], inquiries = [] } = useData();
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen">

      {/* HEADER */}
      <section
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(/background.png)` }}
      >
        <CherryBlossoms />

        <button
          className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-red-600 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>

        <div className="text-center">
          <h1 className="text-4xl text-primary">
            Dashboard
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            {/* SERVICES */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold text-primary">
                  {services.length}
                </span>
              </div>
              <p className="text-gray-600">Total Services</p>
            </div>

            {/* LOCATIONS */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold text-primary">
                  {locations.length}
                </span>
              </div>
              <p className="text-gray-600">Total Locations</p>
            </div>

            {/* INQUIRIES */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-4">
                <Mail className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold text-primary">
                  {inquiries.length}
                </span>
              </div>
              <p className="text-gray-600">Total Inquiries</p>
            </div>

          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white p-6 rounded-2xl shadow mb-10">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-4">

              <button
                onClick={() => navigate("/admin/services")}
                className="bg-primary text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-pink-600"
              >
                <Plus className="w-5 h-5" />
                Add Service
              </button>

              <button
                onClick={() => navigate("/admin/locations")}
                className="bg-primary text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-pink-600"
              >
                <Plus className="w-5 h-5" />
                Add Location
              </button>

              <button
                onClick={() => navigate("/admin/inquiries")}
                className="bg-primary text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-pink-600"
              >
                <Mail className="w-5 h-5" />
                View Inquiries
              </button>

            </div>
          </div>

          {/* RECENT INQUIRIES */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Recent Inquiries
            </h2>

            {inquiries.length === 0 ? (
              <p className="text-gray-500">No inquiries yet</p>
            ) : (
              <div className="space-y-3">

                {inquiries.slice(0, 5).map((inq) => (
                  <div
                    key={inq.id}
                    className="border rounded-lg p-3 hover:bg-pink-50 transition"
                  >
                    <p className="font-semibold">{inq.name}</p>
                    <p className="text-sm text-gray-500">{inq.email}</p>
                    <p className="text-sm text-gray-400 truncate">
                      {inq.message}
                    </p>
                  </div>
                ))}

              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}