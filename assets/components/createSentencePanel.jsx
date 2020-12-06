import React from 'react';
import Input from './input';
import Submit from './submit';

export default () => {
    return (
        <>
            <Input></Input>
            <Submit onClick={submit}></Submit>
        </>
    );
}

function submit() {
    console.log('hii');
}