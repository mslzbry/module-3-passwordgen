// Assignment code here
function checkLowerCase() {
  var lowerCase = window.prompt("Would you like to include lowercase characters? (y/n)")
  if (lowerCase.toLowerCase() === "y") {
    console.log("y");
    return true;
  }
  else if (lowerCase.toLowerCase() !== "n") {
    // when user inputs something that is not y, Y, n, or N
    console.log("random ass chars");
    window.alert("Invalid input; please enter y or n.");
    return "invalid"
  }
  else {
    console.log("n");
    return false;
  }
}

function generatePassword() {
  var passwordLength = window.prompt("Please enter password length (minimum 8 characters and maximum 128 characters.)"); 
  var useLowerCase = false;
  var useUpperCase = false;
  var useNumbers = false;
  var useSpecialChars = false;
  if (passwordLength >= 8 && passwordLength <= 128) {
    
    // if password length is valid, then check if user wants lowercase in password
    // address the edge case where someone repeatedly types in random inputs

    useLowerCase = checkLowerCase();

    while (useLowerCase === "invalid") {
      useLowerCase = checkLowerCase();
    }


  } 
  else {
    window.alert("Invalid input; please enter a number between 8 and 128 for password length.")
  }
  console.log(passwordLength);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
