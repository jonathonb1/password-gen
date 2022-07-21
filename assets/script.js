// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// PROMPT USER FOR PASSWORD OPTIONS
function getPasswordOptions() {
  var length = +(
    prompt('How many characters would you like your password to have?')
  );

if (isNaN(length)===true) {
  alert('Password length must be a number');
  return;
}
if (length < 8) {
  alert('Password must be at leaset 8 characters');
  return;
}

if (length > 128) {
  alert('Password must be less than 128 characters')
  return;
}  

// BOOLEANS FOR USER CHOICES
var withLowerCasedCharacters = confirm('Click OK if you would like lower cased letters in your password');
var withUpperCasedCharacters = confirm('Click ok if you would like upper cased letters in your password');
var withNumericCharacters = confirm('Click OK if you would like numbers in your password');
var withSpecialCharacters = confirm('Click OK if you would like a special characters in your password');

// CHECK IF USER DOESNT INCLUDE ANY CHARACTERS - WILL END IF ALL VARIABLES ARE FALSE
if (
  withLowerCasedCharacters === false &&
  withUpperCasedCharacters === false &&
  withNumericCharacters === false &&
  withSpecialCharacters === false
) {
  alert('Must select at least one character type');
  return;
}

// OBJECT STORING USER INPUT
var passwordOptions = {
  length: length,
  withLowerCasedCharacters: withLowerCasedCharacters,
  withUpperCasedCharacters: withUpperCasedCharacters,
  withNumericCharacters: withNumericCharacters,
  withSpecialCharacters: withSpecialCharacters
};

return passwordOptions;
}

// GETTING RANDOM ELEMENT FROM ARRAY
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// GENERATE PASSWORD FUNCTION
function generatePassword() {
  var options = getPasswordOptions();
  // STORING CONCATINATED PASSWORD
  var result = [];

  // ARRAY STORING TYPES OF CHARACTERS IN PASSWORD
  var possibleCharacters = [];

  // ARRAY STORING EACH TYPE OF CHARACTER USER CHOOSES
  var guaranteedCharacters = [];

  // CONDITIIONAL STATEMENTS FOR ARRAYS
  if (options.withLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (options.withUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  if (options.withNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (options.withSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // FOR LOOP TO ITERATE OVER PW LENGTH FROM USER OPTIONS SELECTED - SELECTING RANDOM CHARACTERS FROM ARRAY OF AVAILABLE CHARACTERS
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // TAKE ALL RESULTS AND FORM INTO A STRING
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);