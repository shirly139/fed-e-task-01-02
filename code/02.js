const fp = require('lodash/fp')
const {Maybe, Container} = require('./00-class')
/*
练习1： 使用fp.add(x,y)和fp.map(f,x)创建一个能让functor里的值增加的函数ex1
*/

let maybe = Maybe.of([5,6,1])
let ex1 = maybe.map(x => fp.map(fp.add(1), x))

/*
练习2： 实现一个函数ex2，能够使用fp.first获取列表的第一个元素
*/

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'xi', 'do'])
let ex2 = () => xs.map(fp.first)._value


/*
练习3： 实现一个函数ex3，使用safeProp 和fp.first找到user的名字的首字母
*/

const fp = require('lodash/fp')
const {Maybe, Container} = require('./00-class')

let safeProp = fp.curry(function(x, o){
    return Maybe.of(o[x])
})

let user = {id: 2, name: "Albert"}
let ex3 = fp.flowRight(fp.map(fp.first), safeProp('name'))


/*
练习4： 使用Maybe 重写ex4，不要有if语句
*/

const fp = require('lodash/fp')
const {Maybe, Container} = require('./00-class')

let ex4 = function(n) {
    if (n) {
        return parseInt(n)
    }
}

let ex4Copy = n => Maybe.of(n).map(parseInt)