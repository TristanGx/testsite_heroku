const express = require("express");
const app = express();

app.set("port", (process.env.PORT || 5000));

app.use(express.static(__dirname + "/public"))

app.set("views", __dirname = "/views");
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index.html")
});

app.listen(app.get("port"), function () {
    console.log("listening at: " + app.get("port"));
});