//Added for stack navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"
//Add the screens
import Location from './components/Location';
import InfoScreen from './components/InfoScreen';
import AIScreen from './components/AIScreen'


import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='AIScreen'>
              <Stack.Screen
                  name="Info"
                  component={InfoScreen}
              />
              <Stack.Screen
                  name="Select Location"
                  component={Location}
              />
              <Stack.Screen
                  name="AIScreen"
                  component={AIScreen}
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
