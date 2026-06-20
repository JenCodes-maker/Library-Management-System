import DashboardLayout from "../components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../api/api";

const Home = () => {
  const [stats, setStats] = useState({
  totalBooks: 0,
  totalMembers: 0,
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
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Books</h3>
          <p className="text-3xl font-bold mt-2">
  {stats.totalBooks}
</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Members</h3>
          <p className="text-3xl font-bold mt-2">
  {stats.totalMembers}
</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Books Issued</h3>
          <p className="text-3xl font-bold mt-2">28</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Overdue</h3>
          <p className="text-3xl font-bold mt-2 text-red-500">4</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;