import React from 'react';
const Option = (props) => (
    <li className="option">
        <p className="option__text">{props.count}.{props.optionText}</p>
        <button
            className="small-button small-button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </li>

);
export default Option;
