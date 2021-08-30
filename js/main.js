var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");
// btnGenera
btnGenera.addEventListener("click",
    function() {
        // user-data
        var nome = document.getElementById("nome-cognome").value;
        var km = parseInt(document.getElementById("km").value);
        var ageRange = document.getElementById("age-range").value;
        console.log(nome, km, ageRange);
        // carrozza
        var carriage = Math.floor(Math.random() * 15) + 1;
        // codice cp
        var cpCode = "";
        for (var i=0; i<5; i++) {
            cpCode += (Math.floor(Math.random() *10) +1);
        }
        // prezzo-biglietto e condizioni di offerta
        var ticketCost = km * 0.21.toFixed(2);
        var offer = "Standard";
        if (ageRange == "minorenne") {
            ticketCost -= ticketCost * 0.2.toFixed(2);
            offer = "Under 18";
        } else if (ageRange == "over65") {
            ticketCost -= ticketCost * 0.4.toFixed(2);
            offer = "Silver";
        };
        // Print data
        document.getElementById("passenger").innerHTML = nome;
        document.getElementById("offer").innerHTML = offer;
        document.getElementById("ticket-cost").innerHTML = ticketCost;
        document.getElementById("carriage").innerHTML = carriage;
        document.getElementById("cp-code").innerHTML = cpCode;
        document.getElementById("ticket-cost").innerHTML = ticketCost;
        document.getElementById("ticket-data").classList.add("display--block");
    }
);

btnAnnulla.addEventListener("click",
    function() {
        document.getElementById("ticket-data").classList.remove("display--block");
        document.getElementById("nome-cognome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("age-range").value = "";
    }
);