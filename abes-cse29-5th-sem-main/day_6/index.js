// const div = document.getElementById("root");
// const h1 = document.createElement("h1");
// h1.innerText = "Welcome to the FSD class!!!";
// div.appendChild(h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
const h1 = React.createElement("h1",{},"Welcome to the FSD class!!");
root.render(h1);

