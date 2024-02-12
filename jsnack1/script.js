// Snack 1:

// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")



const buttonElement = document.getElementById("button");
    
const resultElement = document.getElementById("result");



buttonElement.addEventListener("click", function() {

    const girato = document.getElementById("parola").value;

    function word () {
    
        let reverse = girato.split("").reverse().join("");
    
        console.log (reverse);
    }
    
    word (girato);
});



