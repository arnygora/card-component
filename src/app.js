import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import { ViewPage } from "./components/ViewPage";

import './styles/styles.scss'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ViewPage/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"),
    () => console.log(`Поточний час: ${new Date().toLocaleTimeString()}`));
