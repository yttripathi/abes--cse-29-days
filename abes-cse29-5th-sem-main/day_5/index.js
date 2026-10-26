const prodContainer = document.getElementById("prod-container");
let products = [];

const showProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    products = data.products;

    products.map((product) => {
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "product img here"

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const span = document.createElement("span");
        span.innerText = "ADD";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(span);
        div.appendChild(incrementBtn);

        prodContainer.appendChild(div);
        let counter = 0;
        incrementBtn.addEventListener("click", () => {
            counter++;
            span.innerText = counter;
            localStorage.setItem("product",product);
            localStorage.setItem("id",product.id);
            localStorage.setItem("image",product.thumbnail);
            localStorage.setItem("title",product.title);
            localStorage.setItem("price",product.price);
        })
        decrementBtn.addEventListener("click", () => {
            if (counter > 0) {
                counter--;
                span.innerText = counter;
            }
        })
    })
}
showProducts();