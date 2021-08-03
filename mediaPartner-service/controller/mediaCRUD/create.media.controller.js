const NRP = require("node-redis-pubsub");

const nrp = new NRP({
  PORT: 6379,
  scope: "create_media",
});

exports.createMedia = async (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {}
};
