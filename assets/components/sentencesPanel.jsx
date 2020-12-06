import React from 'react';
import Sentence from './sentence';

export default (props) => {
    const listItems = props.sentences.map((sentence, index) => {
        return <Sentence value={sentence} key={index}></Sentence>
    });
    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}