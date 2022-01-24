    let canvas = document.getElementById("game");
    let context = canvas.getContext('2d');
    //Chỉ số quả bóng
    let radius = 10;
    let x = 10;
    let y = 10;
    let dx = 5;
    let dy = 2;
    //Chỉ số thanh chắn
    let bars = {
        x:0,
        y:490,
        width:70,
        height:10,
        speed:40,
    }
    //Vẽ quả bóng
    function drawBall() {
        context.beginPath();
        context.arc(x,y,radius,0,Math.PI*2)
        context.fillStyle = 'red'
        context.fill();
        context.closePath();
    }
    //Vẽ thanh chắn
    function drawBars(){
        context.beginPath();
        context.rect(bars.x, bars.y, bars.width, bars.width);
        context.fillStyle = 'blue';
        context.fill();
        context.closePath();
    }

    //Thiết lập thời gian và tạo hiệu ứng di chuyển
    //C1:
    // setInterval(function (){
    //     context.clearRect(0,0,500,500)
    //     drawBall()
    //     x += dx;
    //     y += dy;
    // },50)
    //C2:Sử dụng requestAnimationFrame để tạo hiệu ứng mượt hơn
    function draw() {

            context.clearRect(0, 0, 500, 500);
            drawBall();
            drawBars();
            x += dx;
            y += dy;
            requestAnimationFrame(draw)

        //Xử lý bóng khi bóng va chạm đường biên
            if (x < 10 || x > 490) {
                dx = -dx
            }
            if (y < 10 || y > 480) {
                dy = -dy
            }
            if (y > 490){
                alert()
            }

    }

    draw()
    //Sự kiện bàn phím
    window.addEventListener("keydown",function (event){
        // console.log("keydown", event.keyCode)
        if (event.keyCode == 37){
            bars.x -= bars.speed;
        } else if (event.keyCode == 39){
            bars.x += bars.speed;
        }
        if (bars.x<0) {
            bars.x = 0;
        }
        else if (bars.x>430) {
            bars.x = 430;
        }

    } )



