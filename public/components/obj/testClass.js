export default class TestClass{
    constructor(arg1, arg2) {
        this.arg1 = arg1
        this.arg2 = arg2
    }

    prop11() {
        this.arg3 = 'IN PROP'
        console.log('PROP11: ', this.arg1)
    }

    prop22() {
        console.log('PROP22: ', this.arg2)
    }
}