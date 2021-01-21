import React from 'react';
import { encrypt, decrypt } from './encryption';

const ENCRYPT_FORM_PREFERENCES = {
    formType: "encrypt",
    label1: "Enter plaintext:",
    label2: "Enter key:",
    note: "use negative numbers to shift left",
    button: "Encrypt!",
    stylePlaceholder1: { color: 'LightGray', fontStyle: 'italic' },
    stylePlaceholder2: { color: "#F9FAFB", fontStyle: "italic" },
    functionOutput: '.',
};

const DECRYPT_FORM_PREFERENCES = {
    formType: "decrypt",
    label1: "Enter ciphertext:",
    label2: "Enter key:",
    note: ".",
    button: "Decrypt!",
    stylePlaceholder1: { color: "#F9FAFB", fontStyle: 'italic' },
    stylePlaceholder2: { color: "#F9FAFB", fontStyle: "italic" },
    functionOutput: '.',
};

class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.formType === "encrypt"
            ? ENCRYPT_FORM_PREFERENCES
            : DECRYPT_FORM_PREFERENCES;
    }

    handleSubmit(event) {
        event.preventDefault();
        const plaintext = event.target.plaintext.value;
        const key = event.target.key.value;
        this.setState({
            stylePlaceholder2: {},
            functionOutput: this.state.formType === "encrypt"
                ? encrypt(plaintext, key)
                : decrypt(plaintext, key)
        });
    }

    render() {
        return (
            <div className="ui placeholder segment">
                <form className="ui form" onSubmit={e => this.handleSubmit(e)}>
                    <div className="field">
                        <label htmlFor="username">{this.state.label1}</label>
                        <input id="plaintext" name="plaintext" type="text" />
                    </div>

                    <div className="field">
                        <label htmlFor="email">{this.state.label2}<br /></label>
                        <input className="field" id="key" name="key" type="number" />
                        <span style={this.state.stylePlaceholder1}>{this.state.note}</span>
                    </div>

                    <button className="ui button">{this.state.button}</button>

                    <h3 className="ui center aligned header" style={this.state.stylePlaceholder2} >{this.state.functionOutput}</h3>
                    <br />
                    <br />
                </form>
            </div>
        );
    };
};

export default FormComponent;
