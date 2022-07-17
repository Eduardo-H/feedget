import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { List } from 'phosphor-react-native';

import Widget from './src/components/Widget';

import { theme } from './src/theme';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7}>
          <List size={40} color={theme.colors.stroke} />
        </TouchableOpacity>

        <View style={styles.headerItems}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.circle} />
        </View>
      </View>

      <StatusBar 
        style="light"
        backgroundColor="transparent"
        translucent
      />
      
      <Widget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getStatusBarHeight() + 20,
    paddingBottom: getBottomSpace() + 20,
    paddingHorizontal: 15,
    height: getStatusBarHeight() + 80,
    backgroundColor: theme.colors.surface_secondary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.surface_secondary_hover
  },
  headerItems: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  square: {
    height: 35,
    width: 35,
    backgroundColor: theme.colors.stroke,
    borderRadius: 8,
    marginRight: 10
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: theme.colors.stroke,
    borderRadius: 25
  }
});
