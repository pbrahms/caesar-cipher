import React from 'react';
import FormComponent from './FormComponent'

class CipherUIComponent extends React.Component {

    render() {
        return (
            <div class="ui text container">
                <div class="ui placeholder segment">
                    <h2 class="ui center aligned header">Caesar Cipher Tool</h2>
                    <FormComponent />
                    <FormComponent />
                </div>
            </div>
        );
    };
};

export default CipherUIComponent;
