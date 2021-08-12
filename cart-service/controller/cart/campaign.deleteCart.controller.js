const CartModel = require("../../../Database/Cart.Service.DB/cartSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");
exports.deleteCart = async (req, res) => {
  if (req.adPartner || req.admin) {
    try {
      const cart_id = req.body.cart_id;
      const deleteCart = await CartModel.deleteOne({ _id: cart_id });
      if (deleteCart) {
        return res.json({ message: "Cart Deleted", status: true });
      }
    } catch (error) {
      console.log(error);
      const errors = await mongooseErrorHandler(error);
      if (errors) {
        return res.json({ errors, status: false });
      }
    }
  } else {
    return res.json({
      message: "Internal Server Please Try Again",
      status: false,
    });
  }
};
