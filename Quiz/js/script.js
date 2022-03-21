
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)

let resultArea = document.getElementById("result")


function processResults() {
  let personalityResult = getPersonality();
  console.log(personalityResult)

  resultArea.innerHTML = "You are " + personalityResult

  function getPersonality() {
    let spicyChoice = document.querySelector('input[name="spicy"]:checked');
 
    let sundayChoice = document.querySelector('input[name="sunday"]:checked');
  
    let condimentChoice = document.querySelector('input[name="condiment"]:checked');

    let holidayChoice = document.querySelector('input[name="holiday"]:checked');

    let totalPoints = 0; 
    totalPoints = totalPoints + spicyPoints[spicyChoice.id]
    totalPoints = totalPoints + sundayPoints[sundayChoice.id]
    totalPoints = totalPoints + condimentPoints[condimentChoice.id]
    totalPoints = totalPoints + holidayPoints[holidayChoice.id]

    console.log(totalPoints)

    spicyChoice.checked = false;
    sundayChoice.checked = false;
    condimentChoice.checked = false;
    holidayChoice.checked = false;


    if (totalPoints <= 1) {
      return "Simply Perfect Lean Beef Spag Bol"
    } else if (totalPoints <= 3) {
      return "Comforting Cottage Pie"
    } else if (totalPoints <= 5) {
      return "Extra Special Bangers 'N’ Mash"
    } else {
      return "Feel Good Fish 'N' Chips With Peas" 
    }
  }

}


function resetQuiz() {
  resultArea.innerHTML = ""

}


let spicyPoints = {
     basic: 1,
     nandos: 0,
     vindaloo: 2,
     hot: 0
}

let sundayPoints = {
     boozy: 0,
     pub: 1,
     farmer: 1,
     netflix: 2
}

let condimentPoints = {
  relish: 2,
  bbq: 1,
  sriacha: 0,
  aioli: 3
}

let holidayPoints = {
  apres: 2,
  city: 1,
  cruise: 0,
  beach: 3
}

