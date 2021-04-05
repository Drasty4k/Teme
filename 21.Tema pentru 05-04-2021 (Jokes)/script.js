$(document).ready(
    function(){
        updateRate()
        function updateRate(){
            var request = new XMLHttpRequest()

            request.open("GET", "http://api.icndb.com/jokes/random")

            request.onreadystatechange = function(){
                if(this.readyState == 4)

                var jokes = JSON.parse(request.response)

                $("p").html(jokes.value.joke)
               
            }
        request.send()    
        }
        
    }

)

 document.querySelector("#btn").addEventListener("click", reload)

 function reload(){
   reload =  location.reload()
 }