let do_this = function(work_fun,val){
    function inner(num){
        let result = work_fun(num,val);
        return result;
    }
    return inner;
}
let multiply = (a,b) => a*b;
let multiplyBy2 = do_this(multiply,2);
console.log(multiplyBy2(44));