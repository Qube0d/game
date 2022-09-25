const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");


document.addEventListener("keydown", function (event) {
    jump();
});
function jump() {
    console.log("jump")
    if(mario.classList != "jump"); {
        mario.classList.add("jump")
    }
    setTimeout(function () {
     mario.classList.remove("jump")  
   }, 300)
}

let isAlive = setInterval(function () {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));

    if (pipeLeft < 50 && pipeLeft > 0 && marioTop >= 140) {
        alert("Game over")
    }
}, 10)

//test test 0000