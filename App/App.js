//Added for stack navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native"
//Add the screens
import Location from './components/Location';
import InfoScreen from './components/InfoScreen';
import AIScreen from './components/AIScreen'
//Icons for tab navigation


//import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
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
          </Tab.Navigator>
      </NavigationContainer>
  );
}