import { useEffect, useState } from "react";
import API from "../api/api";
import DashboardLayout from "../components/Layout/DashboardLayout";

const IssueReturn = () => {
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [transactions, setTransactions] = useState([]);
  const fetchMembers = async () => {
    try {
      const res = await API.get("/members");
      console.log("Members Data:", res.data);

      setMembers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      console.log("Books Data:", res.data);

      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIssue = async () => {
    try {
      const res = await API.post("/transactions/issue", {
        memberId: selectedMember,
        bookId: selectedBook,
      });

      alert("Book Issued Successfully");

      console.log(res.data);
    } catch (error) {
      console.log(error);

      alert("Failed to Issue Book");
    }
  };

  const fetchTransactions = async () => {
    try {
      const res = await API.get("/transactions");

      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMembers();
    fetchBooks();
    fetchTransactions();
  }, []);

  const handleReturn = async (id) => {
    try {
      await API.put(`/transactions/return/${id}`);

      alert("Book Returned Successfully");

      fetchTransactions();
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Issue / Return Books</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <select
          className="w-full border p-3 rounded"
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
        >
          <option>Select Member</option>

          {members.map((member) => (
            <option key={member._id} value={member._id}>
              {member.name}
            </option>
          ))}
        </select>
        <select
          className="w-full border p-3 rounded mt-4"
          value={selectedBook}
          onChange={(e) => setSelectedBook(e.target.value)}
        >
          <option>Select Book</option>

          {books.map((book) => (
            <option key={book._id} value={book._id}>
              {book.title}
            </option>
          ))}
        </select>

        <button
          onClick={handleIssue}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg mt-4 hover:bg-blue-700"
        >
          Issue Book
        </button>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Transaction History</h2>

          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Member</th>
                <th className="border p-2">Book</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Due Date</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td className="border p-2">{transaction.memberId?.name}</td>

                  <td className="border p-2">{transaction.bookId?.title}</td>

                  <td className="border p-2">{transaction.status}</td>

                  <td className="border p-2">
                    {new Date(transaction.dueDate).toLocaleDateString()}
                  </td>
                  <td className="border p-2">
                    {transaction.status === "Issued" ? (
                      <button
                        onClick={() => handleReturn(transaction._id)}
                        className="bg-green-600 text-white px-4 py-2 rounded"
                      >
                        Return Book
                      </button>
                    ) : (
                      <span className="text-green-600 font-semibold">
                        ✓ Returned
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default IssueReturn;
