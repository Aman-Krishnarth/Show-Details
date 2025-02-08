import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    handleLoginDetails(email, password);
  };

  const handleLoginDetails = async (email, password) => {
    const result = await axios.post(
      "https://get-details-h1mu.onrender.com/api/v1/user/login",
      {
        email,
        password,
      }
    );

    alert(result.data.message);

    if (result.data.status) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    }
  };

  useEffect(() => {
    const checkLoggedIn = localStorage.getItem("isLoggedIn");
    if (checkLoggedIn) {
      navigate("/home");
    }
  });

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded bg-black text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Capture email input
            />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded bg-black text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Capture password input
            />
          </div>
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center mb-4">User Data</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
