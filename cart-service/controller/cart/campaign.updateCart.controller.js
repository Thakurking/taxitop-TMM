const NRP = require("node-redis-pubsub");

exports.updateCart = async (req, res) => {
  const config = {
    port: 6379,
    host: "127.0.0.1",
    scope: "demo",
  };
  const nrp = new NRP(config);

  const cart = req.body;
  console.log(cart);

  nrp.emit("UPDATE_CART", cart);
};
