const root = ReactDOM.createRoot(document.getElementById("root"));
const HeaderComponent = () => {
    return (<div style={{
        textAlign:"center",
        backgroundColor:"black",
        color:"white"
    }}>
        <h1>E-commerce Webpage</h1>
    </div>)
}
const ProductComponent = ()=>{
    return(<div id="prod-container">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
    </div>)
}
const FooterComponent = ()=>{
    return(<div>
        <h1>Copyright All rights are reserved...</h1>
    </div>)
}
const reactElement = <>
    <HeaderComponent />
    <ProductComponent></ProductComponent>
    {FooterComponent()}
</>
root.render(reactElement);