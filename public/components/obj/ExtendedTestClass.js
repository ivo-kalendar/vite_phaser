import Obj from "./obj";
import TestClass from "./testClass";


/**
 * bla bla
 * @type {TestClass&Obj}
 */
const newObj = Phaser.Utils.Objects.Clone(TestClass)


/**
 * DRn DRN
 * @extends TestClass 
 * @extends Obj 
 */
class ExtendedClass extends TestClass {
    constructor(i, a) {
        super(i, a)
        
        Object.assign(this, Obj)
    }
}


export default ExtendedClass