// JSX - JavaScript XML

const app = {
    title: "Indecision",
    subtitle: "Rejasiz ish, qolipsiz g'isht",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    option && app.options.push(option);
    renderForm();
};


const onRemoveAll = () => {
    app.options = [];
    renderForm();
}

const onMakeDecision = () => {
    let random = Math.floor(Math.random() * app.options.length);
    let option = app.options[random];
    alert(option);
};

const renderForm = () => {
    const template =(
        <div>
            <h1>{app.title}</h1>
            <p> {app.subtitle}</p>
            <p>{app.options.length > 0 ? "Here is your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I Do</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                {app.options.map((option) =>
                    <li key="option">
                        {option}
                    </li>
                )}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
const appRoot = document.getElementById('app');
renderForm();
