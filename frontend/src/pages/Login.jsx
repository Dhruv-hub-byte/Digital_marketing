import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      if (response.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dm-auth-wrapper">
      <div className="dm-auth-card">

        <div className="dm-auth-logo">
          <div className="logo-icon">📈</div>
          <div className="logo-text">
            <h1>Digital Marketing</h1>
            <p>Management Platform</p>
          </div>
        </div>

        <h2 className="dm-auth-title">Welcome back</h2>
        <p className="dm-auth-subtitle">Sign in to your account to continue</p>

        <form onSubmit={handleLogin}>
          <div className="dm-form-group">
            <label className="dm-label">Email address</label>
            <input
              type="email"
              className="dm-input"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="dm-form-group">
            <label className="dm-label">Password</label>
            <input
              type="password"
              className="dm-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="dm-btn dm-btn-primary dm-btn-full dm-btn-lg"
            disabled={loading}
            style={{ marginTop: "8px" }}
          >
            {loading ? "Signing in…" : "Sign In →"}
          </button>
        </form>

        <div className="dm-auth-divider">
          <span>or continue with</span>
        </div>

        <a
          href="http://localhost:5000/api/auth/linkedin"
          className="dm-btn dm-btn-linkedin dm-btn-full dm-btn-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Sign in with LinkedIn
        </a>

        <div className="dm-auth-footer">
          Don't have an account?{" "}
          <Link to="/signup">Create one</Link>
        </div>

      </div>
    </div>
  );
}

export default Login;