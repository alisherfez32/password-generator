function getPassword() {

const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+?><:{}[]'";



let passwordLength = 12 
let password = ''

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password;
}
function copyClipboard() {
    password.select();
    document.execCommand('copy');
    alert("Password Copied! Thanks for using it");
  }
console.log(randomNumber)
// function getRandomCharacter() {
//     let randomChar = Math.floor(Math.random() * characters.length)
//     return characters[randomChar]
// }

// function generateRandomPassword() {
//     let randomPassword = ""
//     for (let i = 0; i < passwordLength; i++) {
//         randomPassword += getRandomCharacter()         
//     }
//     return randomPassword
// }

// const generatedPasswordOne = generateRandomPassword()

// console.log("Here is a random password: ", generatedPasswordOne)

