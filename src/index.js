// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Encrypt function
let caesarEncrypt = function (word, key) {
    let origAr = word.split('');
    let crypAr = [];
    key = key % 26;

    for (let i = 0; i < word.length; i++) {
        let n = origAr[i].toUpperCase().charCodeAt(0) + key;
        if (n > 90) {
            let p = n - 90;
            crypAr.push(String.fromCharCode(64 + p));
        }
        else if (n < 65) {
            let p = 65 - n;
            crypAr.push(String.fromCharCode(91 - p));
        }
        else {
            crypAr.push(String.fromCharCode(n));
        }
    }
    for (let i = 0; i < word.length; i++) {
        if (origAr[i] === origAr[i].toLowerCase()) {
            crypAr[i] = crypAr[i].toLowerCase();
        }
    }
    let crypSt = crypAr.join('');
    return crypSt;
}

// Decrypt function
let caesarDecrypt = function (word, key) {
    let origAr = word.split('');
    let crypAr = [];
    key = key % 25;
    key = key * -1;

    for (let i = 0; i < word.length; i++) {
        let n = origAr[i].toUpperCase().charCodeAt(0) + key;
        if (n > 90) {
            let p = n - 90;
            crypAr.push(String.fromCharCode(64 + p));
        }
        else if (n < 65) {
            let p = 65 - n;
            crypAr.push(String.fromCharCode(91 - p));
        }
        else {
            crypAr.push(String.fromCharCode(n));
        }
    }
    for (let i = 0; i < word.length; i++) {
        if (origAr[i] === origAr[i].toLowerCase()) {
            crypAr[i] = crypAr[i].toLowerCase();
        }
    }
    let crypSt = crypAr.join('');
    return crypSt;
}

// Class component
class CypherForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        const plaintext = (event.target.plaintext.value);
        const key = (event.target.key.value);
        console.log(plaintext, key);
        console.log(caesarEncrypt(plaintext, key));
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Enter plaintext</label>
                <input id="plaintext" name="plaintext" type="text" />
                <br />

                <label htmlFor="email">Enter key shift</label>
                <input id="key" name="key" type="number" />
                <br />

                <button>Encrypt!</button>
            </form>
        );
    }
}

// Renderer
ReactDOM.render(
    <CypherForm />,
    document.querySelector('#root')
);