import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let Container = App;

ReactDOM.render( <Container />, document.getElementById( 'root' ) );
registerServiceWorker();
