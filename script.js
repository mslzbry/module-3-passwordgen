// Assignment code here
function checkUserInput(input) {
  if (input) {
  //.toLowerCase is for user input: e.g. "Y" turns to "y"
    if (input.toLowerCase() === "y") {
      console.log("y");
      return true;
    }
    else if (input.toLowerCase() === "n") {
      console.log("n");
      return false;
    }
    else {
      // when user inputs something that is not y, Y, n, or N
      console.log("invalid");
      window.alert("Invalid input; please enter y or n.");
      return;
    }
  }
}

function createPassword(useLowerCase, useUpperCase, useNumbers, useSpecialChars, passwordLength) {
  console.log("create password")
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChars = "!@#$%^&*()";
    var password = "";
    var concat = "";
    if (useLowerCase) {
      console.log("lowercase")
      concat = concat.concat(lowerCase) //concat.concat... concat intensifies 
    } 
    if (useUpperCase) {
      console.log("upcase")
      concat = concat.concat(upperCase) 
    } 
    if (useNumbers) {
      console.log("#")
      concat = concat.concat(numbers) 
    } 
    if (useSpecialChars) {
      console.log("sc")
      concat = concat.concat(specialChars) 
    }  

    if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecialChars) {
      window.alert("Invalid input; please select at least one password requirement.");
      return;

    }
   

    console.log(concat)

    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * concat.length);
      password += concat.substring(randomIndex, randomIndex +1);
      }
    return password     
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

    // at this point, user has answered all password critera questions, now generate the password
    var generatedPassword = createPassword(useLowerCase, useUpperCase, useNumbers, useSpecialChars, passwordLength)
    return generatedPassword 
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
