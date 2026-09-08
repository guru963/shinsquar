import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import SEO from "../components/SEO";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Process tokens from URL hash or query params
    const processSession = async () => {
      const hash = window.location.hash;
      const search = window.location.search;
      const paramsString = hash ? hash.substring(1) : search ? search.substring(1) : "";
      
      if (paramsString) {
        const params = new URLSearchParams(paramsString);
        const access_token = params.get("access_token");
        const refresh_token = params.get("refresh_token");

        if (access_token && refresh_token) {
          try {
            await supabase.auth.setSession({
              access_token,
              refresh_token,
            });
          } catch (err: any) {
            console.warn("Session setup error:", err);
          }
        }
      }
    };

    processSession();
  }, []);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) {
      setStatus({ type: "error", message: "Please enter a new password." });
      return;
    }
    if (password.length < 6) {
      setStatus({ type: "error", message: "Password must be at least 6 characters long." });
      return;
    }
    if (password !== confirmPassword) {
      setStatus({ type: "error", message: "Passwords do not match. Please verify." });
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password.trim(),
      });

      if (error) {
        setStatus({ type: "error", message: error.message || "Failed to update password. Your link may have expired." });
      } else {
        setIsSuccess(true);
      }
    } catch (err: any) {
      setStatus({ type: "error", message: err.message || "An unexpected error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-[85vh] flex items-center justify-center py-20 px-6 md:px-12 bg-gray-50">
      <SEO
        title="Reset Password | Locall"
        description="Reset your Locall account password securely."
      />

      <div className="max-w-md w-full mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative z-10">
        {isSuccess ? (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Password Reset!
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your password has been successfully updated. You can now use your new password to sign into the Locall app.
            </p>
            <div className="pt-2 space-y-3">
              <a
                href="locall://login"
                className="w-full inline-flex items-center justify-center bg-[#FF6B00] hover:bg-[#E55F00] text-white py-3.5 px-6 rounded-2xl font-bold text-sm transition-all shadow-md"
              >
                Open Locall App
              </a>
              <Link
                to="/"
                className="block text-sm text-gray-500 hover:text-gray-700 font-medium pt-2"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-orange-100 text-[#FF6B00] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Set New Password
              </h1>
              <p className="text-gray-500 text-sm mt-2">
                Enter your new password below to secure your Locall account.
              </p>
            </div>

            {status && (
              <div
                className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-red-50 text-red-700 border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleResetPassword} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-medium cursor-pointer"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#FF6B00] hover:bg-[#E55F00] text-white py-3.5 px-6 rounded-2xl font-bold text-sm hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? "Saving Password..." : "Update Password"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default ResetPassword;
