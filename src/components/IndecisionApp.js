import React, { Fragment } from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    // Old Syntax
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         options: []
    //     }
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // }
    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }



    handlePick = () => {
        const randomIdx = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomIdx];
        this.setState(() => ({ selectedOption: option }))
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item'
        } else if(this.state.options.includes(option)) {
            return 'Item alread exists'
        } else {
            this.setState((prevState) => ({ options: prevState.options.concat(option)}));
        }
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    };

    render() {
        return (
            <Fragment>
                <Header subTitle="Basic React App"/>

                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0} handlePick={this.handlePick}
                    />
                    <div className="cart">
                        <Options
                            options = {this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </Fragment>
        );
    }
}
