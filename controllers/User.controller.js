const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newuser = await User.create({
      name,
      email,
      password,
    });
    if (!newuser) {
      return res.status(404).json({ message: "user not created!!" });
    }
    newuser.save();
    res.status(200).json({ message: "user created succesfully!", newuser });
  } catch (error) {
    res.status(500).json({ error });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}).exec();
    if (!users) {
      return res.status(404).json({ message: "no users found!!" });
    } else {
      return res.status(200).json({ users });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
exports.getUsersById = async (req, res) => {
  try {
    const user = await User.findOne({ ...req.params._id }).exec();
    if (!user) {
      res.status(404).json({ message: "no user found!!" });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
