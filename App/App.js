//Added for stack navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
//Add the screens
import Location from './components/Location';
import InfoScreen from './components/InfoScreen';
import AIScreen from './components/AIScreen'
import Settings from './components/Settings';
//Icons for tab navigation


//import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

      function FullApp() {
        return (
          <Tab.Navigator screenOptions={{
            headerStyle: { elevation: 0, backgroundColor: "#2d61fc", },
            headerTitleAlign: "center",
            headerTintColor: "white",
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
                name="AIScreen"
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
              headerStyle: { elevation: 0, backgroundColor: "#2d61fc", },
              headerTitleAlign: "center",
              headerTintColor: "white",
              cardStyle: { backgroundColor: '#fff' }
            }}>
<<<<<<< HEAD
                <Stack.Screen
                  name="Select Location"
                  component={Location}
                />
                <Stack.Screen
                  name="FullApp"
                  component={FullApp}
                />
          </Stack.Navigator>
=======
              <Tab.Screen
                  name="Select Location"
                  component={Location}
              />
              <Tab.Screen
                  name="Info"
                  component={InfoScreen}
              />
              <Tab.Screen
                  name="AIScreen"
                  component={AIScreen}
              />
          </Tab.Navigator>
>>>>>>> 50ac0fa42b7c45d7cd97ce1429d2a914ddb66bd1
      </NavigationContainer>
  )
}