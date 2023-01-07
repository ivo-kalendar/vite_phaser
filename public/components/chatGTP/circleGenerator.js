
/**
 * 
 * To use this class, you would first need to create an instance of it and then call the generate method, like this:
 * ```
 * const circleGenerator = new CircleGenerator(this);
 * circleGenerator.generate();
 * ```
 * This code would create an instance of the CircleGenerator class and then use it to generate 5 random circles on the scene.
 * 
 */
export default class CircleGenerator {
    constructor(scene) {
        this.scene = scene;
    }
  
    generate() {
        for (let i = 0; i < 5; i++) {
            const x = Phaser.Math.Between(0, 512);
            const y = Phaser.Math.Between(0, 512);
            const radius = Phaser.Math.Between(10, 50);
            const color = Phaser.Display.Color.HSVToRGB(
                Phaser.Math.Between(0, 1),
                Phaser.Math.Between(0.5, 1),
                Phaser.Math.Between(0.5, 1)
            );
    
            this.scene.add.circle(x, y, radius, color.color);
        }
    }
}
