var marks = [45, 50, 60, 12, 56, 86];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("hightest value is", max);
