const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordEl1 = document.getElementById("passowrd1-el");
let passwordEl2 = document.getElementById("passowrd2-el");
let passwordLength = 12;
function generateRandomCharacter() {
  let randomCharacter = Math.floor(Math.random() * characters.length);
  return characters[randomCharacter];
}

function generateRandomPassword() {
  let randomPassword1 = "";
  let randomPassword2 = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword1 += generateRandomCharacter();
    randomPassword2 += generateRandomCharacter();
    passwordEl1.textContent = randomPassword1;
    passwordEl2.textContent = randomPassword2;
  }
}

passwordEl1.addEventListener("click", copyToClipboard);
passwordEl2.addEventListener("click", copyToClipboard);

function copyToClipboard(event) {
  const passwordText = event.target.textContent;
  navigator.clipboard
    .writeText(passwordText)
    .then(() => {
      console.log("Password copied to clipboard: ", passwordText);

      event.target.classList.add("copied");
      setTimeout(() => {
        event.target.classList.remove("copied");
      }, 200);
    })
    .catch((error) => {
      console.error("Failed to copy password: ", error);
    });
}
