import React, { useState } from 'react';
import Input from './input';
import Submit from './submit';
import axios from 'axios';
import { createSentenceUrl } from '../requests';


export default (props) => {
    const [inputData, setInputData] = useState('');

    function inputOnChange(event) {
        setInputData(event.target.value)
    }

    function submit() {
        axios.post(createSentenceUrl(), { content: inputData })
            .then(
                () => { 
                    props.setRefresh(); 
                    setInputData('');
                }
            ).catch(
                response => { console.log(response); }
            );
    }
    return (
        <>
            <Input value={inputData} onChange={inputOnChange}></Input>
            <Submit onClick={submit}></Submit>
        </>
    );
}

