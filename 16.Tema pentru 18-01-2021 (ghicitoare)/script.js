document.querySelector("#button")
    .addEventListener("click", function () {
        nr = 68
        text = document.querySelector("#text").value

        if (text < nr) {
            document.querySelector("#result").innerHTML += "Too small"
        }
        if (text == nr) {
            document.querySelector("#result").innerHTML += "You guessed it!"
            
        }
        if (text > nr) {
            document.querySelector("#result").innerHTML += "Too big"
        }    
    })