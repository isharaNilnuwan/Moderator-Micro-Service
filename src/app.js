const express = require("express");
const submitted = require("./routes/moderator.routes");
const authentication = require("./routes/auth.routes");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/login", authentication);
app.use("/moderate", submitted);

app.use((req, res, next) => {
  var requestedUrl = req.protocol + "://" + req.get("Host") + req.url;
  return res.status(404).send({ success: false, message: "Url Not found" });
});


app.use((err, req, res, next) => {
    console.error("err.stack in the request");  
    res.status(err.status || 500);  
    res.json({ message: err.message });  
  });

module.exports = app;
