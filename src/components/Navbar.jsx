
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

 

  return (
    <div className="flex justify-between items-center bg-amber-300 p-4 text-black text-xl">
      <h1>Student Dashboard</h1>
      <div className="space-x-4 flex items-center">
        {user && <span className="text-lg font-semibold">Hello, {user}</span>}
        {!user && (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Log In
          </Link>
        )}
        {user && (
          <button
            onClick={(e)=>{
              e.preventDefault()
              logout()
                navigate("/")
            }}
             className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
