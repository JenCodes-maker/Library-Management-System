import { useState } from "react";
import API from "../api/api";

const AddBook = () => {
  const [formData, setFormData] = useState({
  title: "",
  isbn: "",
  author: "",
  publisher: "",
  category: "",
  language: "",
  edition: "",
  shelfLocation: "",
  totalCopies: "",
  availableCopies: "",
  description: "",
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
      await API.post("/books", formData);

      alert("Book Added Successfully");

      setFormData({
  title: "",
  isbn: "",
  author: "",
  publisher: "",
  category: "",
  language: "",
  edition: "",
  shelfLocation: "",
  totalCopies: "",
  availableCopies: "",
  description: "",
});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add Book</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br /><br />

        <input
  type="text"
  name="isbn"
  placeholder="ISBN"
  value={formData.isbn}
  onChange={handleChange}
/>

<br /><br />

<input
  type="text"
  name="publisher"
  placeholder="Publisher"
  value={formData.publisher}
  onChange={handleChange}
/>

<br /><br />

<input
  type="text"
  name="edition"
  placeholder="Edition"
  value={formData.edition}
  onChange={handleChange}
/>
<br /><br />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <br /><br />

        <input
  type="text"
  name="language"
  placeholder="Language"
  value={formData.language}
  onChange={handleChange}
/>

<br /><br />

<input
  type="text"
  name="shelfLocation"
  placeholder="Shelf Location"
  value={formData.shelfLocation}
  onChange={handleChange}
/>

<br /><br />

<input
  type="number"
  name="totalCopies"
  placeholder="Total Copies"
  value={formData.totalCopies}
  onChange={handleChange}
/>

<br /><br />

<input
  type="number"
  name="availableCopies"
  placeholder="Available Copies"
  value={formData.availableCopies}
  onChange={handleChange}
/>

<br /><br />

<textarea
  name="description"
  placeholder="Book Description"
  value={formData.description}
  onChange={handleChange}
/>


        <br /><br />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;