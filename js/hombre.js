// OBTENIENDO IDENTIFICACION DE ELEMENTOS
let seccionHombre = document.getElementById("productos-hombre")
let productsCardContainer = document.createElement("div")
productsCardContainer.className = "row mt-5"
seccionHombre.appendChild(productsCardContainer)

// ELEMENTOS DE CATEGORIA
let selectAll = document.getElementById("select-all")
let selectPants = document.getElementById("select-pants")
let selectShirt = document.getElementById("select-shirt")



// TODOS LOS PRODUCTOS HOMBRE

selectAll.addEventListener("click",()=>{
    const getProductsMen = async ()=>{
        const response = await fetch("../data/data.json")
        const data = await response.json()
        productsCardContainer.innerHTML = ""
        data.forEach((product)=>{
            if(product.genero === "hombre"){
                let productsCard = document.createElement("div")
                productsCard.className = "card-all col-3 mb-5"
                productsCard.innerHTML = `
                <img class="img-fluid h-80 w-100" src="${product.img}"></img>
                <p class="card-name-men">${product.name}</p>
                <p class="card-price-men">$${product.price}</p>`
                let buttonProductContainer = document.createElement("div")
                buttonProductContainer.className = "d-flex justify-content-center"
                let cardButton = document.createElement("button")
                cardButton.className = "card-men-button"
                cardButton.innerText = "Agregar al carrito"

                buttonProductContainer.appendChild(cardButton)
                productsCard.appendChild(buttonProductContainer)
                productsCardContainer.appendChild(productsCard)
                cardButton.addEventListener("click",()=>{
                    const repeat = carrito.some((el)=> el.id === product.id)
                    if (repeat) {
                        carrito.map((prod)=>{
                            if(prod.id === product.id){
                                prod.cantidad++
                                Toastify({
                                    text: "Agregado al carrito ✔",
                                    duration: 2000,
                                    gravity: "top",
                                    position: "right"
                                }).showToast();
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
                    Toastify({
                        text: "Agregado al carrito ✔",
                        duration: 2000,
                        gravity: "top",
                        position: "right"
                    }).showToast();
                    addToStorage()
                    }                    
                })
            }
        })
    }
    getProductsMen()
})


// PRODUCTOS DE HOMBRE-PANTALON
selectPants.addEventListener("click",()=>{
    const getPantsMen = async () => {
        const response = await fetch("../data/data.json")
        const data = await response.json()
        productsCardContainer.innerHTML = ""
        data.forEach((product)=>{
            if(product.genero === "hombre" && product.categoria === "pantalon"){
                // CONTENEDOR DE CARTA DE PRODUCTO
                // CARTA DE PRODUCTO
                let pantalonCard = document.createElement("div")
                pantalonCard.className = "card-pant col-3"
                pantalonCard.innerHTML = `
                <img class="img-fluid" src="${product.img}"></img>
                <p class="card-name-men">${product.name}</p>
                <p class="card-price-men">$${product.price}</p>
                `
                // BOTON DE CARTA
                let buttonPantContainer = document.createElement("div")
                buttonPantContainer.className = "d-flex justify-content-center"
                let cardPantButton = document.createElement("button")
                cardPantButton.className = "card-men-button"
                cardPantButton.innerText = "Agregar al carrito"
                // AGREGADO A LA CARTA
                buttonPantContainer.appendChild(cardPantButton)
                pantalonCard.appendChild(buttonPantContainer)
                productsCardContainer.appendChild(pantalonCard)
                // EVENTO AGREGAR AL CARRITO Y STORAGE
                cardPantButton.addEventListener("click",()=>{      
                const repeat = carrito.some((el)=> el.id === product.id)
                if (repeat) {
                    carrito.map((prod)=>{
                        if(prod.id === product.id){
                            prod.cantidad++
                            Toastify({
                                text: "Agregado al carrito ✔",
                                duration: 2000,
                                gravity: "top",
                                position: "right"
                            }).showToast();
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
                Toastify({
                    text: "Agregado al carrito ✔",
                    duration: 2000,
                    gravity: "top",
                    position: "right"
                }).showToast();
                addToStorage()
                }
                })      
            }
        })
    }
    getPantsMen()
})


// PRODUCTOS DE HOMBRE-REMERAS
selectShirt.addEventListener("click",()=>{
    const getShirtMen = async () => {
        const response = await fetch("../data/data.json")
        const data = await response.json()
        productsCardContainer.innerHTML = ""
        data.forEach((product)=>{
            if(product.genero === "hombre" && product.categoria === "remera"){
                // CONTENEDOR DE CARTA DE PRODUCTO
                // CARTA DE PRODUCTO
                let remeraCard = document.createElement("div")
                remeraCard.className = "card-shirt col-3"
                remeraCard.innerHTML = `
                <img class="img-fluid h-80 w-100" src="${product.img}"></img>
                <p class="card-name-men">${product.name}</p>
                <p class="card-price-men">$${product.price}</p>
                `
                // BOTON DE CARTA
                let buttonShirtContainer = document.createElement("div")
                buttonShirtContainer.className = "d-flex justify-content-center"
                let cardShirtButton = document.createElement("button")
                cardShirtButton.classList = "card-men-button"
                cardShirtButton.innerText = "Agregar al carrito"
                // AGREGADO A LA CARTA
                buttonShirtContainer.appendChild(cardShirtButton)
                remeraCard.appendChild(buttonShirtContainer)
                productsCardContainer.appendChild(remeraCard)
    
                // EVENTO AGREGAR AL CARRITO Y STORAGE
                cardShirtButton.addEventListener("click",()=>{      
                const repeat = carrito.some((el)=> el.id === product.id)
                if (repeat) {
                    carrito.map((prod)=>{
                        if(prod.id === product.id){
                            prod.cantidad++
                            Toastify({
                                text: "Agregado al carrito ✔",
                                duration: 2000,
                                gravity: "top",
                                position: "right"
                            }).showToast();
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
                Toastify({
                    text: "Agregado al carrito ✔",
                    duration: 2000,
                    gravity: "top",
                    position: "right"
                }).showToast();
                addToStorage()
                }
                })      
            }
        })
    }
    
    getShirtMen()
})
