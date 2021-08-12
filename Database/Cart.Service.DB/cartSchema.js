const cartDB = require("./cart.DB.connection");

const CartModel = cartDB.model(
  "cart",
  require("../../cart-service/models/cart")
);

console.log(CartModel);
module.exports = CartModel;
