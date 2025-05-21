function a() {
  console.log("a");
}
function b() {
  setTimeout(() => {
    console.log("b");
  }, 2000);
  c();
}
function c() {
  console.log("c");
}

a();
b();

//출력
// a
// c
// b
