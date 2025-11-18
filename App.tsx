import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types/navigation';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomNavigationBar from './components/CustomNavigationBar';

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='SecondScreen' component={SecondScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}