import './styles/app.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './components/mainPanel';

const App = () => {
    return (<MainPanel></MainPanel>);
}


const domContainer = document.querySelector('#root');
ReactDOM.render(App(), domContainer)

console.log('Hello Webpack Encore! Edit me in assets/app.js');
