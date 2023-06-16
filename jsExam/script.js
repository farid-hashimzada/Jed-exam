function swapCase(string) {
    let word = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            word += string[i].toLowerCase()
        } else {
            word+=string[i].toUpperCase()
        }
    }
    return word

}

console.log(swapCase('aBcD'))
console.log(swapCase('jAvaScRIPt'))
console.log(swapCase('jeDAcAdemY'))

