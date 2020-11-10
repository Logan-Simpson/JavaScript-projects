
//Counting to ten using a While Loop
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//writing a list using a for Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Cello"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array function
function array_Function() {
    var activity = [];
    activity[0] = "soccer";
    activity[1] = "biking";
    activity[2] = "rock climbing";
    activity[3] = "swimming";
    document.getElementById("Array").innerHTML = "We offer many different activities at our gym, such as " +
     activity[2] + " to name one.";
}

function constant_function() {
    const musical_instrument = {type:"telecaster", brand:"Fender", color:"black"};
    musical_instrument.color = "sunburst orange";
    musical_instrument.price = "$1,000";
    musical_instrument.pickup = "Seymour Duncan";
    document.getElementById("Constant").innerHTML = "The cost of this " +
    musical_instrument.type + " is " + musical_instrument.price + " and has " + musical_instrument.pickup + " pickups." + "<br>";
}

//using the let keyword
var X = 101;
document.write("<br>" + X);
{
    let X = 99;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//utilizing return
function returnFunc() {
    return Math.PI;
}
document.getElementById("demo").innerHTML = returnFunc();

//creating an object with properties and a method
let car = {
    make: "Dodge ",
    model: "Solstis ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The van is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//Break statement
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if(i === 3) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo2").innerHTML = text;

//continue statement
var text1 = "";
var i;
for (i = 0; i < 10; i++) {
    if(i === 3) { continue; }
    text1 += "The number is " + i + "<br>";
}
document.getElementById("demo3").innerHTML = text1;