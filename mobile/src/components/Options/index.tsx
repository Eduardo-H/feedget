import React from 'react';
import { Text, View } from 'react-native';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { FeedbackType } from '../Widget';

import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { styles } from './styles';

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Give a feedback
      </Text>

      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option
              key={value.title}
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          ))
        }
      </View>

      <Copyright />
    </View>
  );
}