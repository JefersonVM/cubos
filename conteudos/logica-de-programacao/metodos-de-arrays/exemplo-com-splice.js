let array = [`a`, `b`, `c`, `d`, `e`];

array.splice(1, 2, `f`, `g`, `h`);

console.log(array);

//push
array = [`a`, `b`, `c`, `d`, `e`];

array.splice(array.length, 0,`h`);

 console.log(array);

//pop
array = [`a`, `b`, `c`, `d`, `e`];

array.splice(array.length - 1, 1);
console.log(array);

//shift
array = [`a`, `b`, `c`, `d`, `e`];

array.splice(0,  1 );
console.log(array);

//unshift
array = [`a`, `b`, `c`, `d`, `e`];

array.splice(0,`a`);
console.log(array);