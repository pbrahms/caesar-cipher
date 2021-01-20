import React from 'react';
import ReactDOM from 'react-dom'
import CipherUIComponent from './CipherUIComponent';

class AppPageComponent extends React.Component {
  
    render()  {
        return (
            <CipherUIComponent />
        );
    };
};
  
ReactDOM.render(
    <AppPageComponent />,
    document.querySelector('#root')
);
