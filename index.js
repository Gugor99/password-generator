let inputOne = document.getElementById("input-one")
let inputTwo = document.getElementById("input-two")
let inputThree = document.getElementById("input-three")
let inputFour = document.getElementById("input-four")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

function generateRandomness(){
    let index = Math.floor (Math.random() * characters.length)
    return characters[index]
}

function getIt(){
        realPsw = ""
        realPsw2 = ""
        realPsw3 = ""
        realPsw4 = ""
        for (let i = 0;i < passwordLength;i++){
        realPsw += generateRandomness()
        realPsw2 += generateRandomness()
        realPsw3 += generateRandomness()
        realPsw4 += generateRandomness()
    } 
    inputOne.textContent = realPsw
    inputTwo.textContent = realPsw2
    inputThree.textContent = realPsw3
    inputFour.textContent = realPsw4
}
