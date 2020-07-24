import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './client/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
