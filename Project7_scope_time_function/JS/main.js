var X = 10; //Global variable
function add_numb_1() {
    document.write(20 + X + "<br>");
}
function add_numb_2() {
    document.write(X + 100);
}
add_numb_1();
add_numb_2();

function add_numb_1() {
    var Y = 10; //Local Variable
    document.write(20 + Y + "<br>");
}
function add_numb_2() {
    console.log(Y + 100);
}
add_numb_1();
add_numb_2(); //Intentional error in console log: Y is a local variable and not part of this function

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Hello").innerHTML="How are you today?";
    }
}
function myFunction() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("Greeting").innerHTML = greeting;
}

//If Else function asking for age to see if eligible for health insurance
function AgeFunction() {
    Age = document.getElementById("Age").value;
    if (Age >= 26) {
        Health = "You are eligible for our health insurance!";
    }
    else {
        Health = "You are not eligible for our health insurance.";
    }
    document.getElementById("YourAge").innerHTML = Health;
}

//Else if statement for finding what time it is and printing a Reply based on the time
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}