import { config } from "dotenv";
import express from "express";
import path from "path";
import mongoose from "mongoose";

const routes = require("./routes/apiRoutes.ts");

const app = express(),
    PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
};

app.use(routes);
app.use(express.static("build/public"));

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build/public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

app.listen(PORT, () => {
    console.log("\uD83C\uDF0E  ==> API Server now listening on PORT " + PORT + "!");
});
