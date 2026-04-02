import { LogOut } from "lucide-react";
import { CherryBlossoms } from "../components/CherryBlossoms";

export function AdminPage() {
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

          Dashboard content here

        </div>
      </section>

    </div>
  );
}