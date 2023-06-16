import { UseSubscriptionProps } from 'rosreact';

import { Int32 } from '../typings';

export const countTopicProps: UseSubscriptionProps<Int32> = {
  topic: '/rosbridgetest/count',
  messageType: 'std_msgs/Int32',
};

export const doubleCountTopicProps: UseSubscriptionProps<Int32> = {
  topic: '/rosbridgetest/doublecount',
  messageType: 'std_msgs/Int32',
};
