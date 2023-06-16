import {useState} from 'react';
import {RosConnection} from "rosreact";
import {countTopicProps} from "../constants/topic-constants.ts";
import {ExampleComponent} from "./ExampleComponent.tsx";

export function ConnectionChanger() {

    const [url, setURL] = useState('ws://127.0.0.1:9090');

    const changeURL = (state: boolean) => {
        if (state) {
            setURL('ws://127.0.0.1:9090');
        } else {
            setURL('ws://127.0.0.1:9091');
        }
    }

    return (
        <RosConnection url={url} autoConnect>
            <label>
                URL Toggle
                <input type={"checkbox"} defaultChecked={true} onChange={e => changeURL(e.target.checked)} />
            </label>
            <ExampleComponent topicProps={countTopicProps}/>
        </RosConnection>
    )
}
