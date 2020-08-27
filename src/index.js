import React from 'react';
import {render} from 'react-dom';
import {Root} from './components/Root';
import "isomorphic-fetch";
import "./styles/style.sass";

render(<Root />, document.getElementsByTagName('body')[0]);