const multer = require("multer");
const shortID = require("shortid");
const fs = require("fs");

const DIR = "public/images";
const storage = multer.diskStorage({
  destination: (req, file, db) => {
    if (!fs.existsSync(DIR)) {
      fs.mkdir(DIR);
    }
    cb(null);
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.toLocaleLowerCase().split(" ").join("-");

    if (file.mimetype === "image/jpg") {
      cb(null, shortID.generate() + "-" + filename);
    } else if (file.mimetype === "image/jpeg") {
      cb(null, shortID.generate() + "-" + filename);
    } else if (file.mimetype === "image/png") {
      cb(null, shortID.generate() + "-" + filename);
    } else {
      cb(null, "Something Went Wrong");
    }
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.match(/jpg|jpeg|png|$i/)) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("file Format Not Supported"));
    }
  },
  limits: {
    fileSize: 2 * 1024 * 1024 * 1024,
  },
});

module.exports = upload;
