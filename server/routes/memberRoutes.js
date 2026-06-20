const express = require("express");

const router = express.Router();

const {
  addMember,
  getMembers,
} = require("../controllers/memberController");

router.post("/", addMember);

router.get("/", getMembers);

module.exports = router;