let img = document.getElementById("img");
let slides = ["mongolz-2.avif", "mongolz-3.webp", "mongolz-1.avif"]
// const products =[]
const product1 = {
    img: "./basic-hoodie.jpg",
    price: 55,
    name: "Basic hoodie",
    id: 1
}
const product2 = {
    img: "./pro kit jersey.jpg",
    price: 45,
    name: "Pro kit jersey",
    id: 2
}
const product3 = {
    img: "./gameday Jacket.jpg",
    price: 40,
    name: "Gameday Jacket",
    id: 3
}

// [10, 9, 20, 2]
// {
//     key: 'value'
// }

let cart = {
}

let Start = 0;
function slider() {

    if (Start < slides.length) {
        img.innerHTML = "<img src=" + slides[Start] + ">";
        Start = Start + 1;
    }
    else {
        Start = 0;
    }


}
setInterval(slider, 3000);


let Cart = document.querySelector(".cart")
let closeCart = document.querySelector(".close")
let body = document.querySelector("body");
Cart.addEventListener("click", () => {
    body.classList.toggle("showCart")
})
closeCart.addEventListener("click", () => {
    body.classList.toggle("showCart")
})

let product1TotalPrice = 0 // 1800
let product2TotalPrice = 0 // 1000
let product3TotalPrice = 0
let product1totalQuantity=0
let product2totalQuantity=0
let product3totalQuantity=0
function cartIncrease(productId) {
    console.log(productId);
    let totalPrice = 0;
    let totalQuantity=0;

    cart[productId] = cart[productId] + 1;
    let totalProduct = document.getElementById("totalNumber" + productId);
    totalProduct.innerText = cart[productId];


    if (productId == 1) {

        product1TotalPrice = product1.price * cart[productId]
        let productTotalPrice = document.getElementById("totalPrice" + productId);
        productTotalPrice.innerHTML = product1TotalPrice + "$"
        product1totalQuantity= cart[productId]
    }
    if (productId == 2) {
        product2TotalPrice = product2.price * cart[productId]
        let productTotalPrice = document.getElementById("totalPrice" + productId);
        productTotalPrice.innerHTML = product2TotalPrice + "$"
        product2totalQuantity= cart[productId]

    }
    if (productId == 3) {
        product3TotalPrice = product3.price * cart[productId]
        let productTotalPrice = document.getElementById("totalPrice" + productId);
        productTotalPrice.innerHTML = product3TotalPrice + "$"
        product3totalQuantity= cart[productId]
    }

    totalQuantity += product1totalQuantity+ product2totalQuantity + product3totalQuantity
    totalPrice += product1TotalPrice + product2TotalPrice + product3TotalPrice
    
    console.log(totalPrice)
    let totalfinalPrice = document.getElementsByClassName("close")[0]
    totalfinalPrice.innerHTML = totalPrice;
    let finaltotalQuantity = document.querySelector(".quantity")
    finaltotalQuantity.innerHTML= totalQuantity
}


