import React from 'react';
import {render} from 'react-dom';
import Properties from './src/dashboard/components/properties';
//import Modal from './src/dashboard/components/modal';
import 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';
import data from './src/api.json';

const app = document.getElementById('app')

render(<Properties data={data}/>,app);