function f() {
    var a = 34;
    f2();
    function f2() {
        console.log(a);
        var b = 67;
        f3();
        function f3() {
            console.log(a);
            console.log(b);
            console.log(c);
        }
    }
}
var c = 56;
f();