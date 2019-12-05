let startPass = document.querySelector("#generate");

function generate(passLength, userChoices) {
    let password = '';

    for (let index = 0; index < passLength; index++) {
        let userChoiceIndex = Math.floor(Math.random() * userChoices.length);
        let userChoice = userChoices[userChoiceIndex]
        let characters = userChoice.split('') // turns a string into an array; 'foo' -> ['f', 'o', 'o']
        let characterIndex = Math.floor(Math.random() * characters.length)

        password += characters[characterIndex]
    }
    return password;
}


startPass.addEventListener('click', function (event) {
    event.preventDefault();

    let specialChar = '!@#$%^&*()+=-_?~,'
    let numericChar = '0123456789'
    let lowercaseChar = 'abcdefghijklmnopqrstuvwxyz'
    let uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let passLength = prompt("How many characters would you like your password to be?");

    while (passLength <= 7 || passLength >= 129) {
        if (passLength <= 7 || passLength >= 129) {
            alert("Please choose a number between 8 and 128.");
            passLength = prompt("How many characters would you like your password to be?");
        }
    }

    let specialConf = confirm("Would you like special characters (!?@#$%^&*+=)?");
    let numericConf = confirm("Would you like numeric characters?");
    let lowercaseConf = confirm("Would you like lowercase characters?");
    let uppercaseConf = confirm("Would you like uppercase characters?");

    while (!specialConf && !numericConf && !lowercaseConf && !uppercaseConf) {
        if (!specialConf && !numericConf && !lowercaseConf && !uppercaseConf) {
            alert("You must have at least one character type!");
            specialConf = confirm("Would you like special characters (!?@#$%^&*+=)?");
            numericConf = confirm("Would you like numeric characters?");
            lowercaseConf = confirm("Would you like lowercase characters?");
            uppercaseConf = confirm("Would you like uppercase characters?");
        }
    }

    let userChoices = [];

    if (specialConf) {
        userChoices.push(specialChar);
    }
    if (numericConf) {
        userChoices.push(numericChar);
    }
    if (lowercaseConf) {
        userChoices.push(lowercaseChar);
    }
    if (uppercaseConf) {
        userChoices.push(uppercaseChar);
    }

    let passwordValue = generate(passLength, userChoices);
    document.querySelector('#password').value = passwordValue
})


let copyText = document.querySelector("#copy");

copyText.addEventListener("click", function () {

    event.preventDefault();

    /* Get the text field */
    var grabText = document.getElementById("password");

    /* Select the text field */
    grabText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + grabText.value);

})