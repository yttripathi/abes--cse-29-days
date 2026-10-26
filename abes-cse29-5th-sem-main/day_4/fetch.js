const getProductsData = async () => {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// getProductsData();

fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));