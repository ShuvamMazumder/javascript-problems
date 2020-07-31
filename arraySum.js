/*
var numbers = [45, 65, 70, 23, 4, 5, 6];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
}
console.log("total", sum);
*/

function arraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [45, 65, 70, 23, 4, 5, 6];
var result = arraySum(numbers);
console.log("total", result);

var result2 = arraySum([1, 3, 4, 5, 6, 78]);
console.log("total", result2);
