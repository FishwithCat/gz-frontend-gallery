import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GalleryApp } from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

(window as any).renderGalleryApp = (containerId: string, history: History) => {
    console.log('>>> Mount gallery app')
    ReactDOM.render(
        <GalleryApp history={history} />,
        document.getElementById(containerId)!
    )
}

(window as any).unmountGalleryApp = (containerId: string) => {
    console.log('>>> Unmount gallery app')
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId)!)
}


serviceWorker.unregister();
