function myFunction(x,y) {
    return x + y;
}

function Multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiplication").innerHTML = "6 x 8=" + simple_Math;
}

function division() {
    var simple_Math = 48/6;
    document.getElementById("division").innerHTML="48/6=" + simple_Math;
}

function More() {
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("More").innerHTML= "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" +simple_Math;
}

function Modulus() {
    var simple_Math = 25 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function Negation() {
    var x= 10;
    document.getElementById("Negation").innerHTML= -x;
}

var x=5;
x++;
document.write(x);

var x=5.25;
x--;
document.write(x);

window.alert(Math.random() * 100);

