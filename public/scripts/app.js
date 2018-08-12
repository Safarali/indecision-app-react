"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.increment = _this.increment.bind(_this);
        _this.decrement = _this.decrement.bind(_this);
        _this.resetAll = _this.resetAll.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var count = parseInt(localStorage.getItem("count"));
            if (!isNaN(count)) {
                this.setState(function () {
                    return { count: count };
                });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                localStorage.setItem("count", this.state.count);
            }
        }
    }, {
        key: "increment",
        value: function increment() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "decrement",
        value: function decrement() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "resetAll",
        value: function resetAll() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count: ",
                    this.state.count,
                    " "
                ),
                React.createElement(
                    "button",
                    { onClick: this.increment },
                    "+"
                ),
                React.createElement(
                    "button",
                    { onClick: this.decrement },
                    "-"
                ),
                React.createElement(
                    "button",
                    { onClick: this.resetAll },
                    "Reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// class VisibilityToggle extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleButtonClick = this.handleButtonClick.bind(this);
//         this.state = {
//             visibility: true
//         }
//     }
//
//     handleButtonClick() {
//         this.setState((prevState) => {
//             return {
//                 visibility: !prevState.visibility
//             }
//         });
//     }
//
//     buttonText() {
//         return (this.state.visibility ? ('Hide details') : ('Show details'));
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleButtonClick}>
//                     {this.buttonText()}
//                 </button>
//                 {this.state.visibility && (<p>Here is addtional info</p>) }
//
//             </div>
//         );
//     }
// }
//
//
// ReactDOM.render(<Counter />, document.getElementById('app'));
