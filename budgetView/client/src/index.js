// Application entrypoint

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Guard from "./global_components/Guard"

ReactDOM.render(<App />, document.getElementById("react-root"));
