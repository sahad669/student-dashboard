

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Student Dashboard</h1>
      <p className="text-lg mb-6">P view your dashboard and marks.</p>
      <Link
        to="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default Home;
