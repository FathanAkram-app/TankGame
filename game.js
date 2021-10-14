

function init() {
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
    
    startGame(context, p1x, p2x, canvas)
    
}

function startGame(context,p1x,p2x,canvas) {
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
            default:
                break;
        }
    },false);
}



init()