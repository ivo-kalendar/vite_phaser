export default class RandomSquares {
    constructor(scene) {
        this.squares = [];
  
        for (let i = 0; i < 45; i++) {
            const square = scene.add.rectangle(0, 0, 32, 32);
            square.setFillStyle(Phaser.Display.Color.RandomRGB().color);
            this.squares.push(square);
        }
    }
}
  