const express = require("express");
const { log } = require("node:console");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(3000, () => {
  console.log(`서버가 3000포트에서 실행 중 입니다...`);
});
