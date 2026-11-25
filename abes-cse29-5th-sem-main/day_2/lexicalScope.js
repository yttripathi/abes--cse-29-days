console.log(a);
console.log(f);
f();
function f() {
    f2();
    function f2() {
        console.log(a);
    }
}
var a;
a = 78;
console.log(a);
