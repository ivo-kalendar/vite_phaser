
/**
 * To use this class, you would first need to import it and then create an instance of it and call the generate method, like this:
 * 
 * ```javascript
 * import SquareGenerator from './square-generator';
 * 
 * const squareGenerator = new SquareGenerator(this);
 * squareGenerator.generate();
 * 
 * ```
 * This code would create an instance of the SquareGenerator class and then use it to generate 15 random RGB color squares on the scene.
 * 
 * Modified by me
 */
export default class SquareGenerator {
    constructor(scene) {
        this.scene = scene;
    }

    generate() {
        for (let i = 0; i < 45; i++) {
            const x = Phaser.Math.Between(0, this.scene.game.scale.width);
            const y = Phaser.Math.Between(0, this.scene.game.scale.height);
            const sideLength = Phaser.Math.Between(10, this.scene.game.scale.height / 3);

            this.scene.add.rectangle(x, y, sideLength, sideLength, Phaser.Display.Color.RandomRGB().color);
        }
    }
}

