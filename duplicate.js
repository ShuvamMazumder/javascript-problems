var num = [2, 4, 5, 5, 2, 3, 8, 9];
var uniqueNum = [];
for (var i = 0; i < num.length; i++) {
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if (index == -1) {
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);
