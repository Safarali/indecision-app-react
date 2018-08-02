// JSX - JavaScript XML

const app = {
    title: "Indecision",
    subtitle: "Rejasiz ish, qolipsiz g'isht",
    options: []
}
const template =(
    <div>
        <h1>{app.title}</h1>
        <p> {app.subtitle}</p>
        <p>{app.options.length > 0 ? "Here is your options" : "No options"}</p>
        <ol>
            <li>Item 1 </li>
            <li>Item 2 </li>
            <li>Item 3 </li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');
