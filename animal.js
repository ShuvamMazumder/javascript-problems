var depth = 5;
var animal = 0;
if (depth <= 10) {
    animal = depth * 50;
} else if (depth <= 20) {
    var firstPart = 10 * 50;
    var remainig = depth - 10;
    var secondPart = remainig * 100;
    animal = firstPart + secondPart;
} else {
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remainig = depth - 20;
    var thirdPart = remainig * 300;
    animal = firstPart + secondPart + thirdPart;
}
console.log(animal);
