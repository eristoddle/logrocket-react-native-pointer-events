import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './src/components/Dropdown';

export default function App() {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];

  return (
    <View style={styles.container}>
      {!!selected && (
        <Text>
          Selected: label = {selected.label} and value = {selected.value}
        </Text>
      )}
      <Dropdown label={'Select Item'} data={data} onSelect={setSelected} />
      <Text>This is the rest of the form.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
