import React from 'react';
import ReactDOM from 'react-dom';
import { GalleryApp } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GalleryApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
