// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("react-root"));