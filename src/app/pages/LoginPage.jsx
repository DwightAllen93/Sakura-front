import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Lock, Eye, EyeOff } from "lucide-react";
import { CherryBlossoms } from "../components/CherryBlossoms";
import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  // ✅ prevent going back to login if already logged in
  useEffect(() => {
    if (localStorage.getItem("admin")) {
      navigate("/admin", { replace: true });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const success = await login(username, password);

    if (success) {
      navigate("/admin", { replace: true });
    } else {
      setError("Invalid username or password");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
      <CherryBlossoms />

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-pink-100">

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#f89d64] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-3xl text-primary mb-2">
              Admin Login
            </h1>

            <p className="text-muted-foreground">
              Access the Sakura Care Admin Dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* username */}
            <div>
              <label className="block text-sm mb-2">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            {/* password */}
            <div>
              <label className="block text-sm mb-2">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg"
            >
              Sign In
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}