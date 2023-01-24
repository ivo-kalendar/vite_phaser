
/**
 * @typedef {Object} Obj
 * @property {string} key - The key value of the object.
 * @property {number} num - The numeric value of the object.
 * @property {Array} arr - An array of numbers associated with the object.
 * @property {Object} lev - An object containing a deeper level of properties.
 * @property {Object} lev.deep - An object containing the properties of the deepest level.
 * @property {string} lev.deep.val - A string value associated with the deepest level of the object.
 * @property {Array} lev.deep.arr - An array of strings associated with the deepest level of the object.
 */

/**
 * HHAHAHAHAHAHAA
 * @type {Obj}
 */
const Obj = { key: 'TEST', num: 3, arr: [1,2,3], lev: { deep: {val: 'DEV', arr: ['1', '2']}}}

export default Obj