const ProdMarcas = []

class Productos{
    constructor(nombre,precio,talle,marca){
        this.nombre = nombre.toUpperCase();
        this.talle = talle;
        this.precio = parseFloat(precio);
        this.marca = marca
        this.venta = false;
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
    tarjeta(){
        this.precio = this.precio * 1.30;
    }
    vender(){
        this.vendido = true;
    }
}  

const ZapaAdidas1 = new Productos("low retro","55000","42","adidas");
const Zapanike1 = new Productos("Low Leyend Jordan", "85000","43","nike");
const Zapaconverce1 = new Productos("bigshot Man 2", "69000","44","converce");
const Zapaconverce2 = new Productos( "Larry Big","78000", "43","converce");
const Zapanike2 = new Productos("Jordan Big Fly","105000", "44","nike");
const ZapaAdidas2 = new Productos("Low Retro Space","75000",  "45","adidas");
ProdMarcas.push(ZapaAdidas1,Zapaconverce1,Zapanike1,ZapaAdidas2,Zapaconverce2,Zapanike2);
console.table(ProdMarcas)





