const Content = require("../models/Content");

exports.createContent = async (req, res) => {
  const { heading, paragraph } = req.body;
  try {
    const contents = await Content.create({
      heading,
      paragraph,
    });
    if (!contents) {
      return res.status(404).json({ message: "content not created" });
    }
    contents.save();
    res.status(200).json({ success: true, contents });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.getContents = async (req, res) => {
  try {
    const contents = await Content.find({}).exec();
    if (!contents) {
      return res.status(404).json({ message: "contents cannot be found!!" });
    } else {
      return res.status(200).json({ contents: contents });
    }
  } catch (error) {}
};
