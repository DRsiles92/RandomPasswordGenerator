function generatePassword() {//generates password based on choice

    var passwordLength = prompt('How long of a password would you like?(8-128 characters):');
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Input not valid. Try again!");
        return;
    } else {
        var password = {
            specialChar: confirm('Would you like your password to contain special characters?'),
            containNum: confirm('Would you like your password to contain numbers?'),
            lowerCase: confirm('Would you like your password to contain lowercase letters?'),
            upperCase: confirm('Would you like your password to contain uppercase letters?')
        }
        var randomArray = [];
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
        if (guaranteeArray.length < 1) {
            alert("Please select at least one character type!");
            return;
        } else {

            // console.log(optionsArray);


            //loop to grab random chars for length amount of password
            if (guaranteeArray.length <= passwordLength) {
                let x = passwordLength - guaranteeArray.length; //password length - number of options 
                for (i = 0; i < x; i++) {
                    var newGua = guaranteeArray.concat(optionsArray[Math.floor(Math.random() * optionsArray.length)]) //random index number of char and pushing into an array
                    console.log(newGua)
                    guaranteeArray = newGua;
                }
                // var genPassString;
                var genPassString = guaranteeArray.join("");

                function myPassword() {
                    var genPassEl = document.getElementById("genPass");
                    genPassEl.value = genPassString;
                }
                // myPassword();
                console.log(genPassString);
                document.getElementById("genPass").value = genPassString;
                // document.getElementById("genPassEl").Value = genPassString;
                // myPassword();
            }
        }
    }
}

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

