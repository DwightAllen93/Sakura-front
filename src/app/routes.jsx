import { createBrowserRouter } from "react-router";

import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { LocationsPage } from "./pages/LocationsPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { AdminPage } from "./pages/AdminPage";
import { LoginPage } from "./pages/LoginPage";
import { AdminServicesPage } from "./pages/AdminServicesPage";
import { RootLayout } from "./components/RootLayout";
import { AdminLayout } from "./components/AdminLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AdminLocationsPage } from "./pages/AdminLocationsPage";
import { AdminInquiriesPage } from "./pages/AdminInquiriesPage";
export const router = createBrowserRouter([

  // PUBLIC SITE
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "locations", Component: LocationsPage },
      { path: "login", Component: LoginPage },
    ],
  },

  // ADMIN SITE (separate layout)
 {
  path: "/admin",
  element: (
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  ),
  children: [
  { index: true, element: <AdminServicesPage /> },
    { path: "dashboard", element: <AdminPage /> },
  { path: "services", element: <AdminServicesPage /> },
  { path: "locations", element: <AdminLocationsPage /> },
    { path: "inquiries", element: <AdminInquiriesPage /> },
],
}

]);