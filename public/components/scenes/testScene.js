export default class TestScene extends Phaser.Scene{
    constructor(config) {
        super(config)
    }

    preload() {
        this.TAG = 'TestScene'
        const arr = [1,2,3,4]
        const new_arr = [5,6,7,8]
        const matrix = [ arr, new_arr , arr, new_arr ]
        // const result = Phaser.Utils.Array.Add(arr, new_arr, 5, i => console.log('arr index: ', i))
        // const result = Phaser.Utils.Array.AddAt(arr, new_arr, 1, 6, i => console.log(), this)
        // const result = Phaser.Utils.Array.BringToTop(arr, 2)
        // const result = []
        // Phaser.Utils.Array.Each(arr, (i, n, j) => result.push(i + 10 + n + j), this, 20, 30)
        // const result = []
        // Phaser.Utils.Array.EachInRange(arr,(i, a, b) => result.push(i + a + b), this, 1, 3, 10, 20)
        // const result = Phaser.Utils.Array.FindClosestInSorted(66, arr)
        // const result = Phaser.Utils.Array.GetFirst(arr)
        // const result = Phaser.Utils.Array.GetRandom(arr)
        // const result = Phaser.Utils.Array.Matrix.CheckMatrix(matrix)
        // this.result = Phaser.Utils.Array.Matrix.MatrixToString(matrix)
        // this.result = Phaser.Utils.Array.Matrix.ReverseColumns(matrix)
        // this.result = Phaser.Utils.Array.Matrix.ReverseRows(matrix)
        // this.result = Phaser.Utils.Array.Matrix.Rotate180(matrix)
        // this.result = Phaser.Utils.Array.Matrix.RotateLeft(matrix)
        // this.result = Phaser.Utils.Array.Matrix.RotateRight(matrix)
        // this.result = Phaser.Utils.Array.Matrix.RotateMatrix(matrix)
        // this.result = Phaser.Utils.Array.Matrix.Translate(matrix, 1, 1)
        // this.result = Phaser.Utils.Array.Matrix.TransposeMatrix(matrix)
        // this.result = Phaser.Utils.Array.MoveAbove(arr, 1, 3)
        // this.result = Phaser.Utils.Array.NumberArray(1001, 1099, 'No', '...')
        // this.result = Phaser.Utils.Array.NumberArray(1001, 1099)
        // this.result = Phaser.Utils.Array.NumberArrayStep(0, 10, 3)
        // this.result = Phaser.Utils.Array.Range(['h', 'v'], [1,2,3], { qty: 3 })
        // this.result = Phaser.Utils.Array.Remove(arr, [1,2])
        // this.result = Phaser.Utils.Array.RemoveAt(arr, 2)
        // this.result = Phaser.Utils.Array.RemoveBetween(arr, 1, 3)
        // this.result = Phaser.Utils.Array.RemoveRandomElement(arr)
        // this.result = Phaser.Utils.Array.Replace(arr, 2, 50)
        // this.result = Phaser.Utils.Array.RotateLeft(arr, 2)
        // this.result = Phaser.Utils.Array.RotateRight(arr, 2)
        // this.result = Phaser.Utils.Array.SafeRange(arr, 1, 3, true)
        // this.result = Phaser.Utils.Array.SendToBack(arr, 2)
        // this.result = Phaser.Utils.Array.Shuffle(arr)
        // this.result = Phaser.Utils.Array.SpliceOne(arr, 2)
        // this.result = Phaser.Utils.Array.Swap(arr, 1, 3)

        const obj = { key: 'TEST', num: 3, arr: [1,2,3], lev: { deep: {val: 'DEV', arr: ['1', '2']}}}
        const obj2 = { key: 'TEST2', num: 4, arr, extra_val: 'test' }
        const obj3 = { key: 'TEST2', num: 5, arr, extra_val: 'test2' }
        // this.result = Phaser.Utils.Objects.Clone(obj)
        // this.result = Phaser.Utils.Objects.DeepCopy(obj)
        // this.result = Phaser.Utils.Objects.Extend(obj, obj2, obj3)
        // this.result = Phaser.Utils.Objects.GetAdvancedValue(obj, 'arr', 'bla bla')
        // this.result = Phaser.Utils.Objects.GetFastValue(obj, 'arr', 'bla')
        // this.result = Phaser.Utils.Objects.GetMinMaxValue(obj, 'num', 1, 2, 'bla')
        // this.result = Phaser.Utils.Objects.GetValue(obj, 'arr')
        // this.result = Phaser.Utils.Objects.HasAll(obj, ['key', 'num'])
        // this.result = Phaser.Utils.Objects.HasAny(obj, [ 'br', 'as', 'tg', 'key' ])
        // this.result = Phaser.Utils.Objects.HasValue(obj, 'lev')
        this.result = Phaser.Utils.Objects.IsPlainObject(obj)

        console.log( this.TAG, this.result ,arr, new_arr, matrix)
    }

    create() {
        const { width, height } = this.game.scale
        this.add.text(width / 2, height / 2, this.result).setScale(4).setOrigin(0.5)
    }

    update() {
    }
}