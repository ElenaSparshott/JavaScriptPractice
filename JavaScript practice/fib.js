// 1 1 2 3 5 8 13 
//F(n) = F(n-1) + F(n-2)

function fib(n) {
    if(n == 1 || n == 2) {
        return 1
    }
    return fib(n-1) + fib(n-2)
}





function fib2(n) {
    if(n == 1 || n == 2) {
        return 1
    }
    let a = 1 
    let b = 1
    for(let i = 0; i < n - 2; i++) {
        let c = a + b;
        a = b
        b = c
    }
    return b;
}

console.log(fib2(151))