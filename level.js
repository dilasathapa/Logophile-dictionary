
document.addEventListener("DOMContentLoaded", function () {
    var name = document.getElementById("name")
    console.log(document.getElementById("name"))
    var n = localStorage.getItem("username")
    name.textContent = n
})


document.getElementById("backbtn").addEventListener("click", goback)
function goback(){
    window.location.href = "./index.html"
}


function checkSolution() {
    const correctSolution = [
        1, 4, 3, 2,
        2, 1, 4, 3,
        3, 2, 1, 4,
        4, 3, 2, 1
    ];

    var userValues = [];
    for (let i = 1; i <= 16; i++) {
        const inputElement = document.getElementById('cell' + i);
        inputElement.addEventListener('input', function () {
            this.value = this.value.replace(/[^1-4]/g, '');
        })
        // console.log(inputElement)
        userValues.push(inputElement.value);
    }

    console.log(userValues)

    let isCorrect = true;
    for (let i = 0; i < correctSolution.length; i++) {
        console.log(userValues[i], correctSolution[i])
        if (userValues[i] != correctSolution[i]) {

            isCorrect = false;
            break;
        }
    }

    // Display the result to the user
    if (isCorrect) {
        alert('Congratulations! Your solution is correct.');
        var score = document.getElementById("scoreboard")
        score.textContent = ""
        score.textContent = "10"
    } else {
        alert('Sorry, your solution is incorrect.');
    }
}


function playbtn(){
    window.location.href = "./level.html"
}
