const CartModel = require("../../../Database/Cart.Service.DB/cartSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");
exports.addToCart = async (req, res, next) => {
  if (req.AdPartner || req.admin) {
    try {
      const cart = req.body;
      cart.UserID = req.user;
      const saveCart = await CartModel.create(cart);
      if (saveCart) {
        return res.json({ message: "Media Added To Cart", status: true });
      }
    } catch (error) {
      console.log(error);
      const errors = await mongooseErrorHandler(error);
      if (errors) {
        return res.json({ errors, status: false });
      } else {
        return res.json({ message: "Internal Server Error", status: false });
      }
    }
  } else {
    return res.json({ message: "Please Login First", status: false });
  }
};
