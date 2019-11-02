var password = {
    length: prompt('How long of a password would you like?(8-128 characters):'),
    specialChar: confirm('Would you like your password to contain special characters?'),
    containNum: confirm('Would you like your password to contain numbers?'),
    lowerCase: confirm('Would you like your password to contain lowercase letters?'),
    upperCase: confirm('Would you like your password to contain uppercase letters?')
}

if (password.length >=8 && password.length <= 128){

}
var char = ['!','#','$','%','&','*','+','<','=','>','?','@','^','~'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var randomArray = [];
var guaranteeArray = [];//guarantee one of each char
var optionsArray = [];
generator();


// console.log(password);
function indexGenerator(arrayLength){
    var indexObject = arrayLength[Math.floor(Math.random() * arrayLength.length)];
    return indexObject;
 }

 function selectCriteria{
     optionsArray.push(char);
 }

//  //start: if statements for each question
//  if (password.specialChar){
//      guaranteeArray.push(indexGenerator(char)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
//       copiedArray = randomArray.concat(char);
//      console.log(copiedArray);
//  } 
 
//  if (password.containNum && password.specialChar){
//      guaranteeArray.push(indexGenerator(numbers)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
//      var copiedArrayNumChar = copiedArray.concat(numbers);
//      console.log(copiedArrayNumChar);
//  } else if (password.containNum){
//      guaranteeArray.push(indexGenerator(numbers)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
//      var copiedArrayNum = randomArray.concat(numbers);
//      console.log(copiedArrayNum);
//  }
//  if (password.lowerCase && ){
//      guaranteeArray.push(indexGenerator(lower)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
//      var copiedArray = randomArray.concat(lower);
//      console.log(copiedArray);
//  }
//  if (password.upperCase){
//      guaranteeArray.push(indexGenerator(upper)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
//      var copiedArray = randomArray.concat(upper);
//      console.log(copiedArray);
//  }
 
 //end: if statements for each question

    // // console.log(password);
    // function indexGenerator(arrayLength){
    //    var indexObject = arrayLength[Math.floor(Math.random() * arrayLength.length)];
    //    return indexObject;
    // }

    // //start: if statements for each question
    // if (password.specialChar){
    //     guaranteeArray.push(indexGenerator(char)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
    //      copiedArray = randomArray.concat(char);
    //     console.log(copiedArray);
    // } 
    
    // if (password.containNum && password.specialChar){
    //     guaranteeArray.push(indexGenerator(numbers)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
    //     var copiedArrayNumChar = copiedArray.concat(numbers);
    //     console.log(copiedArrayNumChar);
    // } else if (password.containNum){
    //     guaranteeArray.push(indexGenerator(numbers)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
    //     var copiedArrayNum = randomArray.concat(numbers);
    //     console.log(copiedArrayNum);
    // }
    // if (password.lowerCase && ){
    //     guaranteeArray.push(indexGenerator(lower)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
    //     var copiedArray = randomArray.concat(lower);
    //     console.log(copiedArray);
    // }
    // if (password.upperCase){
    //     guaranteeArray.push(indexGenerator(upper)); //grabs char array pushes it to indexGenerator returns indexObject and pushes to guaranteeArray
    //     var copiedArray = randomArray.concat(upper);
    //     console.log(copiedArray);
    // }
    
    // //end: if statements for each question

console.log(guaranteeArray);

//loop to grab random chars for length amount of password
function generator(){
    for(i=0;i<password.length;i++){
        guaranteeArray.push(char[Math.floor(Math.random() * char.length)]) //random index number of char and pushing into an array
    }
    // console.log(guaranteeArray);
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

