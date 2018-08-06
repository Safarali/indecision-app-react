// class Counter extends React.Component {
//     constructor(props){
//         super(props);
//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);
//         this.resetAll = this.resetAll.bind(this);
//         this.state = {
//             count: 0
//         }
//     }
//
//     increment() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             };
//         });
//     }
//
//     decrement() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count - 1
//             };
//         });
//     }
//
//     resetAll(){
//         this.setState(() => {
//             return {
//                 count: 0
//             };
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Count: {this.state.count} </h1>
//                 <button onClick={this.increment}>+</button>
//                 <button onClick={this.decrement}>-</button>
//                 <button onClick={this.resetAll}>Reset</button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<Counter/>, document.getElementById('app'));



class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            visibility: true
        }
    }

    handleButtonClick() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    buttonText() {
        return (this.state.visibility ? ('Hide details') : ('Show details'));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>
                    {this.buttonText()}
                </button>
                {this.state.visibility && (<p>Here is addtional info</p>) }

            </div>
        );
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
