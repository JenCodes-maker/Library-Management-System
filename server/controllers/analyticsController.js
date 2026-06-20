const Book = require("../models/Book");
const Member = require("../models/Member");

const getAnalytics = async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();

    const totalMembers =
      await Member.countDocuments();

    res.status(200).json({
      totalBooks,
      totalMembers,
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