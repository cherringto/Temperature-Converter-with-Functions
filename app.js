function nameFunction() {

    var askName = prompt(`What is your name?`)
    alert(`Welcome to the Temperature Converter, ${askName}!`)
    return askName

}

nameFunction()

function temp() {

    var askTemp = Number(prompt(`What temperature would you like to convert? (Please enter a number).`))
    return askTemp

}

function C(temperature) {

    var newCtemp = ((temperature - 32) * 5) / 9
    alert(`${temperature} degrees in Celsius is ${newCtemp} degrees.`)

}

function F(temperature2) {

    var newFtemp = ((temperature2 * 9) / 5) + 32
    alert(`${temperature2} degrees in Farenheit is ${newFtemp} degrees.`)

}

function choice() {

    var tempChoice = prompt(`Do you want to convert to Farenheit (F) or Celsius (C)? (Please enter 'f' or 'c'.)`)
    if ((tempChoice == "f") || (tempChoice == "F")) {
        C(temp())
    } else if ((tempChoice == "c") || (tempChoice == "C")) {
        F(temp())
    } else {
        alert(`Error`)
    }

}

choice()