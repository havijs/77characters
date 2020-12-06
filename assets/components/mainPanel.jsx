import React, { useEffect, useState } from 'react';
import CreateSentencePanel from './createSentencePanel';
import SentencesPanel from './sentencesPanel';
import { getSentencesUrl } from '../requests';
import axois from 'axios';

export default () => {
    const [sentences, setsentences] = useState([]);
    const [refresh, setRefresh] = useState(true)
    useEffect(() => {
        axois.get(getSentencesUrl(1))
            .then(response => {
                const data = response.data;
                setsentences(data.map(sentence => sentence.content));
            })
            .catch(response => {
                console.log(response.data);
            }

            );
            setRefresh(false);
    }, [refresh]);
    return (
        <div>
            <CreateSentencePanel setSentences={setsentences} setRefresh={setRefresh}></CreateSentencePanel>
            <SentencesPanel sentences={sentences}></SentencesPanel>
        </div>
    );
}