let p1sc = 0
let p2sc = 0

function init(p1s, p2s) {
    console.log("player1 Score :"+p1s)
    console.log("player2 Score :"+p2s)
    p1sc = p1s
    p2sc = p2s
    let canvas = document.getElementById("frame")
    let context = canvas.getContext("2d")
    let p1x = canvas.width - 110
    let p2x = 10
    context.beginPath()
    context.fillStyle = "red"
    context.fillRect(p1x, canvas.height - 90, 100, 80)
    context.closePath()
    context.beginPath()
    context.fillStyle = "blue"
    context.fillRect(p2x, 10, 100, 80)
    context.closePath()
    
    startGame(context, p1x, p2x, canvas, p1s, p2s)
    
}

function startGame(context,p1x,p2x,canvas, p1s, p2s) {
    window.addEventListener('keydown',e =>{
        switch (e.keyCode) {
            
            case 68:
                // player1 move to right
                if(p1x != canvas.width - 110){
                    p1x += 10
                }
                
                context.clearRect(0,canvas.height - 90, canvas.width, canvas.height)
                context.beginPath()
                context.fillStyle = "red"
                context.fillRect(p1x, canvas.height - 90, 100, 80)
                context.closePath()
                break;
            case 65:
                // player1 move to left
                if(p1x != 10){
                    p1x -= 10
                }
                
                context.clearRect(0,canvas.height - 90, canvas.width, canvas.height)
                context.beginPath()
                context.fillStyle = "red"
                context.fillRect(p1x, canvas.height - 90, 100, 80)
                context.closePath()
                break;
            case 39:
                // player2 move to right
                // console.log("move right")
                if(p2x < canvas.width - 110){
                    p2x += 10
                }
                
                context.clearRect(0,0, canvas.width, 90)
                context.beginPath()
                context.fillStyle = "blue"
                context.fillRect(p2x, 10, 100, 80)
                context.closePath()
                break;
            case 37:
                // player2 move to left
                if(p2x != 10){
                    p2x -= 10
                }
                
                context.clearRect(0,0, canvas.width, 90)
                context.beginPath()
                context.fillStyle = "blue"
                context.fillRect(p2x, 10, 100, 80)
                context.closePath()
                break;

            case 87:
                // player1 shoots
                const x1 = shoot(context, p1x, canvas, "p1")
                console.log(x1)
                console.log(p2x)
                if (x1 >= p2x - 40 && x1 <= p2x + 50) {
                    p1s += 1
                    context.clearRect(0,0, canvas.width, canvas.height)
                    init(p1s, p2s)
                    break;
                }
                setTimeout(()=>{
                    context.clearRect(x1 + 40, 0, 10, canvas.height - 110)
                },500)
                break;
            case 40:
                // player2 shoots
                const x2 = shoot(context, p2x, canvas, "p2")
                if (x2 >= p1x - 40 && x2 <= p1x + 50) {
                    p2s += 1
                    context.clearRect(0,0, canvas.width, canvas.height)
                    init(p1s, p2s)
                    break;
                }
                setTimeout(()=>{
                    context.clearRect(x2 + 40, 90, 10, canvas.height)
                },500)
                break;
            default:
                break;
        }
    },false);

    function shoot(context,xPos,canvas,p){
        context.beginPath()
        context.fillStyle = "yellow"
        if (p == "p1") {
            context.fillRect(xPos + 40, 0, 10, canvas.height - 110)
        }else{
            context.fillRect(xPos + 40, 90, 10, canvas.height)
        }
        context.closePath()
        
        return xPos
    }
}

let toggleGuide = true
const guide = document.getElementById("guide")
function showGuide() {
    toggleGuide = !toggleGuide
    console.log(toggleGuide)
    guide.style = toggleGuide ? "display: inline" : "display: none"
}

function showScore() {
    alert("player1 scored : "+ p1sc + "\nplayer2 scored : "+ p2sc)
    
}





init(0,0)