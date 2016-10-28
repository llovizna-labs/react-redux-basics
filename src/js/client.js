import React from "react";
import {render}  from "react-dom";
import {Layout} from "./components/Layout";

import {Provider} from 'react-redux';

import store from './store';


const app = document.getElementById('app');

render( <Provider store={store} >
      < Layout / >
  </Provider> , app);
