var speech ="hello baby, good morning. Have a nice day";

function reverseString(str){
    var reverse = "";
    for (var i=0; i<str.length ; i++){
        var char = str [i];
        reverse = char +reverse;
    }
    return reverse;
}

var output = reverseString(speech);
console.log(output);

var output2= reverseString("hello guys,how r u?");
console.log(output2);