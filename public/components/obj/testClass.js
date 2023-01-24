import obj2 from './testObj2';
import obj from './testObjs';
import { TestClassTYPE } from './TYPE';



/**
 * @typedef {Object} MyObj
 * @property {string} myProp - This is a property on myObj
 * @property {function} myMethod - This is a method on myObj
 */
class myObj {
    myMethod() { /* ... */ }
    myProp = 'some value'
}

/**
 * MyClass - class that inherits from myObj
 * @extends {MyObj}
 */
class MyClass {
    constructor() {
        Object.assign(this, myObj);
    }
}





// const myObj = {
//     /**
//      * This is a method on myObj
//      */
//     myMethod() { /* ... */ },
//     /**
//      * This is a property on myObj
//      */
//     myProp: 'some value'
// }

// class Ext {
//     constructor() {
//         Object.create(myObj)
//     }

//     test() {
//         this
//     }
// }


/**
 * @author Ivo Kalendarov <ivokalendar@icloud.com>
 * @date January 2023
 * @description Wheel4f Container is used in SpinTheWheel4f scene or layer for
 * displaying the wheel with given resources.
 * The size of everything in the Wheel4f is dinamic.
 * @extends obj
 */
export default class TestClass extends MyClass {
    /**
     * Constructs an instance of TestClass
     * @constructor
     * @param {string} arg1 - The first argument passed to the constructor.
     * @param {string} arg2 - The second argument passed to the constructor.
     */
    constructor(arg1, arg2) {
        this.arg1 = arg1
        this.arg2 = arg2
        this
    }

    // /**
    //  * A method that sets the value of `arg3` to 'IN PROP' and logs the value of `arg1` to the console.
    //  * @function prop11
    //  */
    prop11() {
        this.arg3 = 'IN PROP'
        console.log('PROP11: ', this.arg1)
    }

    // /**
    //  * A method that logs the value of `arg2` to the console.
    //  * @function prop22
    //  */
    prop22() {
        console.log('PROP22: ', this.arg2)
    }
}

