const order = (result, display) => {
  console.log(`${result} 주문 접수`);

  setTimeout(() => {
    display(result);
  }, 3000);
};

const display = (result) => {
  console.log(`${result} 완료!`);
};

order("아메리카노", display);
