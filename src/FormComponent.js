import React from 'react';
import encrypt from './encrypt'
import decrypt from './decrypt'

class FormComponent extends React.Component {

    constructor() {
        super();
        this.handleSubmitEncrypt = this.handleSubmitEncrypt.bind(this);
        this.handleSubmitDecrypt = this.handleSubmitDecrypt.bind(this);
        this.state = { encryptOutput: '—', stylePlaceholder: {color: "#F9FAFB", fontStyle: "italic"} };
    }

    handleSubmitEncrypt(event) {
        event.preventDefault();
        const plaintext = event.target.plaintext.value;
        const key = event.target.key.value;
        this.setState({
            encryptOutput: encrypt(plaintext, key),
            stylePlaceholder: {}
        });
    }

    handleSubmitDecrypt(event) {
        event.preventDefault();
        const plaintext = event.target.plaintext.value;
        const key = event.target.key.value;
        this.setState({
            outputDecrypt: decrypt(plaintext, key)
        });
    }
    
    render() {
        return (
            <div class="ui placeholder segment">
                <form class="ui form" onSubmit={this.handleSubmitEncrypt}>
                    <div class="field">
                        <label htmlFor="username">{this.props.label1}</label>
                        <input id="plaintext" name="plaintext" type="text" />
                    </div>

                    <div class="field">
                        <label htmlFor="email">{this.props.label2}<br /></label>
                        <input class="field" id="key" name="key" type="number" />
                        <span style={{color: 'LightGray', fontStyle: 'italic'}}>{this.props.note}</span>
                    </div>

                    <button class="ui button">{this.props.button}</button>

                    <h3 class="ui center aligned header" style={this.state.stylePlaceholder} >{this.state.encryptOutput}</h3>
                    <br />
                    <br />
                </form>
            </div>
        );
    };
};

export default FormComponent;
