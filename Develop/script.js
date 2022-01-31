// Assignment code here
// making it so that each character is its own string so that we can pull a random character later
const Letters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = Letters.toUpperCase().split('');
const lowerLetters = Letters.split('');
const specialLetters = '!@#~$%^&*()_+-='.split('');
//creating empty arrays so that we can put the accepted characters in later to use in the password
let password = [];
let choices = [];

let randChoice;

function generatePassword() {
  //asking user if they want specific character, and if yes adding those characters to the empty array
  let askLower = prompt("Do you want lower case letters? (y/n)");
  if(askLower == 'y'){choices.push(0)}

  let askUpper = prompt("Do you want upper case letters? (y/n)");
  if(askUpper == 'y'){choices.push(1)}

  let askSpecial = prompt("Do you want special characters? (y/n)");
  if(askSpecial == 'y'){choices.push(2)}

  let askNumeric = prompt("Do you want numbers? (y/n)");
  if(askNumeric == 'y'){choices.push(3)}

  //asking how long it should be and then turning the response into an integer (usable number)
  let charLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"))

  //making sure it meets the criteria, and then randomly calling a character from the character array
  //looped for the correct amount of characters
  if(charLength > 8 && charLength < 128 && typeof charLength == "number"){
    //iterates through each addition to the password until it hits the correct length
    for(let i = 0; i < charLength; i++){
      randChoice = choices[Math.floor(Math.random() * choices.length)]

      switch(randChoice){
        case 0:
          password.push(lowerLetters[Math.floor(Math.random() * lowerLetters.length)])
          break;
        case 1:
          password.push(upperLetters[Math.floor(Math.random() * upperLetters.length)])
          break;
        case 2:
          password.push(specialLetters[Math.floor(Math.random() * specialLetters.length)])
          break;
        case 3:
          password.push(Math.floor(Math.random() * 10))
          break;
      }
    }
  }
  // if the generatePassword is called, it returns the value of the password we created in the function. 
  //Join puts all of the singular random characters together into a single string for the password
  return password.join('')
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
