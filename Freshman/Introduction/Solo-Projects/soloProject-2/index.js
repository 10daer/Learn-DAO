const characters = [
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
]

let generateEl = document.querySelector(".btn");
let lengthEl = document.getElementById("length");
let containerEl = document.querySelector(".container-2");
let passwordEl = document.querySelectorAll(".pw");

let passwordLength = lengthEl.min;
lengthEl.value = passwordLength;
lengthEl.addEventListener("input", () => (passwordLength = lengthEl.value));

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

let currentDivIndex = 0;

function generateRandomPassword() {
  let randomPassword = " ";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter();
  }
  passwordEl[currentDivIndex].textContent = randomPassword;

  // Increment the currentDivIndex
  currentDivIndex++;

  // If the currentDivIndex exceeds the number of password elements,
  // reset the currentDivIndex to 0
  // remove the event listener to prevent further clicks
  if (currentDivIndex >= passwordEl.length) {
    currentDivIndex = 0;
    generateEl.removeEventListener("click", generateRandomPassword);
  }
}
