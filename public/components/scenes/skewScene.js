import { ContainerSkew } from 'phaser3-rex-plugins/plugins/quadimage.js';
import ContainerLite from 'phaser3-rex-plugins/plugins/containerlite.js';

export default class SkewSceneGroups extends Phaser.Scene {
    constructor(config) {
        super(config)
    }

    preload() {
        const { width, height } = this.game.scale.baseSize
        const [ x, y, w, h ] = [ width / 2, height / 2, height / 10, height / 10 ]

        this.size = { width, height }
        this.center = { x, y }
        this.rect_size = { width: w, height: h }

        this.step_angle = w / 2.45
        this.distance = (w + this.step_angle) / 2
        this.step = this.distance * 2
    }

    create() {
        const { x, y } = this.center
        const { width, height } = this.size
        // const rect = this.createRect(-20, -20)
        const rect = this.add.rectangle(0, 0, 200, 200, 0xff00ff)
        // const container = this.add.container(x, y, rect)
        const container = new ContainerLite(this, 0, 0, 200, 200, [rect])
        const skew = new ContainerSkew(container, { useParentBounds: false })
        skew.enter().setPosition(x, y)
        skew.setSkewXDeg(45)
        
        console.log(skew, container)
    }

    createGroups(groups = 1, elements = 5) {
        const children = []
        for (let i = 0; i < groups; i++) {
            const group = this.createGroup(elements)
            children.push(...group.getChildren())

            const pos = this.distance * i
            group.incXY(pos, pos, this.step, 0).propertyValueSet('angle', -45)
        }
        return children
    }

    createContainer(children) {
        console.log(children)
        this.container = this.add.container(this.center.x, this.center.y, children)
        this.container.setScale(1, 0.5)
    }

    createGroup(elements) {
        const arr = this.createArray(elements)
        const group = this.add.group(arr)
        return group
    }

    createArray(elements = 5) {
        const arr = new Array(elements).fill().map(() => this.createRect())
        return arr
    } 

    createRect(
        x = 0, 
        y = 0, 
        w = this.rect_size.width, 
        h = this.rect_size.height
    ) {
        const { color32 } = Phaser.Display.Color.RandomRGB()
        const rect = this.add.rectangle(x, y, w, h, color32)
        return rect
    }

    update() {

    }

}