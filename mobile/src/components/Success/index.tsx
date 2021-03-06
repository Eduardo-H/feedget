import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface SuccessProps {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>
        Thanks for the feedback!
      </Text>

      <TouchableOpacity 
        activeOpacity={0.75} 
        onPress={onSendAnotherFeedback}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Send another feedback
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}