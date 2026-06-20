const Book = require("../models/Book");

// Add Book
const addBook = async (req, res) => {
  try {
    const {
      title,
      isbn,
      author,
      publisher,
      category,
      language,
      edition,
      shelfLocation,
      totalCopies,
      availableCopies,
      description,
    } = req.body;

    const book = await Book.create({
      title,
      isbn,
      author,
      publisher,
      category,
      language,
      edition,
      shelfLocation,
      totalCopies,
      availableCopies,
      description,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Book
const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete Book
const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Book
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
  getBookById,
};