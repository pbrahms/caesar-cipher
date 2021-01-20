import React from 'react';
import ReactDOM from 'react-dom'
import CipherUIComponent from './CipherUIComponent';

class AppPageComponent extends React.Component {
  
    render()  {
        return (
            <div class="ui container">
                <CipherUIComponent />
            </div>
        );
    };
};
  
ReactDOM.render(
    <AppPageComponent />,
    document.querySelector('#root')
);