function cartDecrease(productId) {
    console.log(productId);
    let totalPrice = 0;
    let totalQuantity=0;
    if (cart[productId] > 0) {
        cart[productId] = cart[productId] - 1;
        let totalProduct = document.getElementById("totalNumber" + productId);
        totalProduct.innerText = cart[productId];
        if (productId == 1) {

            product1TotalPrice = product1.price * cart[productId]
            let productTotalPrice = document.getElementById("totalPrice" + productId);
            productTotalPrice.innerHTML = product1TotalPrice + "$"
            product1totalQuantity= cart[productId]
        }
        if (productId == 2) {
            product2TotalPrice = product2.price * cart[productId]
            let productTotalPrice = document.getElementById("totalPrice" + productId);
            productTotalPrice.innerHTML = product2TotalPrice + "$"
            product2totalQuantity= cart[productId]
        }  
        if (productId == 3) {
            product3TotalPrice = product3.price * cart[productId]
            let productTotalPrice = document.getElementById("totalPrice" + productId);
            productTotalPrice.innerHTML = product3TotalPrice + "$"
            product1totalQuantity= cart[productId]
        }
        totalPrice += product1TotalPrice + product2TotalPrice + product3TotalPrice
        totalQuantity += product1totalQuantity+ product2totalQuantity + product3totalQuantity
        let totalfinalPrice = document.getElementsByClassName("close")[0]
        totalfinalPrice.innerHTML = totalPrice;
        let finaltotalQuantity = document.querySelector(".quantity")
        finaltotalQuantity.innerHTML= totalQuantity
    }
    console.log(cart[productId])

    if (cart[productId] === 0) {
        const card = document.getElementById(productId);
        card.remove(productId)
        cart[productId] = undefined;
    }
    console.log(cart)
}
function addToCart(id) {
    let containerEl = document.querySelector('.listCart')

    let productCard = document.createElement('div')
    let squareImg = document.createElement('img') // <img>
    let square = document.createElement('div') // <div></div>
    square.className="cartproduct"
    let squarename= document.createElement("span")
    let itemPrice = document.createElement("span")
    itemPrice.id = "totalPrice" + id;
    let items = document.createElement("div")
    items.className="productchange"
    let minus = document.createElement("button")
    let itemNumber = document.createElement("span")
    itemNumber.id = "totalNumber" + id; `1`
    let plus = document.createElement("button")
    let totalQuantity=0;
    let totalPrice=0;
    console.log(cart[id]);

    if (cart[id] !== undefined) {
        return;
    }
    
    if (id == 1) {
        squareImg.src = product1.img
        squarename.innerText = product1.name
        itemPrice.innerHTML = product1.price + " $"
        minus.innerHTML = "<"
        itemNumber.innerHTML = 1
        plus.innerHTML = ">"
        plus.onclick = function () {
            return cartIncrease(1)
        }
        minus.onclick = function () {
            return cartDecrease(1)
        }
        cart[product1.id] = 1;
        product1TotalPrice = product1.price
        product1totalQuantity= cart[product1.id]
    }

    if (id == 2) {

        squareImg.src = product2.img
        squarename.innerText = product2.name
        itemPrice.innerHTML = product2.price + " $"
        minus.innerHTML = "<"
        itemNumber.innerHTML = 1
        plus.innerHTML = ">"

        plus.onclick = function () {
            return cartIncrease(2)
        }
        minus.onclick = function () {
            return cartDecrease(2)
        }

        cart[product2.id] = 1;
        product2TotalPrice = product2.price
        product2totalQuantity= cart[product2.id]
    }
    if (id == 3) {
        squareImg.src = product3.img
        squarename.innerText = product3.name
        itemPrice.innerHTML = product3.price + " $"
        minus.innerHTML = "<"
        itemNumber.innerHTML = 1
        plus.innerHTML = ">"
        plus.onclick = function () {
            return cartIncrease(3)
        }
        minus.onclick = function () {
            return cartDecrease(3)
        }


        cart[product3.id] = 1;
        product3TotalPrice = product3.price
        product3totalQuantity= cart[product3.id]
    }
    totalQuantity += product1totalQuantity+ product2totalQuantity + product3totalQuantity
    totalPrice += product1TotalPrice + product2TotalPrice + product3TotalPrice
    let finaltotalPrice = document.querySelector(".close")
    finaltotalPrice.innerHTML= totalPrice
    let finaltotalQuantity = document.querySelector(".quantity")
    finaltotalQuantity.innerHTML= totalQuantity
    console.log(cart)
   
    containerEl.style.display = "column"
    
    items.style.display = "flex"
    items.style.width="100px"
    items.style.height = "50px"
    containerEl.style.height = "200px"
    square.appendChild(squareImg)

    items.appendChild(minus)
    items.appendChild(itemNumber)
    items.appendChild(plus)
    square.appendChild(itemPrice)
    square.appendChild(squarename)

    productCard.appendChild(square)
    productCard.appendChild(items);

    productCard.id = id
    productCard.classList.add("card")
    productCard.style.display="flex"
     productCard.style.gap="40px"

    containerEl.appendChild(productCard)
}