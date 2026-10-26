
// const price = localStorage.getItem("price");
// const title = localStorage.getItem("title");
const product = localStorage.getItem("product");

// console.log("image", image);
// console.log("title", title);
// console.log("price", price);
console.log("product", product);

const showCart = () => {
    const cartContainer = document.getElementById("cart-container");
    const div = document.createElement("div");
    
    const img = document.createElement("img");
    img.src = localStorage.getItem("image");
    img.alt = "product-img here";

    const title = document.createElement("h1");
    title.innerText = localStorage.getItem("title");

    const price = document.createElement("h2");
    price.innerText = localStorage.getItem("price");

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);

    cartContainer.appendChild(div);
}
showCart();



