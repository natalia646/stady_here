import { compose, pipe } from "ramda";

//!Композиція 
//тобто результат першої функції можна використовуівти на вхід для другої

function a(n){
    return n ** n - 1
}

function b(n){
    return n + 100
}

function c(n){
    return n + '-_-'
}

console.log(a(3))
console.log(b(a(3)));
console.log(c(b(a(3))));

// compose(c, b, a)(3)
