while(true){
    var precioCosto = parseFloat (prompt ("ingrese el precio del producto"));
    if(!isNaN(precioCosto) && precioCosto != null && precioCosto != ""){
        break;
    } else{
        alert("no es numero");
        continue
    }
}
precioCostoM = precioCosto.toFixed(2);
alert ("El precio a calcular es:" +precioCostoM);
console.log("El precio a calcular es:" +precioCostoM);
document.write ("<h2>El precio a calcular es:" +precioCostoM+ "</h2>");

function CalcularIva (precioCosto){
return (precioCosto * 0.21)
}
var iva = CalcularIva (precioCosto);
ivaC = iva.toFixed(2);

alert ("El costo de IVA es:" +ivaC);
console.log ("El costo de IVA es:" +ivaC);
document.write("<h2>El costo de IVA es:" +ivaC+ "</h2>");

function PrecioTotal(precioCosto){
    return (precioCosto + (precioCosto * 0.21));
}

var PrecioConIva = PrecioTotal(precioCosto);
PrecioConIvaC = PrecioConIva.toFixed(2);

alert("El precio total es:" + PrecioConIvaC);
console.log("El precio total es:" +PrecioConIvaC);
document.write("<h2>El precio total es:" +PrecioConIvaC+ "</h2>");