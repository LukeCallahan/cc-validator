Input string.
test for string

convert the string to where every number is an element. 


Describe: ccInputToArray()

Test: "It should return an array of strings
Code: ccInputToArray("4102080860435620")
Text:
Expected output: ['4','1','0','2','0','8','0','8','6','0','4','3','5','6','2','0'];


Test: "It should convert each element in the array to a number
Code: stringToNumber(stringArray);
Text:
Expected output: [4,1,0,2,0,8,0,8,6,0,4,3,5,6,2,0];


Test: "It should double every other value in the array.
Code: ccInputToArray(number)
Text:
Expected output: [4,2,0,4,0,16,0,16,6,0,4,6,5,12,2,0];

Test: "It should sum the digits of the numbers that are greater than 9.
Code: ccInputToArray(number)
Text:
Expected output: [4,2,0,4,0,7,0,7,6,0,4,6,5,3,2,0];

Describe: sumArray()

Test: "It should sum all the digits.
Code: ccInputToArray(number)
Text: sumArray(test)
Expected output: 52

Describe: endsInZero()
Test: "It should determine if the sum ends in a zero."
Code: endsInZero(number)
Text:
Expected output: console.log("This credit card is invalid);