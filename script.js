// Assignment Code
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
//Ask user for valid number of characters
    function generatePassword () {
    var finalArray = [];
    var passwordArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var specialArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(',  ')', '-', '_', '+', '{', '}', '[', ']', '?', '.', ';', ':', '~', '/'];
    var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9'];
    var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
     var passwordCharacter = parseInt(prompt('How many characters would you like your password to have? (8-128 characters'))
      if(passwordCharacter <= 128 || passwordCharacter >= 8) {
        var passwordlength = passwordCharacter;
        console.log(passwordlength)
        var specialCharacter = confirm('Click OK if you would like special characters in your password')
        var numericCharacter = confirm('Click OK if you would like numeric characters in your password')
        var uppercaseCharacter = confirm('Click Ok if you would like uppercase characters in your password')
        if(specialCharacter === true && numericCharacter === true && uppercaseCharacter === true){
         var comboarray = passwordArray.concat(specialArray,numericArray,upperCaseArray);
          
         } else if(specialCharacter === true && numericCharacter === true){
         var comboarray = passwordArray.concat(specialArray, numericArray);
         
         } else if(specialCharacter === true && upperCaseArray === true){
         var comboarray = passwordArray.concat(specialArray, upperCaseArray);
         
         } else if(numericCharacter=== true && uppercaseCharacter === true){
         var comboarray = passwordArray.concat(numericArray, upperCaseArray);
         
         } else if(numericArray === true){
          comboarray = passwordArray.concat(numericArray);
        
         } else if(specialArray === true){
          comboarray = passwordArray.concat(specialArray);
        
         }else if(uppercaseCharacter === true){
          comboarray = passwordArray.concat(upperCaseArray);
      
         }else{
        comboarray = passwordArray;

        }
        console.log(comboarray)
        for(var i=0; i < passwordlength; i++ ){
          let j = Math.floor(Math.random() * comboarray.length) + 1;
          finalArray.push(comboarray[j]) 
        }
        var password1 = finalArray.join("");
        document.querySelector('#password').value = password1
      
      }

      }
      
    } 
//Iterate through  

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
