import React from 'react';
import {render} from 'react-dom';
import Root from './router';
import { createHistory, createHashHistory } from 'history';

render(<Root />, document.getElementById('root'));
