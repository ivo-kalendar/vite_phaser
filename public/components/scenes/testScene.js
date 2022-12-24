export default class TestScene extends Phaser.Scene{
    constructor(config) {
        super(config)
    }

    preload() {
        this.TAG = 'TestScene'
        console.log('Preload: ', this.TAG)
    }

    update() {
        console.log('update: ', this.TAG)
    }

    create() {
        console.log('create: ', this.TAG)
    }
}