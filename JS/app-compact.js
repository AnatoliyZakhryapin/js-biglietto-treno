// # Calcolo del prezzo del biglietto del treno

// - Racolta dei dati di ingresso 
const passengerName = prompt("Nome del passegero?").replace(/\s/g, '');
const passengerSurname = prompt("Cognome del passegero?").replace(/\s/g, '');
const distanceTrip = Number(parseFloat(prompt("Inserisci la distanza del viaggio").replace(/,/g, ".").replace(/\s/g, '')).toFixed(2));
const passengerAge = parseInt(prompt("Inserisci l'età").replace(/\s/g, ''));

// - Controllo corretto inserimento dei dati


// - Calcolo del prezzo totale del viaggio
//     - Dati fissi
const priceKM = 0.21;
const discountUnder18 = 0.2;
const discountOver65 = 0.4;
const discountNot = 0;

//     - Calcolo prezzo base 
const priceBasic = Number((distanceTrip * priceKM).toFixed(2));

//     - Defenizione valore della variabile "passengerDiscountEntity"
    if (passengerAge < 18) {
        var passengerDiscountEntity = discountUnder18; 
        var categoryDiscount = "discountUnder18";
    } else if (passengerAge > 65) {
        var passengerDiscountEntity = discountOver65; 
        var categoryDiscount = "discountUnder65";
    } else {
        var passengerDiscountEntity = discountNot;
        var categoryDiscount = "discountNot";
    }
//     - Calcolo "dicountPassenger"
const discountPassenger = Number((priceBasic * passengerDiscountEntity).toFixed(2));

//     - Calcolo "totalPrice"
const totalPrice = Number((priceBasic - discountPassenger).toFixed(2));

// # Creazione biglietto 
// - Pescare Dom Elementi con id e assegnare i valori di interesse

document.getElementById("passengerName").innerHTML = passengerName;
document.getElementById("passengerSurname").innerHTML = passengerSurname;
document.getElementById("passengerAge").innerHTML = passengerAge;
document.getElementById("distanceTrip").innerHTML = distanceTrip;
document.getElementById("categoryDiscount").innerHTML = categoryDiscount;
document.getElementById("discount").innerHTML = passengerDiscountEntity * 100;
document.getElementById("priceBasic").innerHTML = priceBasic;
document.getElementById("totalPrice").innerHTML = totalPrice;

// - console log
console.log("Nome passegero:", passengerName);
console.log("Cognome passegero:", passengerSurname);
console.log ("Distanza viaggio:", distanceTrip, "Km");
console.log("Eta passegero:", passengerAge, "Age");
console.log("Prezzo basse del viaggio:", priceBasic, "Euro");
console.log("Sconto % passegero:", passengerDiscountEntity * 100, "%");
console.log("Sconto in euro del passegero:", discountPassenger, "Euro");
console.log("Prezzo finale da pagare:", totalPrice, "Euro");
