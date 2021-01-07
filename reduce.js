const multiplyBy2 = (x) => x * 2;
const add3 = (x) => x + 3;
const devideBy2 = (x) => x / 2;
const runThisFun = (input, do_this) => {
    return do_this(input);
};
const reduce = function (array, howToCombine, acc) {
    for (let i = 0; i < array.length; i++) {
        acc = howToCombine(acc, array[i]);
        // acc = array[i](acc);
    }
    return acc;
};
console.log(reduce([multiplyBy2, add3, devideBy2], runThisFun, 11));
// console.log(devideBy2(add3(multiplyBy2(11))));

// map , reduce are immutable which is not change in actual data insted they returns new one
// push,pop are mutable
// P.L.S.R.D
// persistance lexically scope referenced data
// C O V E
// close over variable environment
function newFun() {
    let a,
        b,
        c,
        counter = 0;
    function increment() {
        counter++;
        a = 0;
        console.log(counter);
    }
    return increment;
}

let myfun = newFun();
console.dir(myfun);
console.log(newFun.counter);
