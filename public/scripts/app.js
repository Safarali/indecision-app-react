"use strict";

// JSX - JavaScript XML

var app = {
    title: "Indecision",
    subtitle: "Rejasiz ish, qolipsiz g'isht",
    options: []
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        " ",
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here is your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1 "
        ),
        React.createElement(
            "li",
            null,
            "Item 2 "
        ),
        React.createElement(
            "li",
            null,
            "Item 3 "
        )
    )
);

var appRoot = document.getElementById('app');
