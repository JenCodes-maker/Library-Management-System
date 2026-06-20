const express = require("express");

const router = express.Router();

const {
  issueBook,
} = require("../controllers/transactionController");

router.post("/issue", issueBook);

module.exports = router;