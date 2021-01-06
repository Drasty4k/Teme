function generations(){
    var year = document.getElementById("inputYear").value

    var result = Number(year)

    if(Number(result)){
        if (year < 1925){
            document.getElementById("resultText").innerHTML += "Your Generations is: The Greatest Generation"
        }else if (year < 1946){
            document.getElementById("resultText").innerHTML += "Your Generation is: The Silent Generation"
        }else if (year < 1965){
            document.getElementById("resultText").innerHTML += "Your Generation is: Baby Boombers"
        }else if (year < 1981){
            document.getElementById("resultText").innerHTML += "Your Generation is: Generaton X"
        }else if (year < 1997){
            document.getElementById("resultText").innerHTML += "Your Generation is: Millennials"
        }else if (year < Infinity){
            document.getElementById("resultText").innerHTML += "Your Generation is: Generation Z"
        }
    }
}