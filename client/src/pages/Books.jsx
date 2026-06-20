import { useEffect, useState } from "react";
import API from "../api/api";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
 const deleteBook = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this book?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/books/${id}`);

    fetchBooks();

    alert("Book Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

  const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Books Catalog
        </h1>

        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-bold mb-2">
              {book.title}
            </h2>

            <p className="text-gray-600">
              {book.author}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              ISBN: {book.isbn}
            </p>

            <p className="text-sm text-gray-500">
              Category: {book.category}
            </p>
            <div className="mt-4 flex gap-3">
          <div className="mt-2">
  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
    {book.category}
  </span>
</div>

  <button
    onClick={() => navigate(`/edit-book/${book._id}`)}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Edit
  </button>

  <button
    onClick={() => deleteBook(book._id)}
    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
  >
    Delete
  </button>
</div>
            <div className="mt-4">
              {book.availableCopies > 0 ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </span>
              ) : (
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Out of Stock
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Books;