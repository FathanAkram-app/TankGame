

function init() {
    let canvas = document.getElementById("frame")
    let context = canvas.getContext("2d")
    context.beginPath()
    context.fillStyle = "red"
    context.fillRect(10, canvas.height - 90, 100, 80)
    context.closePath()
    context.beginPath()
    context.fillStyle = "blue"
    context.fillRect(10, 10, 100, 80)
    context.closePath()
}

function startGame(){
    window.addEventListener('keydown',e =>{
        switch (e) {
            
            case 68:
                // player1 move to right
                break;
            case 65:
                // player1 move to left
                break;
            case 39:
                // player2 move to right
            case 37:
                // player2 move to left
            default:
                break;
        }
    },false);
}

startGame()
init()