//Added for stack navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native"
//Add the screens
import Location from './components/Location';
import InfoScreen from './components/InfoScreen';
import AIScreen from './App/components/AIScreen'
//Icons for tab navigation


//import { Feather } from '@expo/vector-icons';


import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator initialRouteName='AIScreen'>
              <Tab.Screen
                  name="Info"
                  component={InfoScreen}
              />
              <Tab.Screen
                  name="Select Location"
                  component={Location}
              />
              <Tab.Screen
                  name="AIScreen"
                  component={AIScreen}
              />
          </Tab.Navigator>
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
