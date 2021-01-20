import React from 'react';
import encrypt from './encrypt'
import decrypt from './decrypt'

class FormComponent extends React.Component {

    constructor() {
        super();
        this.handleSubmitEncrypt = this.handleSubmitEncrypt.bind(this);
        this.handleSubmitDecrypt = this.handleSubmitDecrypt.bind(this);
        this.state = { output: '' };
    }

    handleSubmitEncrypt(event) {
        event.preventDefault();
        const plaintext = event.target.plaintext.value;
        const key = event.target.key.value;
        this.setState({
            outputEncrypt: encrypt(plaintext, key)
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
                        <label htmlFor="username">Enter plaintext:</label>
                        <input id="plaintext" name="plaintext" type="text" />
                    </div>

                    <div class="field">
                        <label htmlFor="email">Enter key:</label>
                        <input class="field" id="key" name="key" type="number" />
                    </div>

                    <button class="ui button">Encrypt!</button>

                    <h3 class="ui center aligned header">{this.state.outputEncrypt}</h3>
                    <br />
                    <br />
                </form>
            </div>
        );
    };
};

export default FormComponent;
