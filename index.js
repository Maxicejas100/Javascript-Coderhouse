// IMPUESTO IVA
let iva = 0.21

// PRENDAS
let precioBuzo = 12000 + (12000 * iva)
let precioPantalon = 8000 + (8000 * iva)
let precioRemera = 2000 + (2000 * iva)

// DINERO GASTADO
let subtotal = 0

// COSTO ENVIO
let envioPago = 2000

// DINERO DE USUARIO + ENVIO
alert('Si gastas mas de $10000, tienes envio gratis')
let dineroUsuario = parseInt(prompt('Cuanto dinero vas a gastar? Monto minimo: $4000'))


// SUMA DE PRENDAS
const buzo = ()=>{
    subtotal += precioBuzo
    if (dineroUsuario > subtotal) {
        alert('Vas gastando $' + subtotal)
        return subtotal
    }
    else{
        console.log('Lo siento no te alcanza el dinero')
    }
}
const pantalon = ()=>{
    subtotal += precioPantalon
    if (dineroUsuario > subtotal) {
        alert('Vas gastando $' + subtotal)
        return subtotal
    }
    else{
        console.log('Lo siento no te alcanza el dinero')
    }
}
const remera = ()=>{
    subtotal += precioRemera
    if (dineroUsuario > subtotal) {
        alert('Vas gastando $' + subtotal)
        return subtotal
    }
    else{
        console.log('Lo siento no te alcanza el dinero')
    }
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
    for(let i = subtotal; subtotal < dineroUsuario; i += subtotal){
        if (compra === 1) {
            buzo()
            console.log('Vas gastando $' + subtotal)
            if (subtotal > dineroUsuario) {
                console.log('No tienes dinero suficiente')
            }
            else{
            compra = parseInt(prompt('Introduzca que quiere comprar: 1=($12000)Buzo, 2=($8000)Pantalon, 3=($2000)Remera'))
            }
        }
        else if(compra === 2){
            pantalon()
            console.log('Vas gastando $' + subtotal)
            if (subtotal > dineroUsuario) {
                console.log('No tienes dinero suficiente')
            }
            else{
            compra = parseInt(prompt('Introduzca que quiere comprar: 1=($12000)Buzo, 2=($8000)Pantalon, 3=($2000)Remera'))
            }
        }
        else if(compra === 3){
            remera()
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





