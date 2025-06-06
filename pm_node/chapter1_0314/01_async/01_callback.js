function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10; //비동기처리

    if (callback) {
      callback(result);
    }
  }, 1000);
}

// increase(0, (result) => console.log(result));

console.log("start");

increase(0, (result) => {
  console.log(result);

  increase(result, (result) => {
    console.log(result);

    increase(result, (result) => {
      console.log(result);

      increase(result, (result) => {
        console.log(result);

        increase(result, (result) => {
          console.log(result);
          console.log("end");
        });
      });
    });
  });
});
