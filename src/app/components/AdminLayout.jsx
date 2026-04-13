import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from "react-router";
import toast, { Toaster } from "react-hot-toast";
import {
  LayoutDashboard,
  Briefcase,
  MapPin,
  Mail,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Services",
      path: "/admin/services",
      icon: Briefcase,
    },
    {
      name: "Locations",
      path: "/admin/locations",
      icon: MapPin,
    },
    {
      name: "Enquiries",
      path: "/admin/Enquiries",
      icon: Mail,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">

      {/* MOBILE TOPBAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b flex items-center px-4 z-50">

        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>

        <div className="ml-4 font-semibold">
          Sakura Care Admin
        </div>

      </div>


      {/* SIDEBAR */}
      <div
        className={`fixed lg:static z-50 top-0 left-0 h-full w-64 bg-white border-r shadow-sm flex flex-col transition-transform
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >

        {/* Close button mobile */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>


        {/* Logo */}
        <div className="p-6 border-b">
          <img
            src="/logo.png"
            alt="Sakura Care"
            className="h-25 w-auto"
          />
        </div>


        {/* Menu */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">

          {menu.map((item) => {
            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                ${
                  active
                    ? "bg-pink-100 text-primary font-semibold"
                    : "text-muted-foreground hover:bg-pink-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}

        </div>


        {/* Logout */}
        <div className="p-4 border-t">

          <button
          onClick={async () => {
  toast("🌸 Logging out...", {
    icon: "🌸",
    style: {
      background: "#fce7f3",
      color: "#9d174d",
      border: "1px solid #f9a8d4",
      borderRadius: "12px",
    },
  });

  try {
    await fetch("https://ejeepthesis.site/backend/logout.php");
  } catch (err) {
    console.log("Logout API failed");
  }

  setTimeout(() => {
    logout(); // clear frontend
    navigate("/login");
  }, 1000);
}}
            className="w-full flex items-center gap-2 px-4 py-3 rounded-lg
            text-red-600 hover:bg-red-50 transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>

        </div>


        {/* Footer */}
        <div className="p-4 border-t text-xs text-muted-foreground">
          Sakura Care Admin
        </div>

      </div>


      {/* CONTENT */}
      <div className="flex-1 h-screen overflow-y-auto pt-14 lg:pt-0">
        <Outlet />
      </div>

    </div>
  );
}