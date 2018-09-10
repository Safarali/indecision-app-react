import React from 'react';

export default class AddOption extends React.Component {
    // NEW BABEL plugin
    state = {
        error: undefined
    }

    // OLD Syntax
    // constructor(props){
    //     super(props);
    //     this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //     this.state = {
    //         error: undefined
    //     }
    // }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }))

        if(!error){
            e.target.elements.option.value = ''
        }
    }

    render() {
        return (
            <div class="add-option">
                {this.state.error && <p className="add-option__error">{this.state.error}</p>}
                <form className="add-option__form" onSubmit={this.handleFormSubmit}>
                    <input class="add-option__form-input" type="text" name="option"/>
                    <button className="small-button">Add Option</button>
                </form>
            </div>
        );
    }
}
