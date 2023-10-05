# Calcolo del prezzo del biglietto del treno

- Richiesta Nome
    - Creare la variabile "passengerName"
    - Assegnare il valore tramite prompt
- Richiesta Cognome
    - Creare la variabile "passengerSurname"
    - Assegnare il valore tramite prompt
- Richiesta della distanza del percorso
    - Creare la variabile "distanceTrip"
    - Assegnare il valore tramite prompt
    - Trasformare il valore dalla stringa in numero con decimali (evitando anche Erorre del inserimento con la virgola)
- Richiesta dell'età 
    - Creare la variabile "passengerAge" 
    - Assegnare il valore tramite prompt
    - Trasformare il valore dalla stringa in numero con decimali
- Controllo corretto inserimento dei dati
- Calcolo del prezzo totale del viaggio
    - Creare la variabile "priceKM" con valore 0.21 (valore euro per km)
    - Creare la variabile "discountUnder18" 20% in decimali
    - Creare la variabile "discountOver65" 40% in decimali
    - Creare la variabile "discountNot" 0% in decimali
    - Creare la variabile "priceBasic"
    - Calcolare il prezzo base 
        priceBasic = distanceTrip * priceKm
    - Creare la variabile "passengerDiscountEntity"
        SE (passengerAge < 18) 
            - passengerDiscountEntity = discountUnder18
        ALTRIMENTI SE (passengerAge > 65) 
            - passengerDiscountEntity = discountUnder65
        ALTRIMENTI () 
            - passengerDiscountEntity = discountNot
    - Creare la variabile "dicountPassenger"
        - discountPassenger = priceBasic * passengerDiscountEntity
    - Creare la variabile "totalPrice"
        - totalPrice = priceBasic - discountPassenger

# Creazione biglietto

- Pescare Dom Elementi con id e assegnare i valori di interesse