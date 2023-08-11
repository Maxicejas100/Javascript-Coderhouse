// PRODUCTOS DE MUJER 
let seccionMujer = document.getElementById("productos-mujer")
let cardWomanContainer = document.createElement("div")
cardWomanContainer.className = "row mt-5"
seccionMujer.appendChild(cardWomanContainer)

// ELEMENTOS DE CATEGORIA
let selectAllWoman = document.getElementById("select-all-woman")
let selectShirtWoman = document.getElementById("select-shirt-woman")
let selectPantsWoman = document.getElementById("select-pants-woman")



// SELECCION TODOS LOS PRODUCTOS

selectAllWoman.addEventListener("click",()=>{
    const getProductsWoman = async ()=>{
        const response = await fetch("../data/data.json")
        const data = await response.json()
        cardWomanContainer.innerHTML = ""
        data.forEach((product)=>{
            if(product.genero === "mujer"){
                let productsWomanCard = document.createElement("div")
                productsWomanCard.className = "card-all-woman col-3 mb-5"
                productsWomanCard.innerHTML = `
                <img class="img-fluid h-80 w-100" src="${product.img}"></img>
                <p>${product.name}</p>
                <p>$${product.price}</p>`

                let buttonWomanContainer = document.createElement("div")
                buttonWomanContainer.className = "d-flex justify-content-center"

                let cardWomanButton = document.createElement("button")
                cardWomanButton.className = "card-woman-button"
                cardWomanButton.innerText = "Agregar al carrito"

                buttonWomanContainer.appendChild(cardWomanButton)
                productsWomanCard.appendChild(buttonWomanContainer)
                cardWomanContainer.appendChild(productsWomanCard)

                cardWomanButton.addEventListener("click",()=>{
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
    getProductsWoman()
})

// SELECCION REMERAS DE MUJER

selectShirtWoman.addEventListener("click",()=>{
const getShirtWoman = async () => {
    const response = await fetch("../data/data.json")
    const data = await response.json()
    cardWomanContainer.innerHTML = ""
    data.forEach((product)=>{
        if(product.genero === "mujer" && product.categoria === "remera"){
            // CONTENEDOR DE CARTA DE PRODUCTO
            // CARTA DE PRODUCTO
            let shirtWomanCard = document.createElement("div")
            shirtWomanCard.className = "card-shirt col-3"
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
    getShirtWoman() 
})


// SELECCION CALZAS DE MUJER
selectPantsWoman.addEventListener("click",()=>{
const getPantsWoman = async () => {
    const response = await fetch("../data/data.json")
    const data = await response.json()
    cardWomanContainer.innerHTML = ""
    data.forEach((product)=>{
        if(product.genero === "mujer" && product.categoria === "leggin"){
            // CONTENEDOR DE CARTA DE PRODUCTO
            // CARTA DE PRODUCTO
            let pantsWomanCard = document.createElement("div")
            pantsWomanCard.className = "card-pant col-3"
            pantsWomanCard.innerHTML = `
            <img class="img-fluid" src="${product.img}"></img>
            <p class="card-name-woman">${product.name}</p>
            <p class="card-price-woman">$${product.price}</p>
            `
            // BOTON DE CARTA
            let buttonPantContainer = document.createElement("div")
            buttonPantContainer.className = "d-flex justify-content-center"
            let cardPantsButton = document.createElement("button")
            cardPantsButton.classList = "card-woman-button"
            cardPantsButton.innerText = "Agregar al carrito"
            // AGREGADO A LA CARTA
            buttonPantContainer.appendChild(cardPantsButton)
            pantsWomanCard.appendChild(buttonPantContainer)
            cardWomanContainer.appendChild(pantsWomanCard)
            // EVENTO AGREGAR AL CARRITO Y STORAGE
            cardPantsButton.addEventListener("click",()=>{      
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
getPantsWoman()
})
