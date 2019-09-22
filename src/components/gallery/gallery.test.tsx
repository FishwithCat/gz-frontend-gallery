import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './index';

it ('gallery can render without crashing', () => {
    const div =  document.createElement('div')
    ReactDOM.render(<Gallery cards={[]} colNum={1} />, div)
    ReactDOM.unmountComponentAtNode(div);
})