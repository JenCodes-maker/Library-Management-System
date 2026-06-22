import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import DashboardLayout from "../components/Layout/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../api/api";


const data = [
  {
    name: "Books",
    value: 12,
  },
  {
    name: "Members",
    value: 5,
  },
];

const Analytics = () => {
  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await API.get("/analytics");
        setChartData([
          { name: "Books", value: res.data.totalBooks },
          { name: "Members", value: res.data.totalMembers },
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-2 gap-6 mb-6">
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-gray-500">
      Total Books
    </h3>

    <p className="text-3xl font-bold">
      {chartData[0]?.value}
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-gray-500">
      Total Members
    </h3>

    <p className="text-3xl font-bold">
      {chartData[1]?.value}
    </p>
  </div>
</div>

      <div className="bg-white p-6 rounded-xl shadow">
        <ResponsiveContainer
          width="100%"
          height={400}
        >
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
  dataKey="value"
  fill="#2563eb"
/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;