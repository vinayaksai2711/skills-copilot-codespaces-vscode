//create node express web server api
// 1. load express
const express = require("express");
// 2. create app object
const app = express();
// 3. create port
const port = 3000;
// 4. create server
app.listen(port, () => {
  console.log("server is running on port 3000");
});
// 5. create router
app.get("/comments", (req, res) => {
  res.send("all comments");
});
// 6. create router
app.get("/comments/:id", (req, res) => {
  res.send("comment with id");
});
// 7. create router
app.post("/comments", (req, res) => {
  res.send("create new comment");
});
// 8. create router
app.put("/comments/:id", (req, res) => {
  res.send("update comment with id");
});
// 9. create router
app.delete("/comments/:id", (req, res) => {
  res.send("delete comment with id");
});
