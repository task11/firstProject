export class Sheep{

    constructor(img, stageWidth){
        this.img = img;

        this.totalFrame = 8;
        this.curFrame = 0; // 현재 프레임
        
        this.imgWidth = 360;
        this.imgHeight = 300;

        this.sheepWidth = 180;
        this.sheepHeight = 150;
           
        this.sheepWidthHalf = this.sheepWidth / 2;
        this.x = stageWidth + this.sheepWidth;
        this.y = 0;
        this.speed = Math.random() * 2 + 1;
        
        this.fps = 24;
        this.fpsTime = 1000 / this.fps;
    }
    
    draw(ctx, t, dots){
        this.animate(ctx, dots);
    }

    animate(ctx, dots){
        this.x = 650;
        this.y = 550;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = '#000000';
        ctx.fillRect(
            -this.sheepWidthHalf,
            -this.sheepHeight + 20,
            this.sheepWidth,
            this.sheepHeight
        );
        ctx.restore();
    }

}