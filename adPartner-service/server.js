const express = require("express");
const app = express();

/**********MODULES**********/
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const httpError = require("http-errors");
const cors = require("cors");
const figlet = require("figlet");
const boxen = require("boxen");
require("dotenv").config();
/***************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**********CORS SETUP**********/
const allowlist = [
  "http://localhost:5000",
  "http://localhost:5001",
  "http://localhost:5002",
  "http://localhost:5003",
  "http://localhost:5004",
];
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
app.use(cors(corsOptionsDelegate, { credentials: true }));
/******************************/

/**********MODULES SETUP**********/
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));
/*********************************/

const advertiserRouter = require("./routes/advertiser-auth/adPartner.auth.routes");
app.use("/advertiserPartner", advertiserRouter);

/**********HTTP-ERROR**********/
app.use(async (req, res, next) => {
  next(httpError.NotFound("PAGE NOT FOUND"));
});
app.use((req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: { status: err.status || 500, message: err.message } });
});
/******************************/

/**********SERVER PORT SETUP**********/
const PORT = process.env.PORT || 5002;

const server = app.listen(PORT, () => {
  console.log(`Advertiser Service Server Crashed On PORT ${PORT}`);
  figlet("TAXITOP", {}, function (err, data) {
    if (err) {
      console.log("Something Went Wrong");
      console.dir(err);
      return;
    }
    console.log(
      boxen(data, {
        padding: 1,
        margin: 0,
        borderStyle: "bold",
        borderColor: "yellowBright",
        backgroundColor: "cyan",
      })
    );
  });
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
/*************************************/
