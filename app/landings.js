import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './containers/Landing';

let id = window.location.pathname.split("/landings/");

ReactDOM.render(<Landing id={id}/>, document.getElementById('content'));