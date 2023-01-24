/**
 * @typedef {Object} ObjTypeTYPE
 * @property {string} prop1 - A string value
 * @property {number} prop2 - A number value
 * @property {number[]} prop3 - An array of numbers
 * @property {{a:string,b:string}} prop4 - An object containing two properties, 'a' and 'b'
 * @property {() => void} prop5 - A function that logs a message to the console
 * @property {function(): void} prop6 - A function that checks for a condition and logs a message to the console
 */

/**
 * @typedef {Object} ObjType2TYPE
 * @property {string} prop10 - A string value
 * @property {number} prop20 - A number value
 * @property {number[]} prop30 - An array of numbers
 */

/**
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu faucibus bibendum, velit nulla commodo augue, at congue est velit at velit.
 * @typedef {Object} TestClassTYPE
 * @property {string} arg1 - The first argument passed to the constructor.
 * @property {string} arg2 - The second argument passed to the constructor.
 * @property {string} arg3 - The value of 'IN PROP'
 * @property {function(): void} prop11 - A method that sets the value of `arg3` to 'IN PROP' and logs the value of `arg1` to the console.
 * @property {function(): void} prop22 - A method that logs the value of `arg2` to the console.
 * @description Description of TestClass typedef goes here
 */


export default {
    TestClassTYPE,
    ObjTypeTYPE,
    ObjType2TYPE
}