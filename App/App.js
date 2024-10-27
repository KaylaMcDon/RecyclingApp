import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Location from './components/Location';
import InfoScreen from './components/InfoScreen';
import Settings from './components/Settings';
import PosterScreen from './components/PosterScreen';
import { Feather } from '@expo/vector-icons';
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true)
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  
  function Information() {
    return (
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Info') {
            iconName = "info"
          } else if (route.name === 'Select Location') {
            iconName = "map"
          } else if (route.name === 'Poster') {
            iconName = "image"
          } else if (route.name === 'Analyze Item') {
            iconName = "camera"
          } else if (route.name === 'Settings') {
            iconName = "settings"
          } else {
            iconName = "info"
          }
          return(<Feather name={iconName} size={24} color={"black"}/>)
          },
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' }
          })}>
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