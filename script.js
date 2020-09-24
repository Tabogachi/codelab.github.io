function firstPropmt() {
    var mountain = window.prompt("What is your mountain?");
    document.getElementById("pepe2").innerHTML = "Ko " + mountain + " Te Maunga";
    var river = window.prompt("What is your river?");
    document.getElementById("pepe3").innerHTML = "Ko " + river + " Te Awa";
    var city = window.prompt("What is your city?");
    document.getElementById("pepe4").innerHTML = "Nō " + city + " Ahu";
    var family = window.prompt("Who is your family?");
    document.getElementById("pepe5").innerHTML = "Ko " + family + " Tōku Whānau";
    var name = window.prompt("What is your name?");
    document.getElementById("pepe6").innerHTML = "Ko " + name + " Tōku Ingoa";
}

function printPropmt(){
    var print = window.print()
}