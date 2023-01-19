// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
function generatePassword(){
  var userChoices
  
}

function promptOptions(){
 var 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

problem, it wont let me add anything to the "your secure password"
need to create a drop down menu for criteria
need to ask for the length for the password guessing  if(password.length <8) and if(password.length >128)
need to ask for character types 
lowercase, uppercase, numeric, special characters (string.includes())

