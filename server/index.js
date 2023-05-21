import express from "express";
const app = express();
const PORT = 4000;
app.use((req, res) => {
  res.send("tuan anh");
});
app.listen(PORT, () => {
  console.log("server is running");
});
