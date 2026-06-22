import DashboardLayout from "../components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../api/api";

const Home = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalMembers: 0,
    issuedBooks: 0,
    returnedBooks: 0,
    recentTransactions: [],
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
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-lg">📚 Total Books</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalBooks}</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-lg">👥 Total Members</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalMembers}</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-lg">📤 Issued Books</h3>
          <p className="text-3xl font-bold mt-2">{stats.issuedBooks}</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
  <h3 className="text-lg">🔄 Returned Books</h3>
  <p className="text-3xl font-bold mt-2">
    {stats.returnedBooks}
  </p>
</div>

</div> {/* closes the grid */}

<div className="mt-8 bg-white p-6 rounded-xl shadow">

        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3">Member</th>
                <th className="text-left p-3">Book</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {stats.recentTransactions?.map((transaction) => (
                <tr key={transaction._id} className="border-b">
                  <td className="p-3">{transaction.memberId?.name}</td>

                  <td className="p-3">{transaction.bookId?.title || "Book Removed"}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        transaction.status === "Issued"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    
    </DashboardLayout>
  );
};

export default Home;
