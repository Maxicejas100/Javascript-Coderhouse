// PRODUCTOS DESTACADOS PAGINA PRINCIPAL
let destacadosContainer = document.getElementById("destacados-container")

// CARTA DE PRODUCTOS DESTACADOS PAGINA PRINCIPAL

const productosDestacados = async () =>{
    const response = await fetch("data/data.json")
    const data = await response.json()

    // ZONA DESTACADOS
    data.forEach((product)=>{
        if(product.destacados === true){
        let cardDestacadosContainer = document.createElement("div")
        destacadosContainer.append(cardDestacadosContainer)
        cardDestacadosContainer.className = "card-destacados col-3"
        cardDestacadosContainer.innerHTML += `
        <img class="img-fluid" src="${product.img}"</img>
        <h5>${product.name}</h3>
        <p>$${product.price}<p>`
    
        // DIV CONTENEDOR DE BOTON PARA PODER CENTRARLO
        let divButtonPrincipal = document.createElement("div")
        divButtonPrincipal.className = "divButtonPrincipal d-flex justify-content-center"
    
        // BOTONES DE CARTAS DE PRODUCTOS DESTACADOS PAGINA PRINCIPAL
        let destacadosButton = document.createElement("button")
        destacadosButton.innerText = "Agregar carrito"
        destacadosButton.className = "destacados-button"
    
        // AGREGADO A SU RESPECTIVO PADRE
        divButtonPrincipal.append(destacadosButton)
        cardDestacadosContainer.append(divButtonPrincipal)
    
        // AGREGAR AL CARRITO MEDIANTE BOTON
        destacadosButton.addEventListener("click",()=>{
            const repeat = carrito.some((el)=> el.id === product.id)
            if (repeat) {
                carrito.map((prod)=>{
                    if(prod.id === product.id){
                        prod.cantidad++
                        addToStorage()
                    }
                })
            }else{
            carrito.push({
                id: product.id,
                name: product.name,
                price: product.price,
                cantidad: product.cantidad,
                img: product.img
            })
            addToStorage()
            }
        })
    }
    })
}
productosDestacados()






