const multer = require("multer");
const shortID = require("shortid");
const fs = require("fs");

const DIR = "Public/mediaImage";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(DIR)) {
      fs.mkdir(DIR, { recursive: true }, (err) => {
        if (err) throw err;
      });
    }
    cb(null, DIR);
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
      cb(null, new Error("Something Went Wrong"));
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
    fileSize: 1024 * 1024 * 5,
  },
});

module.exports = upload;
