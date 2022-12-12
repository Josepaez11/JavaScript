class producto {
    constructor(producto,precio,talle,cantidad){
        this.producto = producto;
        this.precio = parseFloat (precio);
        this.talle = talle;
        this.cantidad = cantidad;
        this.disponible = true;
    }
    sumarIva() {
        return this.precio * 1.21;
    }
    vender(){
        this.disponible = false;
    }
}
var arrayProductos = [];
do{
    var comprobacion = prompt ('Ingresar nombre del producto');
    if (comprobacion === "listo" ||comprobacion === "LISTO" ||comprobacion === "Listo"){
        break;
    }else{
        nombreProd = comprobacion;
        var precioProd =prompt ('Ingresar precio de producto')
        var talleProd =prompt ('Ingresar talle de producto')
        var cantidadProd =prompt ('Ingresar cantidad de productos')
    }
}
while (comprobacion != "listo"|| comprobacion != "LISTO" || comprobacion != "Listo")

console.log(arrayProductos);

for (var producto of arrayProductos){
    document.write("<ul><li><h3>Producto: " + producto.producto + "</h3></li></ul>");
    document.write("<li><h3>Talle: " + producto.talle + "</h3></li>");
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>");
    console.log(producto.producto);
    console.log(producto.talle);
    console.log(producto.cantidad);
    console.log(producto.precio);
}


var sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3>Sin stock</h3>");

for (var producto of sinStock){
    document.write("<ul><li><h3>Producto: " + producto.producto + "</h3></li></ul>");
    document.write("<li><h3>Talle: " + producto.talle + "</h3></li>");
    document.write("<li><h3>Precio: " + producto.cantidad + "</h3></li>"); 
}
var ingresado = prompt('Buscar producto');
var prodIngresado = arrayProductos.filter(producto => producto.producto.includes(ingresado));
console.log(prodIngresado);
document.write("<h2>Busqueda de productos</h2>");

for (var producto of prodIngresado){
    document.write("<ul><li><h3>Producto: " + producto.producto + "</h3></li></ul>");
    document.write("<li><h3>Talle: " + producto.talle + "</h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>"); 
}