// PRODUCTOS DE MUJER 
let seccionMujer = document.getElementById("productos-mujer")
let cardWomanContainer = document.createElement("div")
cardWomanContainer.className = "row mt-5"
seccionMujer.appendChild(cardWomanContainer)


const getShirtWoman = async () => {
    const response = await fetch("../data/data.json")
    const data = await response.json()
    data.forEach((product)=>{
        if(product.genero === "mujer" && product.categoria === "remera"){
            // CONTENEDOR DE CARTA DE PRODUCTO
            // CARTA DE PRODUCTO
            let shirtWomanCard = document.createElement("div")
            shirtWomanCard.className = "card-pant col-3"
            shirtWomanCard.innerHTML = `
            <img class="img-fluid" src="${product.img}"></img>
            <p class="card-name-woman">${product.name}</p>
            <p class="card-price-woman">$${product.price}</p>
            `
            // BOTON DE CARTA
            let buttonShirtContainer = document.createElement("div")
            buttonShirtContainer.className = "d-flex justify-content-center"
            let cardShirtButton = document.createElement("button")
            cardShirtButton.classList = "card-woman-button"
            cardShirtButton.innerText = "Agregar al carrito"
            // AGREGADO A LA CARTA
            buttonShirtContainer.appendChild(cardShirtButton)
            shirtWomanCard.appendChild(buttonShirtContainer)
            cardWomanContainer.appendChild(shirtWomanCard)
            // EVENTO AGREGAR AL CARRITO Y STORAGE
            cardShirtButton.addEventListener("click",()=>{      
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

getShirtWoman()