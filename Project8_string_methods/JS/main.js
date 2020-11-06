
//Concatenate Method
function catFunc() {
    var p_1 = "I have ";
    var p_2 = "made this ";
    var p_3 = "into a complete ";
    var p_4 = "sentence. ";
    var whole = p_1.concat(p_2, p_3, p_4);
    document.getElementById("Concatenate").innerHTML = whole;
}

//Slice method
function slice_method() {
    var Sentence = "All work and no play makes Johnny a dull boy. ";
    var Section = Sentence.slice(16,33);
    document.getElementById("slice").innerHTML = Section;
}

//toUppercase method
function myFunction() {
    var str = "hello world!";
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res;
}

//String Search method
function searchMethod() {
    var str = "I had three donuts, then I ate one, now I only have two!";
    var certain = str.search("three donuts");
    document.getElementById("search").innerHTML = certain;
}

//toString method
function str_Method() {
    var X = 198;
    document.getElementById("Numb_to_str").innerHTML=X.toString();
}

//precision method
function precision_Method() {
    var X = 12938.34389873645;
    document.getElementById("Precise").innerHTML = X.toPrecision(10);
}

//toFixed method
function fixFunction() {
    var num = 8.2948761;
    var n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n;
}

//ValueOf method
function ValFunction() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}
