import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOMClient.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <SSRProvider>
                <App />
            </SSRProvider>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
