import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import API from "../api/api";

const AddMember = () => {
  const [formData, setFormData] = useState({
    memberId: "",
    name: "",
    email: "",
    phone: "",
    role: "Student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/members", formData);

      alert("Member Added Successfully");

      setFormData({
        memberId: "",
        name: "",
        email: "",
        phone: "",
        role: "Student",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Add Member
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          name="memberId"
          placeholder="Member ID"
          value={formData.memberId}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option>Student</option>
          <option>Faculty</option>
          <option>Staff</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded"
        >
          Add Member
        </button>
      </form>
    </DashboardLayout>
  );
};

export default AddMember;