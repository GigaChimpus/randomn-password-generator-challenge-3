// Assignment code here
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numerics = "123456789"
var special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{}|~"

function generatePassword() {

  var passwordLength = window.prompt("Choose a number no less than 8 and no greater than 128");

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("This will not suffice.")
    return
  }
  
  var selection = ""
  var addLowercase = window.confirm("Add lowercase characters?");
  var addUppserCase = window.confirm("Add uppercase characters?");
  var addNumerics = window.confirm("Add nurmeric characters?");
  var addSpecials = window.confirm("Add special characters?");

  if (addLowercase) {
    selection += lowerCase  
  }
  
  if (addUppserCase) {
    selection += upperCase
  }

  if (addNumerics) {
    selection += numerics
  }

  if (addSpecials) {
    selection += special
  }

  if (selection === "") {
    window.alert("This will not suffice.")
    return 
  }

  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * selection.length);
    password += selection[randomIndex];
  }
  
  console.log("password generation entering final stages")

  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
