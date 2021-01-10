
document.write("<section>")
for (let j = 1; j < 10; j++) {
     document.write("<div>")
     
    for (let i = 0; i < 10; i++) {
    let produs = i * j
    document.write("<p>")
    document.write(i + " x " + j + " = " + produs + "<br>")
    document.write("</p>")
    }
   
    document.write("</div>")
    
}
document.write("</section>")



