let button = document.querySelector("#button")
let result =  document.querySelector("#result")

let nr = [Math.floor(Math.random() * 100)]

button.addEventListener("click", function () {
       
        text = document.querySelector("#text").value

        if (text < nr) {
           result.innerHTML = "Too small"
        }
        if (text == nr) {
            result.innerHTML = "You guessed it!"
            
        }
        if (text > nr) {
            result.innerHTML = "Too big"
        }    
    })