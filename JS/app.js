// # Calcolo del prezzo del biglietto del treno

// - Richiesta della distanza del percorso
//     - Creare la variabile "distanceTrip"
let distanceTrip;
//     - Assegnare il valore tramite prompt
distanceTrip = prompt("Inserisci la distanza del viaggio");
console.log (typeof distanceTrip, distanceTrip);
//     - Trasformare il valore dalla stringa in numero con decimali (evitando anche Erorre del inserimento con la virgola)
distanceTrip = parseFloat(distanceTrip.replace(/,/g, "."));
console.log (typeof distanceTrip, distanceTrip);
// - Richiesta dell'età 
//     - Creare la variabile "passengerAge"
let passengerAge;
//     - Assegnare il valore tramite prompt
passengerAge = prompt("Inserisci l'età");
console.log(typeof passengerAge, passengerAge);
//     - Trasformare il valore dalla stringa in numero con decimali
passengerAge = parseInt(passengerAge);
console.log(typeof passengerAge, passengerAge);
// - Calcolo del prezzo totale del viaggio
//     - Creare la variabile "priceKM" con valore 0.21 (valore euro per km)
//     - Creare la variabile "discountUnder18" 20% in decimali
//     - Creare la variabile "discountOver65" 40% in decimali
//     - Creare la variabile "discountNot" 0% in decimali
//     - Creare la variabile "priceBasic"
//     - Calcolare il prezzo base 
//         priceBasic = distanceTrip * priceKm
//     - Creare la variabile "passengerDiscountEntity"
//         SE (passengerAge < 18) 
//             - passengerDiscountEntity = discountUnder18
//         ALTRIMENTI SE (passengerAge > 65) 
//             - passengerDiscountEntity = discountUnder65
//         ALTRIMENTI () 
//             - passengerDiscountEntity = discountNot
//     - Creare la variabile "dicountPassenger"
//         - discountPassenger = priceBasic * passengerDiscountEntity / 100
//     - Creare la variabile "totalPrice"
//         - totalPrice = priceBasic - discountPassenger