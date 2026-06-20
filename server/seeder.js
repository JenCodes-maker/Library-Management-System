const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Book = require("./models/Book");

dotenv.config();

connectDB();

const books = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "1001",
    category: "Programming",
    totalCopies: 5,
    availableCopies: 5,
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    isbn: "1002",
    category: "Programming",
    totalCopies: 4,
    availableCopies: 4,
  },
  {
    title: "Design Patterns",
    author: "Erich Gamma",
    isbn: "1003",
    category: "Programming",
    totalCopies: 3,
    availableCopies: 3,
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle McDowell",
    isbn: "1004",
    category: "Programming",
    totalCopies: 6,
    availableCopies: 6,
  },
  {
    title: "Introduction to Algorithms",
    author: "Thomas Cormen",
    isbn: "1005",
    category: "Programming",
    totalCopies: 4,
    availableCopies: 4,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "1006",
    category: "Self Help",
    totalCopies: 5,
    availableCopies: 5,
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "1007",
    category: "Self Help",
    totalCopies: 4,
    availableCopies: 4,
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    isbn: "1008",
    category: "Self Help",
    totalCopies: 4,
    availableCopies: 4,
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    isbn: "1009",
    category: "Self Help",
    totalCopies: 5,
    availableCopies: 5,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    isbn: "1010",
    category: "Finance",
    totalCopies: 6,
    availableCopies: 6,
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    isbn: "1011",
    category: "Finance",
    totalCopies: 5,
    availableCopies: 5,
  },
  {
    title: "Operating System Concepts",
    author: "Silberschatz",
    isbn: "1012",
    category: "Computer Science",
    totalCopies: 3,
    availableCopies: 3,
  },
  {
    title: "Computer Networks",
    author: "Andrew Tanenbaum",
    isbn: "1013",
    category: "Computer Science",
    totalCopies: 4,
    availableCopies: 4,
  },
  {
    title: "Database System Concepts",
    author: "Korth",
    isbn: "1014",
    category: "Computer Science",
    totalCopies: 4,
    availableCopies: 4,
  },
  {
    title: "Artificial Intelligence",
    author: "Stuart Russell",
    isbn: "1015",
    category: "AI",
    totalCopies: 3,
    availableCopies: 3,
  },
  {
    title: "Deep Learning",
    author: "Ian Goodfellow",
    isbn: "1016",
    category: "AI",
    totalCopies: 3,
    availableCopies: 3,
  },
  {
    title: "Hands-On Machine Learning",
    author: "Aurelien Geron",
    isbn: "1017",
    category: "AI",
    totalCopies: 4,
    availableCopies: 4,
  },
  {
    title: "Python Crash Course",
    author: "Eric Matthes",
    isbn: "1018",
    category: "Programming",
    totalCopies: 5,
    availableCopies: 5,
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    isbn: "1019",
    category: "Programming",
    totalCopies: 4,
    availableCopies: 4,
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    isbn: "1020",
    category: "Programming",
    totalCopies: 4,
    availableCopies: 4,
  }
];

const importData = async () => {
  try {
    await Book.insertMany(books);

    console.log("Books Imported Successfully 🚀");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();