console.log("Hello guys.")

// JSX - JavaScript XML
// var template = <p>This JSX from app.js</p>
var template = React.createElement(
    "h1",
    { id: "app" },
    "This JSX from app.js. Coool"
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);