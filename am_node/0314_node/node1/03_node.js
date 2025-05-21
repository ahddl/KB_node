let likePizza = true; //true=피자주문, false=피자주문xx

const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문합니다.");
  else reject("피자를 주문하지 않습니다.");
});

pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("데이터요청완료!");  //성공과 실패에 상관없이 뜨는 것?
  });
