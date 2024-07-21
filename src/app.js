const express = require("express");
const submitted = require("./routes/submited.routes");
const authentication = require("./routes/auth.routes")

const app = express();

app.use(express.json());

app.use("/login", authentication);
app.use("/submited",submitted );

app.use((req, res, next) => {
    var requestedUrl = req.protocol + "://" + req.get("Host") + req.url;
  //   console.log(
  //     "Inside 'resource not found' handler , Req resource: " + requestedUrl
  //   );
    return res.status(404).send({ success: false, message: "Url Not found" });
  });

module.exports = app;