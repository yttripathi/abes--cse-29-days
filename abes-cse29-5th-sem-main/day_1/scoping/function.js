let a = 34;
console.log(a);
console.log(b);
b = 87;
function add(a, b) {
    console.log(a);
    console.log(b);
    let c = 45;
    var d = 55;
    let sum = a + b + c + d;
    console.log(sum);
}
var b;
add(a, b);
console.log(a);
console.log(b);
log