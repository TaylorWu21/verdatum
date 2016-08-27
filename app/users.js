import React from 'react';
import ReactDOM from 'react-dom';
import UserPage from './containers/UserPage'

let id = window.location.pathname.split("/users/")[1];

ReactDOM.render(<UserPage id={id} />, document.getElementById('content'));