const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const fileUpload = require("express-fileupload");

//Enable body parser
app.use(express.static(__dirname + "/public"));

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => {
  console.log("listening to ~" + port);
});
