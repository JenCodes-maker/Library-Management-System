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

    const booksByCategory =
  await Book.aggregate([
    {
      $group: {
        _id: "$category",
        count: { $sum: 1 },
      },
    },
  ]);

    const recentTransactions =
  await Transaction.find()
    .populate("memberId", "name")
    .populate("bookId", "title")
    .sort({ createdAt: -1 })
    .limit(5);

    res.status(200).json({
  totalBooks,
  totalMembers,
  issuedBooks,
  returnedBooks,
  booksByCategory,
  recentTransactions,
});

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAnalytics,
};