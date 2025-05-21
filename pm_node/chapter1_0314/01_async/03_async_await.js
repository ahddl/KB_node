function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;

      if (result > 50) {
        const e = new Error("NumberTooBig");

        return reject(e);
      }

      resolve(result);
    }, 1000);
  });

  return promise;
}

// await는 promise 객체에 담긴 resolve에 담긴 결과를 반환해준다.
// await가 달린 비동기처리들을 동기식으로 동작하게 해준다.
async function run() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (error) {
    console.log(error, "발생");
  }
}

run();
