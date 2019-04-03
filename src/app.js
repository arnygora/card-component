import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import './styles/styles.scss'
import {RouterApp} from "./components/Router/Navigation";

ReactDOM.render(
    <BrowserRouter>
        <RouterApp/>
    </BrowserRouter>,
    document.getElementById("root"));
