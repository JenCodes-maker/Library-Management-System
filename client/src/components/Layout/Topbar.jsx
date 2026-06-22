const Topbar = () => {
  const libraryName =
    localStorage.getItem("libraryName") || "Library Management System";

  const adminName = localStorage.getItem("adminName") || "Admin";

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="font-semibold text-lg">{libraryName}</h2>

      <div className="font-semibold text-gray-700">👤 {adminName}</div>
    </div>
  );
};

export default Topbar;
