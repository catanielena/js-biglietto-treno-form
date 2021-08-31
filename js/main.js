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
        if ( nome !== "" && !isNaN(km) && km > 0 && ageRange !== "") {
            // carrozza
            var carriage = Math.floor(Math.random() * 15) + 1;
            // codice cp
            var cpCode = "";
            for (var i=0; i<5; i++) {
                cpCode += (Math.floor(Math.random() *10));
            }
    
            // prezzo-biglietto e condizioni di offerta
            var ticketCost = km * 0.21;
            var offer = "Standard";
            if (ageRange == "minorenne") {
                ticketCost -= ticketCost * 0.2;
                offer = "Sconto minorenne";
            } else if (ageRange == "over65") {
                ticketCost -= ticketCost * 0.4;
                offer = "Sconto Silver";
            };
            var ticketCost = ticketCost.toFixed(2);
            // Print data
            document.getElementById("passenger").innerHTML = nome;
            document.getElementById("offer").innerHTML = offer;
            document.getElementById("ticket-cost").innerHTML = ticketCost;
            document.getElementById("carriage").innerHTML = carriage;
            document.getElementById("cp-code").innerHTML = cpCode;
            document.getElementById("ticket-cost").innerHTML = ticketCost;
            document.getElementById("ticket-data").classList.add("display--block");
        } else {
            alert("Errore");
        }
    }
);

// btnAnnulla
btnAnnulla.addEventListener("click",
    function() {
        document.getElementById("ticket-data").classList.remove("display--block");
        document.getElementById("nome-cognome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("age-range").selectedIndex = "0";
    }
); 
