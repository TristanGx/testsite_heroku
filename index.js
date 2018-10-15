const express = require("express");
const app = express();

app.set("port", (process.env.PORT || 5000));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.listen(app.get("port"), function () {
    console.log("listening at: " + app.get("port"));
});