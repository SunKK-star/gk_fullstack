// 在定义函数和类时遇到类型不明确时可以使用泛型
function fn(a) {
    return a;
}
console.log(fn('dfd'));
function fn1(a, b) {
    return a;
}
console.log(fn1({ length: 'ds' }, 15));
