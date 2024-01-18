import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import test from './screens/test';
import main from './screens/main';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="test" component={test} />
        <Stack.Screen name="main" component={main} />
      </Stack.Navigator>
    </NavigationContainer>
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
