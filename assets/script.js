
// ARRAY OF NUMERIC CHARACTERS
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// ARRAY OF SPECIAL CHARACTERS
var specialCharacters = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '-', '_', '=', '+', 
'|', '\\', '/', '?', '.', '>', '<', ','
];

// ARRAY OF LOWER CASE CHARACTERS
var lowerCasedCharacters = ['a','b','c','d','e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 
's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// ARRAY OF UPPER CASE LETTERS
var uppperCasedCharacters = [  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
'U','V','W','X','Y','Z'
];
// -------------------------------------

// PROMPT USER FOR PASSWORD OPTIONS
function getPasswordOptions() {
  // VARIABLE TO STORE LENGTH OF PASSWORD
  var length = parseInt(
    prompt('How many characters would you like your password to have?')
  );

// CONDITIONAL STATEMENT CHEKCING IF PW LENGTH IS A NUMBER.  PROMPT WILL END OF FALSE
if (isNaN(length)===true) {
  alert('Password length must be numeric');
  return;
}
};

console.log(getPasswordOptions)


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
