//Added for stack navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"
//Add the screens
import Location from './components/Location';
import InfoScreen from './components/InfoScreen';


import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerStyle: { elevation: 0, backgroundColor: "#2d61fc", },
              headerTitleAlign: "center",
              headerTintColor: "white",
              cardStyle: { backgroundColor: '#fff' }
            }}
            initialRouteName='Select Location'>
              <Stack.Screen
                  name="Info"
                  component={InfoScreen}
              />
              <Stack.Screen
                  name="Select Location"
                  component={Location}
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
