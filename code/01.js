
const fp = require('lodash/fp')

const cars = [
    {name:"Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name:"Apy c12", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name:"Jag", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name:"Audi", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name:"Aston", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name:"Pagani", horsepower: 700, dollar_value: 1300000, in_stock: false},
]

/*
练习1： 使用函数组合fp.flowRight()重新实现下面这个函数
*/

// let isLastInStock = function(cars) {
//     let last_car = fp.last(cars)
//     return fp.prop('in_stock', last_car)
// }
const isLastInStock = fp.flowRight(fp.prop('in_stock', fp.last))

/*
练习2： 使用fp.flowRight(), fp.prop(), fp.first()获取第一个car的name
*/
const getFirstName = fp.flowRight(fp.prop('name'), fp.first)


/*
练习3： 使用帮助函数_average 重构 averageDollarValue, 使用函数组合的方式实现
*/
let _average = function(xs){
    return fp.reduce(fp.add, 0, xs)/xs.length
}
// let averageDollarValue = function(cars) {
//     let dollar_values = fp.map(function(car){
//         return car.dollar_value
//     }, cars)
//     return _average(dollar_values)
// }
let averageDollarValue = fp.flowRight(_average, fp.map(car => car.dollar_value))


/*
练习4： 使用flowRight写一个sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的name转换为这种形式
例如：sanitizeNames(["Hello World"]) => ["hello_world"]
*/

let _underscore = fp.replace(/\W+/g, '_')

let sanitizeNames = fp.flowRight(fp.map(_underscore), fp.map(car => car.name))



