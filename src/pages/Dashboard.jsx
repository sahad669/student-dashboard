import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome Mr.{user}</h1>
      <div>
        <h3>Your Marks</h3>
        <ul>
          <li>Math: 78</li>
          <li>English: 88</li>
        </ul>
      </div>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        onClick={(e) => {
          e.preventDefault()
          logout()
          navigate("/")
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
