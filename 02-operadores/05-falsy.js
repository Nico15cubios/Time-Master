// short-circuit

// Falso 
// flase
// 0 
// ''
// Null
// undefined 
// NaN
let nombre = 'Chanchito Feliz';
let username = nombre && 'Anonimo';
console.log(username);

function fn1(){
console.log('soy funcion 1');
return false;
}

function fn2(){
console.log('soy funcion 2');
return false;
}

    let x = fn1() && fn2();
