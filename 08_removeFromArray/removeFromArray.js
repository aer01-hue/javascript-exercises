const removeFromArray = ["1", "2", "3", "4"];
const arrayWithout3 = [];

for (let i = 0; i < removeFromArray.length; i++) {
    if (removeFromArray[i] !== "3") {
        arrayWithout3.push(removeFromArray[i]);
    }
}

console.log(removeFromArray);
console.log(arrayWithout3);


// Do not edit below this line
module.exports = removeFromArray;
