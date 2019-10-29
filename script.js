var password = {
    length: prompt('How long of a password would you like?(8-128 characters):'),
    specialChar: confirm('Would you like your password to contain special characters?'),
    containNum: confirm('Would you like your password to contain numbers?'),
    lowerCase: confirm('Would you like your password to contain lowercase letters?'),
    upperCase: confirm('Would you like your password to contain uppercase letters?')

}
    console.log(password)



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

