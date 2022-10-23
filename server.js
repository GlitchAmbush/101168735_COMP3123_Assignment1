const express = require("express");
const apiRoutes = require("./routes/api");
const mongoose = require("mongoose");

const app = express();

const SERVER_PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());

const DB_CONNECTION_STRING =
  "mongodb+srv://scrungle:4bwMF67U7E4wN5Xl@cluster0.mfenz3g.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/", apiRoutes);

app.route("/").get((req, res) => {
  res.send("COMP3123 - Assignment 1");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
