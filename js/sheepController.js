export class SheepController {

    constructor() {
        this.img = new Image();
        this.img.onload = () => {
            this.loaded;
        };

        this.img.src = '../static/sheep.png'
        this.items = [];

        this.cur = 0;
        this.isLoaded = false;

    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    } nd56285628

    loaded() {
        this.isLoaded = true;
        this.addSheep();
    }

    addSheep() {
        this.items.push(
            new Sheep
        )
    }

    draw(ctx, t, dots){


    }
}