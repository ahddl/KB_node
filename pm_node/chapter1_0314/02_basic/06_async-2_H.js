const pro = require("fs").promises;

pro
  .readdir("./") //false.js 경로로 하면 오류 발생
  .then((result) => {
    console.log("피자를 주문했습니다.");
  })
  .catch((error) => console.log("피자를 주문하지 않습니다.")).finally;
