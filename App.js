import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem/index'

export default function App() {
  return (
    <View style={styles.container}>
        
        <CarItem 
        name={"Santa Ana"}
        tagline={"Order online for"}
        taglineCTA= {"Touchless Delivery"}
        image={require('./assets/images/ModelX.jpeg')}
        />

      <StatusBar style="auto" content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
