export default class Rect extends Phaser.GameObjects.Rectangle {
    constructor({
        scene,
        x = 0, 
        y = 0, 
        width = 1080, 
        height = 1080, 
        fillColor = 0x555555, 
        lineWidth = 1,
        color = 0xffffff, 
        fillAlpha = 1,
        alpha = 1,
        origin = 0,
        scaleToFit = false,
    }) {

        // if (lineWidth) {
        //     x = x + lineWidth
        //     y = y + lineWidth
        //     width = width - lineWidth * 2
        //     height = height - lineWidth * 2
        // }

        if (scaleToFit) {
            const scale = scene.game.config.height / 1080
            x = x * scale
            y = y * scale
            width = width * scale
            height = height * scale
        }

        super(scene, x, y, width, height, fillColor, fillAlpha)
        this.setOrigin(origin)
        lineWidth && this.setStrokeStyle(lineWidth, color, alpha)
        this.scene.add.existing(this)

        // const rect_config = {
        //     scene,
            // // x: x + lineWidth,
            // // y: y + lineWidth,
            // // width: width - lineWidth * 2,
            // // height: height - lineWidth * 2,
            // // fillColor,
        //     // fillAlpha
        // // }

        // super(...rect_config)
    }

    debugGrid(cell_size = 0) {
        const { scene, x, y, width, height, originX, originY, strokeColor, strokeAlpha, lineWidth, fillColor } = this
        const cellWidth = !!cell_size ? cell_size : width / 10
        const cellHeight = !!cell_size ? cell_size : height / 10 

        this.grid = scene.add.grid(x, y, width, height, cellWidth, cellHeight, fillColor, 0, strokeColor, strokeAlpha)
        this.grid.setOrigin(originX, originY)
        // this.grid.setStrokeStyle(lineWidth, strokeColor, strokeAlpha)
    }
}