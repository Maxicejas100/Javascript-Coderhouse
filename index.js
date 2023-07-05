// IMPUESTO IVA
let iva = 1.21

// PRENDAS
let precioBuzo = 12000 * iva
let precioPantalon = 8000 * iva
let precioRemera = 2000 * iva

const prendas = [
    {amount: 0, name: 'Buzo', price: 0},
    {amount: 0, name: 'Pantalon', price: 0},
    {amount: 0, name: 'Remera', price: 0}
]
// DINERO GASTADO
let subtotal = 0

// COSTO ENVIO
let envioPago = 2000

// DINERO DE USUARIO + ENVIO
alert('Si gastas mas de $10000, tienes envio gratis')
let dineroUsuario = parseInt(prompt('Cuanto dinero vas a gastar? Monto minimo: $4000'))


// SUMA DE PRENDAS + ARRAY DE COMPRA
const sumarProducto = (precio)=>{
    subtotal += precio
    if (dineroUsuario > subtotal) {
        alert('Vas gastando $' + subtotal)
        return subtotal
    }
    else{
        console.log('Lo siento no te alcanza el dinero')
    }
}
const agregarProducto = (index,precioProducto)=>{
    prendas[index].amount += 1
    prendas[index].price += precioProducto
}

// ZONA DE COMPRA

if (dineroUsuario >= 4000 && dineroUsuario <= 10000) {
    console.log('Se te restara 2000 de envio')
    subtotal += envioPago
    subtotal = (dineroUsuario - subtotal) / precioRemera
    console.log('Solo te alcanza para ' + subtotal + ' Remeras')

}
else if(dineroUsuario > 10000){
    console.log('Tienes envio gratis')
    let compra = parseInt(prompt('Introduzca que quiere comprar: 1=($12000)Buzo, 2=($8000)Pantalon, 3=($2000)Remera'))
    while(subtotal < dineroUsuario){
        if (compra === 1) {
            sumarProducto(precioBuzo)
            agregarProducto(0,precioBuzo)
            console.log('Vas gastando $' + subtotal)
            if (subtotal > dineroUsuario) {
                console.log('No tienes dinero suficiente')
            }
            else{
            compra = parseInt(prompt('Introduzca que quiere comprar: 1=($12000)Buzo, 2=($8000)Pantalon, 3=($2000)Remera'))
            }
        }
        else if(compra === 2){
            sumarProducto(precioPantalon)
            agregarProducto(1,precioPantalon)
            console.log('Vas gastando $' + subtotal)
            if (subtotal > dineroUsuario) {
                console.log('No tienes dinero suficiente')
            }
            else{
            compra = parseInt(prompt('Introduzca que quiere comprar: 1=($12000)Buzo, 2=($8000)Pantalon, 3=($2000)Remera'))
            }
        }
        else if(compra === 3){
            sumarProducto(precioRemera)
            agregarProducto(2,precioRemera)
            console.log('Vas gastando $' + subtotal)
            if (subtotal > dineroUsuario) {
                console.log('No tienes dinero suficiente')
            }
            else{
            compra = parseInt(prompt('Introduzca que quiere comprar: 1=($12000)Buzo, 2=($8000)Pantalon, 3=($2000)Remera'))
            }
        }
        else if (compra !== 1 || compra !== 2 || compra !== 3){
            alert('Por favor introduzca que quieres comprar')
            compra = parseInt(prompt('Introduzca que quiere comprar: 1=($12000)Buzo, 2=($8000)Pantalon, 3=($2000)Remera'))
        }
    }
}
else{
    console.log('Lo siento,no tienes dinero suficiente para realizar una compra.')
}

// ORDENADO DE COMPRA DE MENOR A MAYOR
prendas.sort((a,b)=>{
    if (a.amount > b.name) {
        return 1;
    }
    if (a.amount < b.amount){
        return -1;
    }
    return 0
})
console.log('Cantidad de prendas seleccionadas:')
console.table(prendas)





