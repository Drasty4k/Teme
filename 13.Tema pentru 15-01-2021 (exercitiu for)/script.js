function box(){

w = document.getElementById("one").value
h = document.getElementById("two").value


    for(i = 1; i <= h; i++){
        for(j = 1; j <= w; j++){
            if(i == 1 || j == 1 || i == h || j == w){
                document.getElementById("resultText").innerHTML += "#"
            }
            else{
                document.getElementById("resultText").innerHTML += "0"
            }
        }
        document.getElementById("resultText").innerHTML += "<br>"
    }
}

