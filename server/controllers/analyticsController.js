const Book = require("../models/Book");
const Member = require("../models/Member");
const Transaction = require("../models/Transaction");

const getAnalytics = async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();

    const totalMembers = await Member.countDocuments();

    const issuedBooks =
      await Transaction.countDocuments({
        status: "Issued",
      });

    const returnedBooks =
      await Transaction.countDocuments({
        status: "Returned",
      });

    res.status(200).json({
      totalBooks,
      totalMembers,
      issuedBooks,
      returnedBooks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};