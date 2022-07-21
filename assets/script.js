<<<<<<< HEAD
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

=======
>>>>>>> develop
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

<<<<<<< HEAD
// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
=======
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];


// -------------------------------------

// PROMPT USER FOR PASSWORD OPTIONS
function getPasswordOptions() {
  // VARIABLE TO STORE LENGTH OF PASSWORD
  var length = parseInt(
    prompt('How many characters would you like your password to have?')
  );

// CHEKCK IF PW LENGTH IS A NUMBER.  WILL END OF FALSE
if (isNaN(length)===true) {
  alert('Password length must be a number');
  return;
}

// CHECK IF PASSWORD IS AT LEAST 8 CHARACTERS LONG.
if (length < 8) {
  alert('Password must be at leaset 8 characters');
  return;
}

// STATEMENT TO CHECK IF PASSWORD IS LESS THAN 120 CHARACTERS LONG.  WILL END OF FALSE
if (length > 120) {
  alert('Password must be less than 120 characters')
  return;
}  

// BOOLEAN FOR INCLUDING LOWERCASED LETTERS
var withLowerCasedCharacters = confirm('Click OK if you would like lower cased letters in your password');

// BOOLEAN FOR INCLUDING UPPERCASED LETTERS
var withUpperCasedCharacters = confirm('Click ok if you would like upper cased letters in your password');

// BOOLEAN FOR INCLUDING NUMBERS
var withNumericCharacters = confirm('Click OK if you would like numbers in your password');

// BOOLEAN FOR INCLUDING SPECIAL CHARACTERS
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
>>>>>>> develop
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

<<<<<<< HEAD
// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCasedCharacters) {
=======
// GENERATE PASSWORD FUNCTION
function generatePassword() {
  var options = getPasswordOptions();
  // STORING CONCATINATED PASSWORD
  var result = [];

  // ARRAY STORING TYPES OF CHARACTERS IN PASSWORD
  var possibleCharacters = [];

  // ARRAY STORING EACH TYPE OF CHARACTER USER CHOOSES
  var guaranteedCharacters = [];

  // CONDITIIONAL STATEMENT THAT ADDS ARRAY OF LOWERCASED LETTERS IF USER CHOOSES TO ADD LOWERCASED LETTERS INTO PASSWORD
  if (options.withLowerCasedCharacters) {
>>>>>>> develop
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

<<<<<<< HEAD
  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUpperCasedCharacters) {
=======
  // CONDITIONAL STATEMENT THAT ADDS THE ARRAY OF NUMBERS IF USER CHOOSES TO ADD UPPERCASED LETTERS INTO PASSWORD
  // PUSH NEW RANDOM UPPERCASE LETTER INTO GARANTEEDCHARACTER
  if (options.withUpperCasedCharacters) {
>>>>>>> develop
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

<<<<<<< HEAD
  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
=======
  // CONDITIONAL STATEMENT THAT ADDS THE ARRAY OF NUMBERS IF USER SELECTS NUMBERS TO ADD INTO PASSWORD
  // PUSH NEW RANDOM NUMBER INTO GARANTEEDCHARACTER
  if (options.withNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // CONDITIONAL STATEMENT THAT ADDS THE ARRAY OF SPECIAL CHARACTERS IF USER SELECTS SPECIAL CHARACTERS TO ADD INTO PASSWORD.
  // PUSH RANDOM SPECIAL CHARACTER INTO GARANTEEDCHARACTERS
  if (options.withSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // FOR LOOP TO ITERATE OVER PW LENGTH FROM USER OPTIONS SELECTED - SELECTING RANDOM CHARACTERS FROM ARRAY OF AVAILABLE CHARACTERS
>>>>>>> develop
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

<<<<<<< HEAD
  // Mix in at least one of each guaranteed character in the result
=======
  // PASSWORD TO HAVE AT LEAST ONE OF SELECTED CHARACTERS IN GENERATED PASSWORD.
>>>>>>> develop
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

<<<<<<< HEAD
  // Transform the result into a string and pass into writePassword
=======
  // TAKE ALL RESULTS AND FORM INTO A STRING
>>>>>>> develop
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
<<<<<<< HEAD
generateBtn.addEventListener('click', writePassword);
=======
generateBtn.addEventListener('click', writePassword);

>>>>>>> develop
