/* @refresh reload */
import {render} from 'solid-js/web'

import './index.css';
import { App } from './App';

const root = document.getElementById('root');
if (!root) {
    throw new Error('Can not find app root')
}

render(() => <App />, root);
