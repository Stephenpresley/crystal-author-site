import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './App';
import AxiosProvider from './providers/AxiosProvider'

ReactDOM.render(
    <BrowserRouter>
        <AxiosProvider>
            <App />
        </AxiosProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);
