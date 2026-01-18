import React from "react";
import { FaBoxOpen, FaStar, FaUsers } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";

const DashboardHome = () => {
    const stats = [
    { title: "Products Uploaded", value: 70 },
    { title: "Donations Completed", value: 45 },
    { title: "Monthly Visitors", value: 90 },
  ];
  return (
    <div className="p-6 space-y-6 bg-base-100 min-h-screen">
      
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Assalamu Alaikum 🌙
          </h1>
          <p className="text-sm opacity-90">
            Welcome to Islamic Corner Dashboard
          </p>
        </div>
        <BsMoonStarsFill size={40} className="opacity-80" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Products */}
        <div className="card bg-base-200 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <div className="p-4 bg-blue-500 text-white rounded-full">
              <FaBoxOpen size={22} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">My Products</h2>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="card bg-base-200 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <div className="p-4 bg-yellow-400 text-white rounded-full">
              <FaStar size={22} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">My Ratings</h2>
              <p className="text-2xl font-bold">4.8</p>
            </div>
          </div>
        </div>

        {/* Users */}
        <div className="card bg-base-200 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <div className="p-4 bg-green-500 text-white rounded-full">
              <FaUsers size={22} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-2xl font-bold">1,240</p>
            </div>
          </div>
        </div>
      </div>

        <div className="p-6 space-y-6 bg-base-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-4">📊 Progress Overview</h1>

      {stats.map((stat, idx) => (
        <div key={idx} className="space-y-1">
          <div className="flex justify-between font-semibold text-gray-700">
            <span>{stat.title}</span>
            <span>{stat.value}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${stat.value}%` }}
            ></div>
          </div>
        </div>
      ))}

    </div>
    </div>
  );
};

export default DashboardHome;
