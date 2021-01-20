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

    render () {
        return (
            <form onSubmit={this.handleSubmitEncrypt}>
                <label htmlFor="username">Enter plaintext:</label>
                <input id="plaintext" name="plaintext" type="text" />
                <br />

                <label htmlFor="email">Enter key shift:</label>
                <input id="key" name="key" type="number" />
                <br />

                <button>Encrypt!</button>
                <br />

                <p>Result: {this.state.outputEncrypt}</p>
            </form>
        );
    };
};

export default FormComponent;
