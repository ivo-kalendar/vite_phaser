import CircleGenerator from '../chatGTP/circleGenerator'
import RandomSquares from '../chatGTP/randomSquares';
import SquareGenerator from '../chatGTP/squareGenerator';

export default class ChatGPTScene extends Phaser.Scene{
    constructor(config) {
        super(config)
    }

    preload() {
        this.TAG = 'ChatGPTScene'
    }
    
    create() {
        // const circleGenerator = new CircleGenerator(this);
        // const squareGenerator = new SquareGenerator(this);

        // circleGenerator.generate();
        // squareGenerator.generate();

        new RandomSquares(this)
    }

    update() {
    }

    staticFunct() {


    }
}