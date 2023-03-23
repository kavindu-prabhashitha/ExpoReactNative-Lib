import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/home";
import About from '../screens/about';

const Drawer = createDrawerNavigator();

 export default function RootAppGrawer(){
    return(
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
 }