import React from 'react';
import FormComponent from './FormComponent'

class CipherUIComponent extends React.Component {

    render() {
        return (
            <div class="ui text container" style={{paddingTop: '45px'}}>
                <div class="ui placeholder segment">
                    <h2 class="ui center aligned header">Caesar Cipher Tool</h2>
                    <FormComponent formType="encrypt" />
                    <FormComponent formType="decrypt" />
                </div>
            </div>
        );
    };
};

export default CipherUIComponent;
