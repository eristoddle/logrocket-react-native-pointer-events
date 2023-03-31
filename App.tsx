import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Draggable from './src/components/Draggable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Draggable />
    </View>
  );
};

export default App;
