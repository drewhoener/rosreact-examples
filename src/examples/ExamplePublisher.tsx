import React, {useState} from 'react';
import {PublisherProps, usePublisher} from 'rosreact';

import {RosString} from '../typings';

export type ExamplePubProps = {
    topicProps: PublisherProps;
    auto?: boolean;
};

export const ExamplePublisher: React.FC<ExamplePubProps> = ({topicProps, auto}) => {
    const [msg, setMsg] = useState('');
    const [data, setData] = useState<RosString>({data: msg});
    const {publish} = usePublisher<RosString>(topicProps, auto ? data : undefined);

    const onClick = () => {
        if(auto) {
            setData({data: msg});
        } else {
            publish({data: msg});
        }
    }

    return <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <label>
            Message:&nbsp;
            <input value={msg} onChange={e => setMsg(e.target.value)} type={'text'}/>
        </label>
        <button onClick={() => onClick()}>Send</button>
    </div>;
};
