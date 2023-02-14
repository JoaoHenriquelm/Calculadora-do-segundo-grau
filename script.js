var aText = document.getElementById("A-number")
var bText = document.getElementById("B-number")
var cText = document.getElementById("C-number")
var res = document.getElementById("res")



function calcular() {

    var a = Number(aText.value)
    var b = Number(bText.value)
    var c = Number(cText.value)

    var delta = b**2 - 4*a*c

 
    if(delta < 0) {
        alert("Δ deve ser maior que 0")
    } else {
        var x1t = (-b + Math.sqrt(delta)) / (2*a)
        var x2t = (-b - Math.sqrt(delta)) / (2*a)

        var x1 = x1t.toFixed(2)
        var x2 = x2t.toFixed(2)

        res.textContent = `X1 = ${x1}, X2= ${x2}`
    }
}