import DashboardLayout from "../components/layout/DashboardLayout";

import { useState } from "react";

const Settings = () => {
  const [libraryName, setLibraryName] = useState(
    localStorage.getItem("libraryName") || "Library Management System",
  );

  const [adminName, setAdminName] = useState(
    localStorage.getItem("adminName") || "Jennifer G",
  );

  const saveSettings = () => {
    localStorage.setItem("libraryName", libraryName);

    localStorage.setItem("adminName", adminName);

    alert("Settings Saved Successfully");
  };
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="mb-4">
          <label className="block mb-2 font-medium">Library Name</label>

          <input
            type="text"
            placeholder="Library Management System"
            className="w-full border p-3 rounded"
            value={libraryName}
            onChange={(e) => setLibraryName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Admin Name</label>

          <input
            type="text"
            className="w-full border p-3 rounded"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>

        <button
          onClick={saveSettings}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Save Settings
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
