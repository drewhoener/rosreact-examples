import {PublisherProps, UseSubscriptionProps} from 'rosreact';

import { Int32 } from '../typings';

export const countTopicProps: UseSubscriptionProps<Int32> = {
  topic: '/bridgetest/pub/count',
  messageType: 'std_msgs/Int32',
};

export const doubleCountTopicProps: UseSubscriptionProps<Int32> = {
  topic: '/bridgetest/pub/doublecount',
  messageType: 'std_msgs/Int32',
};

export const stringPubProps: PublisherProps = {
  topic: '/rosbridgetest/sub/string',
  messageType: 'std_msgs/String',
};
