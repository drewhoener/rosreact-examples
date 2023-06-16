import {useSubscription, UseSubscriptionProps} from "rosreact";
import React from "react";
import {Int32} from "../typings";

export type ExampleProps = {
    topicProps: UseSubscriptionProps<Int32>;
}

export const ExampleComponent: React.FC<ExampleProps> = ({topicProps}) => {
    const message = useSubscription(topicProps);
    return <div>{message?.data}</div>;
};
