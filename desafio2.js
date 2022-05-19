/* //CARGAR CLIENTES A BASE DE DATOS
class Persona{
    constructor (nombre, apellido, localidad){
        this.nombre=nombre
        this.apellido=apellido
        this.localidad= localidad
    }
}

class Producto {
    constructor (id, producto){
        this.id=id
        this.producto=producto
    }
}
class Compra{
    constructor (precio, cantidad){
        this.precio=precio;
        this.cantidad= cantidad;
    }

    calcularTotal(){
        return this.precio*this.cantidad;
    }
}

const persona = new Persona ("Micaela", "Barberis", "Paraná- Entre ríos");
const producto = new Producto (2, "Champú sólido de Coco");
const compra = new Compra (470, 5);

const persona2 = new Persona ("Rafael", "Kendziur", "Santa Fe")
const producto2 = new Producto (4, "Crema facial")
const compra2 = new Compra (530, 2)

console.log (persona);
console.log (producto);
console.log (compra);
console.log (compra.calcularTotal());

console.log (persona2)
console.log (producto2)
console.log (compra2)
console.log (compra2.calcularTotal()); */