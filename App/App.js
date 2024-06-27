import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Location from './components/Location';
import InfoScreen from './components/InfoScreen';
import AIScreen from './components/AIScreen'
import Settings from './components/Settings';
import PosterScreen from './components/PosterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  
  function Information() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
      }}>
        <Tab.Screen
          name="Select Location"
          component={Location}
        />
        <Tab.Screen
          name="Info"
          component={InfoScreen}
        />
        <Tab.Screen
          name="Poster"
          component={PosterScreen}
        />
        <Tab.Screen
          name="Analyze Item"
          component={AIScreen}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
      }}>
        <Stack.Screen
          name="Select Location"
          component={Location}
        />
        <Stack.Screen
          name="Information"
          component={Information}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}