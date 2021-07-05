const axios = require("axios");

exports.testGST = async (req, res) => {
    const gst = "24AAACC1206D1ZP";
    const secret = "DKElFJzLyDVkG6CWVYebcyTZ9Ca2"
  axios
    .get(`https://appyflow.in/api/verifyGST?gstNo=${gst}&key_secret=${secret}`)
    .then(function (response) {
      console.log(response);
      res.json(response.data);
    })
    .catch(function (error) {
      res.json(error);
      console.log(error);
    });
};

