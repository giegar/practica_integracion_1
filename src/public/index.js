
const socket = io();
/*
const form = document.getElementById('form')
const title = document.getElementById('title')
const description = document.getElementById('description')
const price = document.getElementById('price')
const thumbnail = document.getElementById('thumbnail')
const stock = document.getElementById('stock')
const code = document.getElementById('code')
const addButton = document.querySelectorAll('addbtn')
const productsList = document.getElementById('productsList')

form.addEventListener("submit", async (e) =>{
    try{
        e.preventDefault()
        const data = new FormData(form);

        console.log({data});

        await fetch("/api/products", {
            method: "post",
            body: data
        }).then(result => result.json())
        .then(product => {
            title.value = ""
            description.value = ""
            price.value = ""
            thumbnail.value = "none"
            stock.value = ""
            code.value = ""
        })

    }catch(error){
        console.log(error)
    }
})

const createHtml = (data) =>{
    
    if(data){
        data.map(newProduct => {
            product.innerHTML += `
                <div>
                    <h4> ${newProduct.title} </h4>
                    <p> ${newProduct.description} </p>
                    <p> ${newProduct.price} </p>
                    <p> ${newProduct.code} </p>
                    <p> ${newProduct.stock} </p>
                </div> `
                })
            products.innerHTML += `
                    <div>
                        <h4> ${data.title} </h4>
                        <p> ${data.description} </p>
                        <p> ${data.price} </p>
                        <p> ${data.code} </p>
                        <p> ${data.stock} </p>
                    </div>`
    } else if (data == null) {
        return '<h2> No hay productos </h2>'
    }
}

socket.on('newProduct', (data) => {
    products.innerHTML = ""
    createHtml(data)
})*/