
const express = require("express");
const app = express();
const productRoutes = require("./routes/product.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Node API server");
});

app.use("/api/products", productRoutes);

module.exports = app;
