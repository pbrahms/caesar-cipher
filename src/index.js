// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

function AppPageComponent() {

    // Class component
    class CypherFormComponent extends React.Component {

        constructor() {
            super();
            this.handleSubmitEncrypt = this.handleSubmitEncrypt.bind(this);
            this.handleSubmitDecrypt = this.handleSubmitDecrypt.bind(this);
            this.state = { output: '' };
        }
    
        handleSubmitEncrypt(event) {
            event.preventDefault();
            const plaintext = (event.target.plaintext.value);
            const key = (event.target.key.value);
            this.setState({outputEncrypt: caesarEncrypt(plaintext, key)});
        }
    
        handleSubmitDecrypt(event) {
            event.preventDefault();
            const plaintext = (event.target.plaintext.value);
            const key = (event.target.key.value);
            this.setState({outputDecrypt: caesarDecrypt(plaintext, key)});
        }
    
        render() {
            return (
                <div>
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
                    <form onSubmit={this.handleSubmitDecrypt}>
                        <label htmlFor="username">Enter plaintext:</label>
                        <input id="plaintext" name="plaintext" type="text" />
                        <br />
    
                        <label htmlFor="email">Enter key shift:</label>
                        <input id="key" name="key" type="number" />
                        <br />
    
                        <button>Decrypt!</button>
                        <br />
    
                        <p>Result: {this.state.outputDecrypt}</p>
                    </form>
                </div>
    
            );
        }
    }
    
    // Renderer
    ReactDOM.render(
        <CypherFormComponent />,
        document.querySelector('#root')
    );
    // check
    return;
}

export default AppPageComponent;
