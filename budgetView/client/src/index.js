// Application entrypoint

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Guard from "./global_components/Guard"
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Guard><Router><App /></Router></Guard>, document.getElementById("react-root"));
