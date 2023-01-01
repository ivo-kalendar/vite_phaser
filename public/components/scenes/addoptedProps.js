import TestClass from "../obj/testClass"
import obj from "../obj/testObjs"

export default class AddoptedProps extends Phaser.Scene{
    constructor(config) {
        super(config)
        // Object.assign(this, obj, {aaaaa: 222}, {bbbbb: 333}, {cccccc: 4444})
        const testClass = new TestClass(999, 888)
        Object.assign(this, testClass)
        console.log('test class: ', testClass)
        this.staticProp = 'haha'
    }

    preload() {
        this.TAG = 'AddoptedProps'
        this.result = '123'
        console.log( this.TAG, ' --- ', obj, this)
    }

    create() {
        const { width, height } = this.game.scale
        this.add.text(width / 2, height / 2, this.result).setScale(4).setOrigin(0.5)
        // this.prop5()
        // this.prop6()
    }

    update() {
    }

    staticFunct() {


    }
}