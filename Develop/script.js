// Assignment code here
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "123456789"
var special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{}|~"

function generatePassword() {

  var passwordLength = window.prompt("Choose a number no less than 8 and no greater than 128");
  console.log("user has been prompted for password length")

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("The number you have entered is outside of the possible range.")
    console.log("user has not entered a valid number")
    return
  }

  else console.log("user has entered password length")

  var addUppserCase = window.confirm("Add uppercase characters to your password?");
  var addLowerCase = window.confirm("Add lowercase characters to your password?");
  var addNumbers = window.confirm("Add numbers to your password?");
  var addSpecials = window.confirm("Add special characters to your password?");
  var selection = ""

  if (addUppserCase) {
    selection += upperCase
    console.log("user has added uppercase letters to his password")
  }

  if (addLowerCase) {
    selection += lowerCase
    console.log("user has added lowercase letters to his password")
  }
  
  if (addNumbers) {
    selection += numbers
    console.log("user has added numbers to his password")
  }

  if (addSpecials) {
    selection += special
    console.log("user has added special characters to his password")
  }

  if (selection === "") {
    window.alert("You must choose at least one criteria.")
    console.log("user has decided to be difficult")
    return 
  }

  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * selection.length);
    password += selection[randomIndex];
  }
  
  console.log("password generation complete, return result")

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
