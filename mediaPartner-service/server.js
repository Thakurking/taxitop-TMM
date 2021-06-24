const express = require("express");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mediaPartnerRoute = require("./routes/auth/media.auth.routes");
app.use("/mediaPartner", mediaPartnerRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log("Server Crashed");
})
