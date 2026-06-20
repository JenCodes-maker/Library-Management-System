const Transaction = require("../models/Transaction");
const Book = require("../models/Book");

// Issue Book
const issueBook = async (req, res) => {
  try {
    const { memberId, bookId } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    if (book.availableCopies <= 0) {
      return res.status(400).json({
        message: "Book not available",
      });
    }

    const dueDate = new Date();

    dueDate.setDate(dueDate.getDate() + 14);

    const transaction =
      await Transaction.create({
        memberId,
        bookId,
        dueDate,
      });

    book.availableCopies -= 1;

    await book.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const returnBook = async (req, res) => {
  try {
    const transaction =
      await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    transaction.status = "Returned";

    await transaction.save();

    const book = await Book.findById(
      transaction.bookId
    );

    if (book) {
      book.availableCopies += 1;
      await book.save();
    }

    res.status(200).json({
      message: "Book Returned",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions =
      await Transaction.find()
        .populate("memberId", "name")
        .populate("bookId", "title");

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  issueBook,
  getTransactions,
  returnBook,
};