        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext('2d');
        let score = 0;
        //Chỉ số quả bóng
        let radius = 10;
        let x = 10;
        let y = 10;
        let ox = 5;
        let oy = 2;
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
            context.rect(bars.x, bars.y, bars.width, bars.height);
            context.fillStyle = 'blue';
            context.fill();
            context.closePath();
        }
        //Xử lý bóng chạm vào thanh chắn
        function BallAndBars(){
            if (y >490){
             alert("GAME OVER")
            }else if (x + radius >= bars.x && x + radius <= bars.x + bars.width
                       && y + radius >= 500 - bars.height){
                oy = -oy;
                score += 1;

            }

        }
        function userScore(){
            if (score == 5){
                ox = 7;
                oy = 4;
                alert("LV2")
            }
            if (score == 10){
                ox = 10;
                oy = 7;
                alert("LV3")
            }
            if (score > 15)
                alert("YOU WIN")
        }


        //Thiết lập thời gian và tạo hiệu ứng di chuyển

        //Sử dụng requestAnimationFrame để tạo hiệu ứng mượt hơn
        function draw() {

                context.clearRect(0, 0, 500, 500);
                userScore();
                BallAndBars();
                drawBall();
                drawBars();
                x += ox;
                y += oy;
                requestAnimationFrame(draw)

            //Xử lý bóng khi bóng va chạm đường biên
                if (x < 10 || x > 490) {
                        ox = -ox
                    }
                if (y < 10) {
                        oy = -oy
                    }

                }

        draw()
        //Sự kiện bàn phím
            window.addEventListener("keydown",function (event){
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





