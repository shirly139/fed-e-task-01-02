function count () {
    var arr = [];
    for(var i = 1; i <= 3; i ++){
        arr.push(() => i * i)
    }
    return arr;
}

var resluts = count();
console.log(resluts[0](),resluts[1](), resluts[2]());