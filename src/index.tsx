import { Provider } from '@adapters';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const domRootNode = document.getElementById('root');

if (!domRootNode) {
    throw new Error('You need to place the root node with id "root" first!');
}

const appNode: React.ReactNode = (
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
);

const rootNode = ReactDOM.createRoot(domRootNode);
rootNode.render(appNode);