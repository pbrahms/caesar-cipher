import React from 'react';
import encrypt from './encrypt'
import decrypt from './decrypt'

class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        if (this.props.formType === "encrypt") {
            this.state = {
                formType: "encrypt",
                label1: "Enter plaintext:",
                label2: "Enter key:",
                note: "use negative numbers to shift left",
                button: "Encrypt!",
                stylePlaceholder1: { color: 'LightGray', fontStyle: 'italic' },
                stylePlaceholder2: { color: "#F9FAFB", fontStyle: "italic" },
                functionOutput: '.',
            };
        }
        else if (this.props.formType === "decrypt") {
            this.state = {
                formType: "decrypt",
                label1: "Enter ciphertext:",
                label2: "Enter key:",
                note: ".",
                button: "Decrypt!",
                stylePlaceholder1: { color: "#F9FAFB", fontStyle: 'italic' },
                stylePlaceholder2: { color: "#F9FAFB", fontStyle: "italic" },
                functionOutput: '.',
            };
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const plaintext = event.target.plaintext.value;
        const key = event.target.key.value;
        if (this.state.formType === "encrypt") {
            this.setState({
                functionOutput: encrypt(plaintext, key),
                stylePlaceholder2: {}
            });
        }
        else if (this.state.formType === "decrypt") {
            this.setState({
                functionOutput: decrypt(plaintext, key),
                stylePlaceholder2: {}
            });
        }
    }

    render() {
        return (
            <div class="ui placeholder segment">
                <form class="ui form" onSubmit={this.handleSubmit}>
                    <div class="field">
                        <label htmlFor="username">{this.state.label1}</label>
                        <input id="plaintext" name="plaintext" type="text" />
                    </div>

                    <div class="field">
                        <label htmlFor="email">{this.state.label2}<br /></label>
                        <input class="field" id="key" name="key" type="number" />
                        <span style={this.state.stylePlaceholder1}>{this.state.note}</span>
                    </div>

                    <button class="ui button">{this.state.button}</button>

                    <h3 class="ui center aligned header" style={this.state.stylePlaceholder2} >{this.state.functionOutput}</h3>
                    <br />
                    <br />
                </form>
            </div>
        );
    };
};

export default FormComponent;
