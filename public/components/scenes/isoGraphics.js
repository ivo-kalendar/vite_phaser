import Rect from "../helpers/Rect"

export default class IsoGraphics extends Phaser.Scene {
    constructor(config) {
        super(config)
    }

    preload() {
        // this.aspectRatio = 1.2
        this.perfectRatio = this.aspectRatio
    }

    create() {
        this.createBGRect()
    }

    createBGRect() {
        const { width, height } = this.game.config
        let widthHD = height * 1.7777777777777777

        this.logAllTheShit()
        

        const rect = new Rect({ scene: this, width: widthHD, height, lineWidth: 2, fillColor: 0x222200 })
        rect.debugGrid(rect.height)
        const group = this.add.group([
            this.add.isobox(20 * 5, 40 * 5, 20 * 5, 20 * 5, 0xff0000, 0x003300, 0x004400),
            this.add.isotriangle(20 * 5, 20 * 5, 20 * 5, 20 * 5),
            this.add.isobox(40 * 5, 33 * 5, 20 * 5, 20 * 3, 0xff0000, 0x7777aa, 0x00009999ff),
            this.add.isotriangle(40 * 5, 20 * 5, 20 * 5, 20 * 5),
            this.add.isotriangle(60 * 5, 20 * 5, 20 * 5, 20 * 5),
            this.add.isotriangle(80 * 5, 20 * 5, 20 * 5, 20 * 5),
            this.add.isotriangle(100 * 5, 20 * 5, 20 * 5, 20 * 5, false, 0xff0000, 0x00ff00, 0x0000ff),
            this.add.isobox(123 * 5, 26 * 5, 20 * 5, 20 * 0.5),
            this.add.isobox(122 * 5, 24 * 5, 20 * 5, 20 * 0.5),
            this.add.isobox(121 * 5, 22 * 5, 20 * 5, 20 * 0.5),
            this.add.isobox(120 * 5, 20 * 5, 20 * 5, 20 * 0.5),
        ])//.children.entries

        group.children.entries.forEach(t => t.setProjection(2))
        const container = this.add.container(0, 0, group.children.entries)

        console.log(group.children.entries[0].projection, rect.projection)

        this.tweens.add({ targets: group.children.entries, projection: 10, yoyo: true, repeat: -1})
        const onComplete = () => {
            this.tweens.add({ targets: container, angle: 45,  yoyo: true, onComplete})
        }
        this.tweens.add({ targets: container, scaleX: 0.95,  yoyo: true, repeat: -1})
        // this.tweens.add({ targets: rect, projection: 30, repeat: -1 })
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