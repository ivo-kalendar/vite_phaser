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
        // this.step_angle = 90 / 3
        console.log(w, this.step_angle)
        this.distance = (w + this.step_angle) / 2
        this.step = this.distance * 2
    }

    create() {
        // const { width, height } = this.game.scale.baseSize
        // const [ x, y, w, h ] = [ width / 2, height / 2, height / 5, height / 5 ]
        // const square1 = this.add.rectangle(0, 0, w, h, 0xff0000)
        // const square2 = this.add.rectangle(0, 0, w, h, 0xff0000)
        // const square3 = this.add.rectangle(0, 0, w, h, 0xff0000)
        // const rect = this.add.rectangle(0, 0, w, h, 0x00ff00)
        
        // const arr = [
        //     this.add.rectangle(0, 0, w, h, 0xff0000),
        //     this.add.rectangle(0, 0, w, h, 0xff0000),
        //     this.add.rectangle(0, 0, w, h, 0xff0000),
        //     this.add.rectangle(0, 0, w, h, 0xff0000)
        // ]
        // console.log(arr)
        // const step_angle = 90

        // const distance = (w + step_angle) / 2
        // const step = distance * 2


        // const group1 = this.add.group(arr())
        // const group2 = this.add.group(arr())
        // const group3 = this.add.group(arr())


        // group1.incXY(distance * 0, distance * 0, step, 0).propertyValueSet('angle', -45)
        // group2.incXY(distance * 1, distance * 1, step, 0).propertyValueSet('angle', -45)
        // group3.incXY(distance * 2, distance * 2, step, 0).propertyValueSet('angle', -45)
        // // square.setAngle(-45)
        // console.log(group1)
        
        
        // const group = this.createGroup()
        // group.incXY(0, 0, this.step, 0).propertyValueSet('angle', -45)

        const children = this.createGroups(25, 25)
        const container = this.add.container(0, 0, this.createContainer(children))
        // container.on(Phaser.Input.Events.DRAG, ({ x, y }) => container.setPosition(x, y))
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