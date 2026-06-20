const express = require("express");

const router = express.Router();

const {
  issueBook,
  getTransactions,
  returnBook
} = require("../controllers/transactionController");

router.post("/issue", issueBook);
router.get("/", getTransactions);
router.put("/return/:id", returnBook);

module.exports = router;