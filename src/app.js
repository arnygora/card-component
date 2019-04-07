import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ViewPage} from "./components/ViewPage";

import './styles/styles.scss'

ReactDOM.render(
    <BrowserRouter>
        <ViewPage/>
    </BrowserRouter>,
    document.getElementById("root"),
    () => console.log(`Поточний час: ${new Date().toLocaleTimeString()}`));
