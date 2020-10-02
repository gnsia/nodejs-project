// array, object

// var i = if(true){console.log(1+1)}
// 조건문, 반복문은 변수가 될 수 없다.

var f = function(){
  console.log(1+1);
  console.log(1+2);
}

// JavaScript에서
// 함수는 변수로 만들 수 있다.





var a = [f];
a[0]();

// 함수는 배열에 넣을 수 있다.





var o = {
  func:f
}
o.func();

// 함수는 객체에 넣을 수 있다.
