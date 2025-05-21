function a() {
  console.log("a");
}
function b() {
  setTimeout(() => {
    console.log("b");
  }, 2000);
  console.log("test");
}
function c() {
  console.log("c");
}

a();
b();
c();

//출력
// a
// c
// b
