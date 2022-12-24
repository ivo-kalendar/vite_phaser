import Rect from "../helpers/Rect"

export default class ScaleGraphics extends Phaser.Scene {
    constructor(config) {
        super(config)
    }

    preload() {
        // this.aspectRatio = 1.2
        this.perfectRatio = this.aspectRatio
    }

    create() {
        this.createBGRect()
        this.createMainRect()
    }

    createBGRect() {
        const { width, height } = this.game.config
        let widthHD = height * 1.7777777777777777

        this.logAllTheShit()
        

        const rect = new Rect({ scene: this, width: widthHD, height, fillColor: 0x222200 })
        // rect.debugGrid(100)
    }

    createMainRect() {
        const rect = new Rect({ scene: this, scaleToFit: true, fillColor: 0x000088 })
        const g = this.make.graphics()
        const { x, y, width, height } = rect
        g.fillRoundedRect(x, y, width, height, 5)
        const mask = Phaser.Display.Masks.GeometryMask(g)
        rect.setMask(mask)
        const rect2 = new Rect({ scene: this, scaleToFit: true, fillColor: 0x662288, width: 1000 })
        rect.setDepth(1)
        console.log(rect.depth, rect2.depth)
        // rect.setPosition(rect.x, rect.y, rect2.z + 2, rect2.w + 2)
        // rect.debugGrid(100)
    }

    logAllTheShit() {
        const { width, height } = this.game.config
        let widthHD = height * 1.7777777777777777

        console.log(
            'ratio: ', this.aspectRatio,
            'game_height: ', height, 
            'game width: ', width,
            'HD width: ', widthHD
        )
    }

    get scaledHDWidth() {
        return this.game.config.height * 1.7777777777777777
    }

    get aspectRatio() {
        return this.scale.displaySize.aspectRatio
    }

    set aspectRatio(ratio) {
        if (typeof ratio !== 'number') return
        this.scale.displaySize.setAspectRatio(ratio)
        this.perfectRatio = this.scale.displaySize.aspectRatio
    }

    set perfectRatio(ratio) {
        let tolerant = 0.02
        let actual, desired = 1.7777

        if (typeof ratio === 'object') {
            const { aspectRatio } = this?.scale?.displaySize
            actual = ratio?.actual ? ratio.actual : aspectRatio ? aspectRatio : actual
            desired = ratio?.desired ? ratio.desired : desired
            tolerant = ratio?.tolerant ? ratio.tolerant : tolerant
        } else if (typeof ratio === 'number') actual = ratio

        this.perfect_ratio = Phaser.Math.Within(actual, desired, tolerant) // -  16/9 ratio
    }
}