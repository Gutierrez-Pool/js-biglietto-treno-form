const kmNumberElement = document.getElementById("km-number");
const userAgeElement = document.querySelector("#user-age");

const buttonElement = document.querySelector("form input[type='button']");

const resultElement = document.querySelector("#result")

let basePrice;

let finalPrice;

buttonElement.addEventListener("click",
    function () {
        
        basePrice = kmNumberElement.value * 0.21

        finalPrice = basePrice;


        if(userAgeElement.value < 18) {

            console.log("l'utente è under 18");
            finalPrice = basePrice - (basePrice * 0.2);

        } else if (userAgeElement.value >= 65) {

            console.log("l'utente è maggiore di 65 anni");
            finalPrice = basePrice - (basePrice * 0.4);
        }

        finalPrice = finalPrice.toFixed(2);


        resultElement.innerHTML += `Il prezzo del biglietto e di ${finalPrice}`;
    }
)
