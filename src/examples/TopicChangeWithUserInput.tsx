import {useRef, useState} from "react";
import {RosConnection, UseSubscriptionProps} from "rosreact";
import {ExampleComponent} from "./ExampleComponent.tsx";
import {Int32} from "../typings";
import {countTopicProps} from "../constants/topic-constants.ts";

export function TopicChangeWithUserInput() {

    const [topicProps, setTopicProps] = useState<UseSubscriptionProps<Int32>>({...countTopicProps});
    const inputRef = useRef<HTMLInputElement>(null);

    const setTopicName = () => {
        const newName = inputRef.current?.value;
        // undefined and empty string
        if (!newName) {
            return;
        }
        setTopicProps(oldProps => ({
            ...oldProps,
            topic: newName
        }));
    }

    return (
        <RosConnection url={'ws://127.0.0.1:9090'} autoConnect>
            <div style={{display: "flex", flexDirection: 'column', gap: '0.5rem'}}>
                <label>
                    Topic Name:&nbsp;
                    <input ref={inputRef} defaultValue={countTopicProps.topic} type={'text'}/>
                </label>
                <button onClick={() => setTopicName()}>Change Topic</button>
            </div>
            <ExampleComponent topicProps={topicProps}/>
        </RosConnection>
    )
}
