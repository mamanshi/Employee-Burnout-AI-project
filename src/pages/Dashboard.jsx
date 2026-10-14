import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-purple-700">
            Employee Burnout Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor employee well-being and burnout risk
          </p>
        </div>

        <button className="mt-4 md:mt-0 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700">
          Generate Report
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Employees</p>
          <h2 className="text-3xl font-bold text-purple-700 mt-2">
            520
          </h2>
          <p className="text-green-600 text-sm mt-2">
            +8% this month
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">High Risk</p>
          <h2 className="text-3xl font-bold text-red-600 mt-2">
            18
          </h2>
          <p className="text-red-500 text-sm mt-2">
            Immediate attention required
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Medium Risk</p>
          <h2 className="text-3xl font-bold text-yellow-500 mt-2">
            76
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Need regular monitoring
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Low Risk</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            426
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Healthy employee group
          </p>
        </div>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Burnout Risk */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Overall Burnout Risk
          </h2>

          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full border-[18px] border-purple-500 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-purple-700">
                  28%
                </h3>
                <p className="text-gray-500">
                  At Risk
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6 text-sm">
            <span className="text-green-600">
              ● Low Risk
            </span>
            <span className="text-yellow-500">
              ● Medium Risk
            </span>
            <span className="text-red-600">
              ● High Risk
            </span>
          </div>
        </div>

        {/* Department Risk */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Department Risk
          </h2>

          {/* Engineering */}
          <div className="mb-5">
            <div className="flex justify-between mb-2">
              <span>Engineering</span>
              <span className="font-semibold">72%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-red-500 h-3 rounded-full"
                style={{ width: "72%" }}
              ></div>
            </div>
          </div>

          {/* Sales */}
          <div className="mb-5">
            <div className="flex justify-between mb-2">
              <span>Sales</span>
              <span className="font-semibold">55%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-500 h-3 rounded-full"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>

          {/* HR */}
          <div className="mb-5">
            <div className="flex justify-between mb-2">
              <span>HR</span>
              <span className="font-semibold">32%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "32%" }}
              ></div>
            </div>
          </div>

          {/* Marketing */}
          <div>
            <div className="flex justify-between mb-2">
              <span>Marketing</span>
              <span className="font-semibold">41%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full"
                style={{ width: "41%" }}
              ></div>
            </div>
          </div>
        </div>

      </div>

      {/* Employee Risk Table */}
      <div className="bg-white p-6 rounded-xl shadow mt-6">

        <h2 className="text-xl font-bold text-gray-800 mb-5">
          Employee Risk Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4">Employee</th>
                <th className="p-4">Department</th>
                <th className="p-4">Workload</th>
                <th className="p-4">Overtime</th>
                <th className="p-4">Risk</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-4">Employee 01</td>
                <td className="p-4">Engineering</td>
                <td className="p-4">High</td>
                <td className="p-4">12 hrs</td>
                <td className="p-4">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    High
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Employee 02</td>
                <td className="p-4">Sales</td>
                <td className="p-4">Medium</td>
                <td className="p-4">7 hrs</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                    Medium
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Employee 03</td>
                <td className="p-4">HR</td>
                <td className="p-4">Low</td>
                <td className="p-4">2 hrs</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    Low
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-4">Employee 04</td>
                <td className="p-4">Engineering</td>
                <td className="p-4">High</td>
                <td className="p-4">15 hrs</td>
                <td className="p-4">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    High
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="bg-purple-700 text-white p-6 rounded-xl shadow mt-6">
        <h2 className="text-xl font-bold mb-2">
          🤖 AI Recommendation
        </h2>

        <p>
          Engineering currently shows the highest burnout risk.
          Consider reducing overtime, redistributing workload, and
          scheduling employee wellness check-ins.
        </p>

        <button className="mt-4 bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
          View Recommendations
        </button>
      </div>

    </div>
  );
};

export default Dashboard;