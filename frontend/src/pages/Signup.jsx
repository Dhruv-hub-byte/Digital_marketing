import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      alert("Account created successfully!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || "Signup failed");
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

        <h2 className="dm-auth-title">Create an account</h2>
        <p className="dm-auth-subtitle">Get started with your free account today</p>

        <form onSubmit={handleSubmit}>
          <div className="dm-form-group">
            <label className="dm-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="dm-input"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="dm-form-group">
            <label className="dm-label">Email address</label>
            <input
              type="email"
              name="email"
              className="dm-input"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="dm-form-group">
            <label className="dm-label">Password</label>
            <input
              type="password"
              name="password"
              className="dm-input"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="dm-btn dm-btn-primary dm-btn-full dm-btn-lg"
            disabled={loading}
            style={{ marginTop: "8px" }}
          >
            {loading ? "Creating account…" : "Create Account →"}
          </button>
        </form>

        <div className="dm-auth-footer">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </div>

      </div>
    </div>
  );
}

export default Signup;