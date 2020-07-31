var a = 5;
var b = 8;

console.log("before swap ", a, b);
var temp = a;
a = b;
b = temp;
console.log("after swap", a, b);

var x = 5;
var y = 7;
x = x + y; //5+7 12
y = x - y; //12-7 5
x = x - y; //12-5 7
console.log(x, y);

var p=5;
var q=8;
[p,q]=[q,p];
console.log(p,q);

