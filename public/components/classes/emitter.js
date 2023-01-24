
export default class Emitter extends Phaser.GameObjects.Particles.ParticleEmitterManager {
    constructor(config_name, scene, texture, x = 0, y = 0, cleanUp = true) {
        texture = !texture ? 'particle' : texture
        super(scene, texture)
        this.scene.add.existing(this)
        this.setPosition(x, y)
        console.log(x, y, this.x)
        const config = !this[config_name] ? this.DEFAULT_GLOW : this[config_name]
        this.EMITTER = this.createEmitter(config)

        if (cleanUp) this.cleanUpOnComplete()

        return this.EMITTER
    }

    cleanUpOnComplete() {
        this.EMITTER.onParticleDeath(() => {
            if (!!this.EMITTER.getAliveParticleCount()) return
            this.destroy(true)
        })
    }

    get DEFAULT_GLOW() {
        return { 
            lifespan: { min: 500, max: 1000 },
            quantity: 5,
            speed: { min: -800, max: 800 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.2, end: 1.8 },
            alpha: { start: 1, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 400
        }
    }



    get SMALL_SNOW_GLOW() {
        return { 
            x: { min: -this.x, max: this.x },
            y: { min: -this.y, max: this.y },
            lifespan: { min: 2000, max: 8000 },
            // quantity: 30,
            speed: { min: -100, max: 100 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.05, end: 0.1 },
            alpha: { start: 0.4, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 40
        }
    }


    get RANDOM_SCALEUP_SNOW_GLOW() {
        return { 
            x: { min: -this.x, max: this.x },
            y: { min: -this.y, max: this.y },
            lifespan: { min: 2000, max: 8000 },
            // quantity: 30,
            speed: { min: -100, max: 100 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.05, end: 4 },
            alpha: { start: 0.4, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 40
        }
    }


    get RANDOM_SCALEDOWN_SNOW_GLOW() {
        return { 
            x: { min: -this.x, max: this.x },
            y: { min: -this.y, max: this.y },
            lifespan: { min: 2000, max: 8000 },
            // quantity: 30,
            speed: { min: -100, max: 100 },
            angle: { min: 0, max: 360 },
            scale: { start: 2, end: 0 },
            alpha: { start: 0, end: 0.4 },
            blendMode: 'SCREEN',
            gravityY: 40
        }
    }


    get FIRE_GLOW() {
        return { 
            lifespan: { min: 500, max: 1000 },
            quantity: 5,
            speed: { min: -800, max: 800 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.2, end: 0.8 },
            alpha: { start: 1, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 400
        }
    }


    get X_LINE_FAST_GLOW() {
        return { 
            x: { min: -this.x, max: this.x },
            lifespan: { min: 200, max: 400 },
            quantity: 30,
            speed: { min: -1800, max: 1800 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.05, end: 0.1 },
            alpha: { start: 1, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 400
        }
    }


    get Y_LINE_FAST_GLOW() {
        return { 
            y: { min: -this.y, max: this.y },
            lifespan: { min: 200, max: 400 },
            quantity: 30,
            speed: { min: -1800, max: 1800 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.05, end: 0.1 },
            alpha: { start: 1, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 400
        }
    }


    get X_LINE_SLOW_GLOW() {
        return { 
            x: { min: -this.x, max: this.x },
            lifespan: { min: 2000, max: 4000 },
            quantity: 10,
            speed: { min: -100, max: 100 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.05, end: 0.1 },
            alpha: { start: 1, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 40
        }
    }


    get Y_LINE_SLOW_GLOW() {
        return { 
            y: { min: -this.y, max: this.y },
            lifespan: { min: 2000, max: 4000 },
            quantity: 10,
            speed: { min: -100, max: 100 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.05, end: 0.1 },
            alpha: { start: 1, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 40
        }
    }




    get X_LINE_FIRE_GLOW() {
        return { 
            x: { min: -this.x, max: this.x },
            lifespan: { min: 200, max: 400 },
            quantity: 30,
            speed: { min: -100, max: 100 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.05, end: 0.1 },
            alpha: { start: 1, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 400
        }
    }


    get Y_LINE_FIRE_GLOW() {
        return { 
            y: { min: -this.y, max: this.y },
            lifespan: { min: 200, max: 400 },
            quantity: 30,
            speed: { min: -100, max: 100 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.05, end: 0.1 },
            alpha: { start: 1, end: 0 },
            blendMode: 'SCREEN',
            gravityY: 400
        }
    }
}
