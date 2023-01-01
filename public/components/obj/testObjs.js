
/**
 * bla bla
 */
const obj = {
    /**
     * @type {Sting}
     */
    prop1: 'String value',
    prop2: 55,
    prop3: [1,2,3],
    prop4: {a:'aaa',b:'bbb'},
    prop5: () => console.log('Hello', this),
    prop6: function() {
        if (!this.aaaaa) return
        console.log('Hello World', this)
    }
}


export default obj