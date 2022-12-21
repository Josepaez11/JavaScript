class Producto {
    constructor(producto,precio,talle,cantidad){
        this.producto = producto;
        this.precio = parseFloat (precio);
        this.talle = talle;
        this.cantidad = cantidad;
        this.disponible = true;
    }
}
const arrayproductos = [];
do{
    let comprobacion = prompt ('Ingresar nombre del producto');
    if (comprobacion === "listo" ||comprobacion === "LISTO" ||comprobacion === "Listo"){
        break;
    }else{
        nombreProd = comprobacion;
        var precioProd =prompt ('Ingresar precio de producto')
        var talleProd =prompt ('Ingresar talle de producto')
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
        var cantidadProd =prompt ('Ingresar cantidad de productos')
    }
}
while (comprobacion !="listo" ||comprobacion != "LISTO" ||comprobacion != "Listo")
{
    alert ("El producto se encontro" + comprobacion);
}


