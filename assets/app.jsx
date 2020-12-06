import './styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CreateSentencePanel from './components/createSentencePanel';

const App = () => {
    return (
        <div>
            <CreateSentencePanel></CreateSentencePanel>
        </div>
    );
}


const domContainer = document.querySelector('#root');
ReactDOM.render(App(), domContainer)

console.log('Hello Webpack Encore! Edit me in assets/app.js');
