import React, { Fragment } from 'react';
import Option from './Option'
const Options = (props) => (
    <Fragment>
        <div className="cart-header">
            <h3 className="cart-header__title">Your options</h3>
            <button
                className="small-button small-button--link cart-header__button"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="cart__message">Please add a option to start</p>}
        <ol className="options">
        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    count={index + 1}
                />
            ))
        }
        </ol>
    </Fragment>
);
export default Options;
