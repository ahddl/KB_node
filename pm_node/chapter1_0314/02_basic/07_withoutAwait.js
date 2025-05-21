const { error } = require("console");

const con = fetch("https://jsonplaceholder.typicode.com/users");

con
  .then((response) => response.json()) // 응답을 JSON 형태로 변환
  .then((data) => console.log(data)) // 받은 데이터를 처리
  .catch((error) => console.error("Error:", error)); // 오류 처리
