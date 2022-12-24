/**
 * @author Ivo Kalendarov <ivo.kalendarov@x3mlabs.com>
 * @date October 2022
 */

/**
 * @classdesc
 * A TextureGenerator
 * 
 * @description TextureGenerator generates one texture image from the provided children images.
 * 
 * @class TextureGenerator
 * @extends Phaser.GameObjects.Container
 */

 export default class TextureGenerator4f extends Phaser.GameObjects.Container {
    /**
     * @constructor
     * @param {Object} config - The Configuration Object.
     * @param {Phaser.Scene} config.scene - The Scene to which this GameObject belongs.
     * @param {Number} config.x - The X position of the game box.
     * @param {Number} config.y - The Y position of the game box.
     * @param {String} config.key - The key of the game box background.
     * @param {Array.<Phaser.GameObject>|Phaser.GameObject} config.children - The children of this container.
     * @param {Number} config.width - The width of the game box.
     * @param {Number} config.height - The height of the game box.
     * @param {Number} config.scale - The scale of the game box.
     * @param {Boolean} config.clear - To destroy and clean everything after creation or not.
     */
    constructor({ scene, x, y, key, children, width, height, scale, clear = true}) {
        if (!!scale) {
            width *= scale
            height *= scale
        }

        super(scene, x, y, children)
        if (scene.textures.exists(key)) scene.textures.remove(key)
        if (!!scale) this.setScale(scale)

        /**
         * A Render texture for the Container
         * 
         * @name TextureGenerator4f#renderTexture
         * @type {Phaser.Scene.RenderTexture}
         */
        this.renderTexture = scene.add.renderTexture(0, 0, width, height);
        // this.makeMask(x, y, width, height, height / 10)
        this.renderTexture.draw(this, width / 2, height / 2);
        this.renderTexture.saveTexture(key);
        if (clear) this.clear()
    }

    /**
     * Destroys everything but keeps the children from the parameter
     * 
     * @method TextureGenerator4f#clearButKeep
     * @param {Array.<Phaser.GameObject>|Phaser.GameObject} children - The children of this Container
     * @param {Boolean} destroy_children - To destroy the children after creation or not
     */
    clearButKeep(children, destroy_children = false) {
        this.preserveChild(children)
        if (destroy_children) this.destroyChild(children)
        this.clear()
    }

    /**
     * Clears everything
     * @method TextureGenerator4f#clear
     */
    clear() {
        this.destroy(true)
        this.renderTexture.destroy(true);
    }

    /**
     * Removes the children from this Container so they wont be destroyed
     * along with the Container.
     * 
     * @method TextureGenerator4f#preserveChild
     * @param {Array.<Phaser.GameObject>|Phaser.GameObject} children - The children of this Container
     */
    preserveChild(children) {
        this.remove(children)
    }

    /**
     * Destroys all the children from the parameter.
     * 
     * @method TextureGenerator4f#destroyChild
     * @param {Array.<Phaser.GameObject>|Phaser.GameObject} children - The children of this Container
     */
    destroyChild(children) {
        if (Array.isArray(children) && !!children.length) {
            for (let i = 0; i < children.length; i++) children[i].destroy()
        } else {
            children.destroy()
        }
    }

    // makeMask(x, y, width, height, radius) {
    //     // const graphics = this.scene.add.graphics();
    //     // graphics.fillRoundedRect(x, y, width, height, radius)
    //     // const mask = new Phaser.Display.Masks.GeometryMask(this.scene, graphics);


    //     const mask_graphics = this.scene.add.graphics()
    //     // mask_graphics.beginPath();

    //     // mask_graphics.fillStyle(0xFF0000);
    //     // mask_graphics.fillRect(0, 0, 10, 10)
    //     // mask_graphics.fillRect(x, y, width / 2, height / 2)
    //     mask_graphics.fillRoundedRect(x, y, width, height, radius)
    //     // mask_graphics.fillRoundedRect(x, y, width / 10, height / 10, radius)
    //     // this.renderTexture.createGeometryMask(mask_graphics)
    //     this.add(mask_graphics)

    //     // const mask = new Phaser.Display.Masks.GeometryMask(this.scene, mask_graphics)
    //     // this.setMask(mask)

    //     console.log('MASK: ', mask_graphics)
    // }




    // makeMask(width, height, x, y, radius) {
    //     this.graphics = this.scene.make.graphics();
    //     this.graphics.fillRoundedRect(x, y, width, height, radius)
    //     this.mask = new Phaser.Display.Masks.GeometryMask(this.scene, this.graphics);
    //     this.setMask(this.mask);
    //     // this.renderTexture.clearMask()
    //     this.renderTexture.setMask(this.mask)
    //     // this.renderTexture.createGeometryMask(this.graphics)
    // }
}

