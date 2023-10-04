// # Calcolo del prezzo del biglietto del treno

// - Richiesta della distanza del percorso
//     - Creare la variabile "distanceTrip"
let distanceTrip;
//     - Assegnare il valore tramite prompt
distanceTrip = prompt("Inserisci la distanza del viaggio");
console.log ("Distanza viaggio", typeof distanceTrip, distanceTrip);
//     - Trasformare il valore dalla stringa in numero con decimali (evitando anche Erorre del inserimento con la virgola)
distanceTrip = parseFloat(distanceTrip.replace(/,/g, "."));
console.log ("Distanza viaggio", typeof distanceTrip, distanceTrip);
// - Richiesta dell'età 
//     - Creare la variabile "passengerAge"
let passengerAge;
//     - Assegnare il valore tramite prompt
passengerAge = prompt("Inserisci l'età");
console.log("Eta passegero", typeof passengerAge, passengerAge);
//     - Trasformare il valore dalla stringa in numero con decimali
passengerAge = parseInt(passengerAge);
console.log("Eta passegero", typeof passengerAge, passengerAge);
// - Calcolo del prezzo totale del viaggio
//     - Creare la variabile "priceKM" con valore 0.21 (valore euro per km)
const priceKM = 0.21;
//     - Creare la variabile "discountUnder18" 20% in decimali
const discountUnder18 = 0.2;
//     - Creare la variabile "discountOver65" 40% in decimali
const discountOver65 = 0.4;
//     - Creare la variabile "discountNot" 0% in decimali
const discountNot = 0;
//     - Creare la variabile "priceBasic"
let priceBasic;
//     - Calcolare il prezzo base 
//         priceBasic = distanceTrip * priceKm
priceBasic = distanceTrip * priceKM; 
console.log("Prezzo basse del viaggio", priceBasic);
//     - Creare la variabile "passengerDiscountEntity"
let passengerDiscountEntity;
//         SE (passengerAge < 18) 
//             - passengerDiscountEntity = discountUnder18
//         ALTRIMENTI SE (passengerAge > 65) 
//             - passengerDiscountEntity = discountUnder65
//         ALTRIMENTI () 
//             - passengerDiscountEntity = discountNot
    if (passengerAge < 18) {
        passengerDiscountEntity = discountUnder18; 
    } else if (passengerAge > 65) {
        passengerDiscountEntity = discountOver65; 
    } else {
        passengerDiscountEntity = discountNot;
    }
console.log("Sconto % passegero", passengerDiscountEntity);
//     - Creare la variabile "dicountPassenger"
let discountPassenger;
//         - discountPassenger = priceBasic * passengerDiscountEntity
discountPassenger = priceBasic * passengerDiscountEntity;
console.log("Sconto in euro del passegero", discountPassenger);
//     - Creare la variabile "totalPrice"
let totalPrice;
//         - totalPrice = priceBasic - discountPassenger
totalPrice = priceBasic - discountPassenger;
console.log("Prezzo finale da pagare", totalPrice);