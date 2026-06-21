import DashboardLayout from "../components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../api/api";

const Home = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalMembers: 0,
    issuedBooks: 0,
    returnedBooks: 0,
  });
  const fetchAnalytics = async () => {
    try {
      const res = await API.get("/analytics");

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">📚 Total Books</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalBooks}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">👥 Total Members</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalMembers}</p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">📤 Issued Books</h3>
          <p className="text-3xl font-bold mt-2">{stats.issuedBooks}</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">🔄 Returned Books</h3>
          <p className="text-3xl font-bold mt-2">{stats.returnedBooks}</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
