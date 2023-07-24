// ELEMENTOS
let verCarrito = document.getElementById("carrito-navbar")
let carritoContainer = document.getElementById("carrito-container")


// CREADOR DE CARRITO
const crearCarrito = ()=>{
    // HEADER DE CARRITO
    carritoContainer.innerHTML = ""
    carritoContainer.style.display = "flex"
    const carritoHeader = document.createElement("div")
    carritoHeader.innerHTML = `
    <a class="carrito-header--text" href="../page/carrito.html">Ver carrito en pagina completa <i class="fa-solid fa-arrow-right"></i></a>`
    const carritoClose = document.createElement("p")

    // BOTON PARA CERRAR CARRITO
    carritoClose.className = "carrito-header--close"
    carritoClose.innerHTML = '<i class="fa-solid fa-x"></i>'
    carritoHeader.className = "carrito-header"
    carritoHeader.append(carritoClose)
    carritoContainer.append(carritoHeader)

    // EVENTO DE CERRAR CARRITO
    carritoClose.addEventListener("click",()=>{
        carritoContainer.style.display = "none"
    })


    // ESTRUCTURA DE CARRITO
    carrito.forEach((product)=>{
        const carritoContent = document.createElement("div")
        carritoContent.innerHTML = ""
        carritoContent.className = "carrito-content"
        carritoContent.innerHTML = `
        <img class="carrito-product--img" src="${product.img}"</img>
        <p class="carrito-product--name">${product.name}</p>
        <p class="carrito-product--price">$${product.price * product.cantidad}</p>
        <p class="carrito-product--amount">Cantidad: ${product.cantidad}</p>
        `
        // BOTON DE BORRAR PRODUCTO
        let deleteProduct = document.createElement("span")
        deleteProduct.className = 'fa-solid fa-x delete-product'
        carritoContent.append(deleteProduct)
        deleteProduct.addEventListener("click",borrarProducto)
        carritoContainer.append(carritoContent)
    }) 

    // FOOTER DE CARRITO

    // ACUMULADOR DE PRECIO DE PRENDAS SELECCIONADAS
    const total = carrito.reduce((acc, el)=> acc += el.price * el.cantidad,0) 

    const totalDiv = document.createElement("div")
    totalDiv.className = "total-carrito--container"
    totalDiv.innerHTML = `
    <p class="total-carrito--text">Total: $${total}</p>`
    carritoContainer.append(totalDiv)
}

verCarrito.addEventListener("click",crearCarrito)
// FUNCION QUE PERMITE BORRAR PRODUCTO DE CARRITO
const borrarProducto = ()=>{
    const buscarId = carrito.find((el)=> el.id)

    carrito = carrito.filter((carritoId)=>{
        return carritoId !== buscarId
    })
    addToStorage()
    crearCarrito()
}

// GUARDAR EN STORAGE
const addToStorage = ()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
}



