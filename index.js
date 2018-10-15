const express = require("express");
const app = express();

app.set("port", (process.env.PORT || 5000));

app.use(express.static(__dirname + "/public"))

app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.sendFile("index.html")
});

app.listen(app.get("port"), function () {
    console.log("listening at: " + app.get("port"));
});