import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';

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
        options: []
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
        let randomIdx = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomIdx]);
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

    render() {
        return (
            <div>
                <Header subTitle="Basic React App"/>
                <Action
                    hasOptions={this.state.options.length > 0} handlePick={this.handlePick}
                />
                <Options
                    options = {this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
