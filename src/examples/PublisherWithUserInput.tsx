import { useRef, useState } from 'react';
import {PublisherProps, RosConnection} from 'rosreact';

import {stringPubProps} from '../constants/topic-constants.ts';
import {ExamplePublisher} from "./ExamplePublisher.tsx";

export function PublisherWithUserInput() {
  const [topicProps, setTopicProps] = useState<PublisherProps>({
    ...stringPubProps,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const setTopicName = () => {
    const newName = inputRef.current?.value;
    // undefined and empty string
    if (!newName) {
      return;
    }
    setTopicProps(oldProps => ({
      ...oldProps,
      topic: newName,
    }));
  };

  return (
    <RosConnection url={'ws://127.0.0.1:9090'} autoConnect>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>
          Topic Name:&nbsp;
          <input ref={inputRef} defaultValue={stringPubProps.topic} type={'text'} />
        </label>
        <button onClick={() => setTopicName()}>Change Topic</button>
      </div>

      <ExamplePublisher topicProps={topicProps} />
    </RosConnection>
  );
}
