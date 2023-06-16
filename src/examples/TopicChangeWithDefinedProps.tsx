import {useState} from "react";
import {RosConnection, UseSubscriptionProps} from "rosreact";
import {Int32} from "../typings";
import {countTopicProps, doubleCountTopicProps} from "../constants/topic-constants.ts";
import {ExampleComponent} from "./ExampleComponent.tsx";

export function TopicChangeWithDefinedProps() {

    const [topicProps, setTopicProps] = useState<UseSubscriptionProps<Int32>>(countTopicProps);

    const changeTopic = (state: boolean) => {
        if (state) {
            console.log(`Changing topic props to doubles`);
            setTopicProps(doubleCountTopicProps);
        } else {
            console.log(`Changing topic props to singles`);
            setTopicProps(countTopicProps);
        }
    }

    return (
        <RosConnection url={'ws://127.0.0.1:9090'} autoConnect>
            <label>
                Use Double Count
                <input type={"checkbox"} defaultChecked={false} onChange={e => changeTopic(e.target.checked)} />
            </label>
            <ExampleComponent topicProps={topicProps}/>
        </RosConnection>
    )
}
