// var NRP = require("node-redis-pubsub");

// var config = {
//   port: 6379, // Port of your remote Redis server
//   host: "127.0.0.1", // Redis server host, defaults to 127.0.0.1
//   scope: "demo", // Use a scope to prevent two NRPs from sharing messages
// };

// var nrp = new NRP(config);
// console.log(nrp);
const redis = require("redis");
const publisher = redis.createClient();
exports.addToCart = async (req, res) => {
  const cart = req.body;
  publisher.publish("add-to-cart", JSON.stringify(cart));
};
