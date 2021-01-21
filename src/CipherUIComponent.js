import React from 'react';
import FormComponent from './FormComponent'

class CipherUIComponent extends React.Component {

    render() {
        return (
            <div class="ui text container" style={{paddingTop: '45px'}}>
                <div class="ui placeholder segment">
                    <h2 class="ui center aligned header">Caesar Cipher Tool</h2>
                    <FormComponent label1="Enter plaintext:" label2="Enter key:" note="use negative numbers to shift left" button="Encrypt!" />
                    <FormComponent label1="Enter ciphertext:" label2="Enter key:" note="." button="Decrypt!" />
                </div>
            </div>
        );
    };
};

export default CipherUIComponent;
