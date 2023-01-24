import Emitter from "../classes/emitter"

export default class ParticleScene extends Phaser.Scene{
    constructor(config) {
        super(config)


        this.asset = {
            path: 'public/components/assets/',
            name: 'particle',
            ext: '.png'
        }
    }

    preload() {
        this.center_position = {
            x: this.game.scale.baseSize.width / 2,
            y: this.game.scale.baseSize.height / 2,
        }

        const { path, name, ext } = this.asset
        this.load.image(name, `${path}${name}${ext}`)
    }

    create() {
        const { x, y } = this.center_position

        // const config = { 
        //     x, 
        //     y,
        //     lifespan: { min: 500, max: 1000 },
        //     quantity: 5,
        //     speed: { min: -800, max: 800 },
        //     angle: { min: 0, max: 360 },
        //     scale: { start: 0.2, end: 1.8 },
        //     alpha: { start: 1, end: 0 },
        //     blendMode: 'SCREEN',
        //     gravityY: 400
        // }

        // const particles = this.add.particles(this.asset.name)
        new Emitter('SMALL_SNOW_GLOW', this, this.asset.name, x, y)
        // new Emitter('Y_LINE_SLOW_GLOW', this, this.asset.name, x, y)
        // const emitter = particles.createEmitter(config);

        // emitter.onParticleDeath(() => {
        //     if (!!emitter.getAliveParticleCount()) return
        //     // emitter.destroy(true)
        //     particles.destroy(true)
        // })

        // emitter.onComplete.add(() => console.log('COMPLETE'))

        // emitter.stop()
        // emitter.flow(1, 5)
        // this.time.delayedCall(1000, () => emitter.stop())
        // this.time.delayedCall(1500, () => emitter.explode(200))
    
        // var emitter1 = this.add.particles('spark1').createEmitter({
        //     x: 400,
        //     y: 300,
        //     speed: { min: -800, max: 800 },
        //     angle: { min: 0, max: 360 },
        //     scale: { start: 0.3, end: 0 },
        //     blendMode: 'SCREEN',
        //     //active: false,
        //     lifespan: 300,
        //     gravityY: 800
        // });
    

        // this.input.on('pointerdown', function (pointer) {
        //     emitter0.setPosition(pointer.x, pointer.y);
        //     // emitter1.setPosition(pointer.x, pointer.y);
        //     emitter0.explode();
        //     // emitter1.explode();
        // });

    }

    update() {}
}