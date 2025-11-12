function repeatString(str, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += str;
    }
    return result;
}
console.log(repeatString("string", 3)); //Output: "stringstringstring"
    


// Do not edit below this line
module.exports = repeatString;
