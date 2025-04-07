// Number 1 Assignment
function enterAddress() {
    var lowerAddress = input1.value.toLowerCase() 
newAddress.innerHTML = lowerAddress
} 

// Number 3 Assignment
 function newEssay() {
    var essay = essay1.value.toLowerCase().trim()
    var newEssay = essay.split(/\s+/)
    editedEssay.innerHTML = newEssay
 }


 // Number 7 Assignment
function checkAnswer() {
    var answer = quiz.value.toLowerCase()
    if (answer === "yes") {
        result.innerHTML = "Correct!" 
    } else {
        result.innerHTML = "Incorrect!"
    }
}

// Number 6 Assignment
function checkWeather() {
    var weatherInput = Number(weather.value) 
    if (weatherInput <=19) {
        weatherResult.innerHTML = "It's a cold day!"
    } else if (weatherInput >19 && weather <=28) {
        weatherResult.innerHTML = "It's a warm day!"
    } else if( weatherInput >=29) {
        weatherResult.innerHTML = "It's a hot day!"
    }else {
        weatherResult.innerHTML = "Invalid input!"
    }
    
}


// Number 5 Assignment
function checkReward() {
    var rewardInput = Number(reward.value) 
    if (rewardInput%2 ==1) {
        rewardResult.innerHTML = "You are not eligible for a reward!"
    }else {
        rewardResult.innerHTML = "You are eligible for a reward!"
    }
    
}

