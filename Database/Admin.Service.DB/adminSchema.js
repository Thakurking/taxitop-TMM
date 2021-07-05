const adminDB = require("./admin.DB.Connection");

const AdminModel = adminDB.model(
  "admin",
  require("../../admin-service/models/admin.model")
);

console.log(AdminModel);
module.exports = AdminModel;
