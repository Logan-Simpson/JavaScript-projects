function my_Dictionary() {
    var Instrument = {
        Class: "Guitar",
        Material: "Wood",
        Color:"Black",
        Category: "Acoustic"
        
    };
    delete Instrument.Class;
    document.getElementById("Dictionary").innerHTML = Instrument.Class;
}