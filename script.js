// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// creo un ciclo for per i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {

    // Se è un multiplo sia di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0) {
        // stampo FizzBuzz
        console.log("FizzBuzz"); 
    }
    // SE è un multiplo di 3
    else if (i % 3 === 0) {
        // stampo Fizz
        console.log("Fizz");        
    }
    // SE è un multiplo di 5 
    else if (i % 5 === 0) {
        // stampo Buzz
        console.log("Buzz"); 
    }    
    // ALTRIMENTI 
    else {
        // stampa il numero di iterazioni
        console.log(i);
    }      

}

    
    
    
    
    
    