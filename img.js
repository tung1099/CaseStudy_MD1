function myCanvas(){
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        let img = document.getElementById("picture");
        ctx.drawImage(img,0,0);
    }