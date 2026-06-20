const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    isbn: {
      type: String,
      required: true,
      unique: true,
    },

    author: {
      type: String,
      required: true,
    },

    publisher: {
      type: String,
    },

    category: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      default: "English",
    },

    edition: {
      type: String,
    },

    shelfLocation: {
      type: String,
    },

    totalCopies: {
      type: Number,
      required: true,
    },

    availableCopies: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);