// Assignment code here
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "123456789"
var special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{}|~"

function generatePassword() {

  var passwordLength = window.prompt("Choose a number no less than 8 and no greater than 128");
  console.log("user has been prompted for password length")

  //if password length falls outside of the parameters stated below, user will be prompted with a message that they have entered an invalid number
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

  //the following if statements will apply only if true, to be true the user must press confirm on his prompt otherwise the statements will be false. If false the the selection will not be added.
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

  //the password is declared as "" to indicate that it is an empty string with no characters, this is done so that it holds a string value which will then be defined by the var password = generatePassword(); further down
  var password = ""
  //below is a for loop, i will continue to increment by 1 (i++) while it is less than passwordLength
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
