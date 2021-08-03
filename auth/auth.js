const token = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const jwt = req.cookies.token;
    console.log(jwt);
    if (!jwt) {
      return res.json({ message: "Access failed", status: false });
    }
    token.verify(jwt, process.env.JWT_SECRET, async (err, payload) => {
      if (err) {
        return res.json({
          message: "Authorization Failed",
          status: false,
        });
      }
      if (payload.isAdPartner && payload.adPartner) {
        req.adPartner = payload.adPartner;
        req.isAdPartner = true;
        req.role = "advertisingPartner";
        next();
      }
      if (payload.isMediaPartner && payload.mediaPartner) {
        req.mediaPartner = payload.mediaPartner;
        req.isMediaPartner = payload.isMediaPartner;
        req.role = "mediaPartner";
        next();
      }
      if (payload.isAdmin && payload.admin) {
        req.admin = payload.admin;
        req.isAdmin = payload.isAdmin;
        req.role = "admin";
        next();
      } else {
        return res.json({ message: "User Not Verified", status: false });
      }
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
