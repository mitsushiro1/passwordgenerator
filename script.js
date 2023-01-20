
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowercase = ["a","b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A","B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="]

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
 function generatePassword(){
  var userChoices = promptOptions();
  
  var options = []
  console.log(options)
  if(userChoices.isNumeric){
    
    options = options.concat(numeric)
  }
  if(userChoices.isUppercase){
    options = options.concat(uppercase)
  }
  if(userChoices.isLowercase){
    options = options.concat(lowercase)
  }
  if(userChoices.isSpecialchar){
    options = options.concat(specialchar)
  }
  console.log(options)
var password = ""

for( var i = 0; i < userChoices.length; i++){
  console.log(password)
  let randomchar = options[Math.floor(Math.random()*options.length)]
  password += randomchar
}
return password;
}

function promptOptions(){
 var length = prompt("what is the length of your password?")
 if (length < 8 || length > 128) { 
  alert("Not meeting length criteria between 8 and 128")
  return null;
 }

 var isNumeric = confirm("do you want to include numeric characters")
 var isLowercase = confirm("do you want to include lower case characters")
 var isSpecialchar = confirm("do you want to include special characters")
 var isUppercase = confirm("do you want to include upper case characters")

if (!isNumeric && !isLowercase && !isSpecialchar && !isUppercase){
  alert("You must choose one option")
  promptOptions();
}



 var objectname = {
  length,
  isNumeric,
  isLowercase,
  isSpecialchar,
  isUppercase
 }
  return objectname;
}

generateBtn.addEventListener("click", writePassword);
