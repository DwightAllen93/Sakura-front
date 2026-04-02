import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingSupport } from "./FloatingSupport";
import { AuthProvider } from "../context/AuthContext";

export function RootLayout() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <FloatingSupport />
      </div>
    </AuthProvider>
  );
}