import TextureGenerator4f from "../helpers/texture-generator";


export default class L_System extends Phaser.Scene{
    constructor(config) {
        super(config)
    }

    preload() {
        console.log('L_System loaded')
    }

    create() {
        const { width, height } = this.game.config
        
        const style = {
            backgroundColor: 'red',
            width: `${width / 2}px`,
            height: `${height / 2}px`
        }
        
        const dom = this.add.dom(width / 2, height, 'div', style, 'WWWAAAQQQ');
        
        new TextureGenerator4f({ 
            scene: this, 
            key: 'div', 
            children: [ dom ],
            x: 0,
            y: 0,
            width: dom.width,
            height: dom.height,
        })
        
        this.dom = this.add.image(width / 2, height, 'div')
        this.dom.setOrigin(0.5, 1)

        this.line = this.add.line(width / 2, height, 0, 0, 0, -50, 0xffffff)
        this.line.setOrigin(0)
        
        console.log(this.children.list)
    }

    update() {
        // this.line.x += 1
    }



}