const root = ReactDOM.createRoot(document.getElementById("root"));
// const div = React.createElement("div", {}, [
//     React.createElement("div", { id: "inner-div-01" },
//         [
//             React.createElement("span", {}, "01"),
//             React.createElement("span", {}, "01")
//         ]),
//     React.createElement("div", { id: "inner-div-02" },
//         [
//             React.createElement("span", {}, "01"),
//             React.createElement("span", {}, "01")
//         ])
// ]);
const div = <div>
    <div id="inner-div-01">
        <span>01</span>
        <span>02</span>
    </div>
    <div id="inner-div-02">
        <span>01</span>
        <span>02</span>
    </div>
</div>
root.render(div);