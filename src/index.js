import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TreeView from './TreeView';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(<TreeView />, document.getElementById('root'));
registerServiceWorker();
