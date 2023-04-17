// Assignment code here
function checkUserInput(input) {
  if (input) {
  //.toLowerCase is for user input: e.g. "Y" turns to "y"
    if (input.toLowerCase() === "y") {
      console.log("y");
      return true;
    }
    else if (input.toLowerCase() !== "n") {
      // when user inputs something that is not y, Y, n, or N
      console.log("invalid");
      window.alert("Invalid input; please enter y or n.");
      return;
    }
    else {
      console.log("n");
      return false;
    }
  }
}

function generatePassword() {
  var passwordLength = window.prompt("Please enter password length (minimum 8 characters and maximum 128 characters.)"); 
  var useLowerCase;
  var useUpperCase;
  var useNumbers;
  var useSpecialChars;

  if (passwordLength >= 8 && passwordLength <= 128) {
    // if password length is valid, then check if user wants lowercase in password
    // address the edge case where someone repeatedly types in random inputs

    while (useLowerCase == null) {
      var input = window.prompt("Would you like to include lowercase characters? (y/n)")
      useLowerCase = checkUserInput(input);
    }
    while (useUpperCase == null) {
      input = window.prompt("Would you like to include uppercase characters? (y/n)")
      useUpperCase = checkUserInput(input);
    }
    while (useNumbers == null) {
      input = window.prompt("Would you like to include numbers? (y/n)")
      useNumbers = checkUserInput(input);
    }
    while (useSpecialChars == null) {
      input = window.prompt("Would you like to include special characters? (y/n)")
      useSpecialChars = checkUserInput(input);
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
