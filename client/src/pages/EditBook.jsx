import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import DashboardLayout from "../components/layout/DashboardLayout";

const EditBook = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    try {
      const res = await API.get(`/books/${id}`);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const updateBook = async () => {
  try {
    await API.put(`/books/${id}`, book);

    alert("Book Updated Successfully");
  } catch (error) {
    console.log(error);
  }
};

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Edit Book
      </h1>

      {book && (
  <form
    className="bg-white p-6 rounded-xl shadow space-y-4"
  >
    <input
      type="text"
      value={book.title}
      onChange={(e) =>
        setBook({
          ...book,
          title: e.target.value,
        })
      }
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      value={book.author}
      onChange={(e) =>
        setBook({
          ...book,
          author: e.target.value,
        })
      }
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      value={book.category}
      onChange={(e) =>
        setBook({
          ...book,
          category: e.target.value,
        })
      }
      className="w-full border p-3 rounded"
    />

    <button
      type="button"
      className="bg-green-600 text-white px-5 py-3 rounded"
      onClick={updateBook}
    >
      Update Book
    </button>
  </form>
)}
    </DashboardLayout>
  );
};

export default EditBook;