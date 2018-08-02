let count = 0;

let addOne = () => {
    count ++;
    renderCounterApp();
}

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count {count}</h1>
            <button onClick={addOne}>{count}</button>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
