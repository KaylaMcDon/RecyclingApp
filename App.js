//Added for stack navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"
//Add the screens
import location from './components/location';
import infoScreen from './components/infoScreen';


import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='location'>
              <Stack.Screen
                  name="Info"
                  component={infoScreen}
              />
              <Stack.Screen
                  name="location"
                  component={location}
              />
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
