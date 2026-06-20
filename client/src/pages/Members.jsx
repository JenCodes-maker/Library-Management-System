import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { getMembers } from "../api/memberApi";
import { useNavigate } from "react-router-dom";
const Members = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  const fetchMembers = async () => {
    try {
      const res = await getMembers();
      setMembers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleAddMember = () => {
    navigate("/add-member");
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
  <h1 className="text-3xl font-bold">
    Members
  </h1>

  <button
    onClick={() => navigate("/add-member")}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
  >
    + Add Member
  </button>
</div>



        
      <div className="grid grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member._id}
            className="bg-white rounded-xl shadow p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {member.name.charAt(0)}
              </div>

              <div>
                <h2 className="font-bold text-lg">
                  {member.name}
                </h2>

                <p className="text-gray-500 text-sm">
                  {member.memberId}
                </p>
              </div>
            </div>

            <p>
              <strong>Email:</strong> {member.email}
            </p>

            <p>
              <strong>Phone:</strong> {member.phone}
            </p>

            <p>
              <strong>Role:</strong> {member.role}
            </p>

            <p>
              <strong>Fine:</strong> ₹{member.fineAmount}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Members;