const Member = require("../models/Member");

// Add Member
const addMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);

    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Members
const getMembers = async (req, res) => {
  try {
    const members = await Member.find();

    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addMember,
  getMembers,
};