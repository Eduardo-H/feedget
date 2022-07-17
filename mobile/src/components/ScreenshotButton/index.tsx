import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ScreenshotProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ 
  screenshot,
  onTakeShot,
  onRemoveShot
}: ScreenshotProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.75}
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot 
        ? 
        <View>
          <Image
            style={styles.screenshot}
            source={{ uri: screenshot }}
          />

          <Trash size={22} color={theme.colors.text_secondary} weight="fill" style={styles.trashIcon} />
        </View>
        : <Camera size={22} color={theme.colors.text_primary} weight="bold" />
      }
    </TouchableOpacity>
  );
}