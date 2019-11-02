var password = {
    length: prompt('How long of a password would you like?(8-128 characters):'),
    specialChar: confirm('Would you like your password to contain special characters?'),
    containNum: confirm('Would you like your password to contain numbers?'),
    lowerCase: confirm('Would you like your password to contain lowercase letters?'),
    upperCase: confirm('Would you like your password to contain uppercase letters?')
}
var randomArray = [];
// var guaranteeArray;//guarantee one of each char
// var optionsArray = [];


var choiceArray = {
    char: "!@#$%^&*()",
    numbers: "1234567890",
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNPOQRSTUVWXYZ"
}
var optionsArray = [];
var guaranteeArray = [];

function indexGenerator(arrayLength) {
    var indexObject = arrayLength[Math.floor(Math.random() * arrayLength.length)];
    return indexObject;
}

console.log(password.specialChar);
if (password.specialChar === true) {
    newOptions = optionsArray.concat(Array.from(choiceArray.char));
    // console.log(newOptions);
    optionsArray = newOptions;
    guaranteeArray.push(indexGenerator(choiceArray.char)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
    console.log(optionsArray);
}

console.log(password.containNum);
if (password.containNum === true) {
    var withNum = optionsArray.concat(Array.from(choiceArray.numbers));
    optionsArray = withNum;
    guaranteeArray.push(indexGenerator(choiceArray.numbers)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
    console.log(optionsArray);
}

console.log(password.lowerCase);
if (password.lowerCase === true) {
    var withLower = optionsArray.concat(Array.from(choiceArray.lower));
    optionsArray = withLower;
    guaranteeArray.push(indexGenerator(choiceArray.lower)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
    console.log(optionsArray);
}

console.log(password.upperCase);
if (password.upperCase === true) {
    var withUpper = optionsArray.concat(Array.from(choiceArray.upper));
    optionsArray = withUpper;
    guaranteeArray.push(indexGenerator(choiceArray.upper)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
    console.log(optionsArray);
}

console.log(guaranteeArray);
// console.log(optionsArray);

//loop to grab random chars for length amount of password
if (guaranteeArray.length <= password.length) {
    let x = password.length - guaranteeArray.length; //password length - number of options 
    for (i = 0; i < x; i++) {
        var newGua = guaranteeArray.concat(optionsArray[Math.floor(Math.random() * optionsArray.length)]) //random index number of char and pushing into an array
        console.log(newGua)
        guaranteeArray = newGua;
    }
}



console.log(guaranteeArray);

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("genPass");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Password has been copied");
}

