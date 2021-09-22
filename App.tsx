import React, { useGlobal } from 'reactn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//context
// import { AuthContext } from './src/contexts/Contexts';

//screen
import SplashScreen from './src/screens/SplashScreen';
import { HomeScreen } from './src/screens/user/HomeScreen';

// icon
import HomeIcon from './icon/home.svg';
import apiCall from './utils/apiCall';
import { Alert } from 'react-native';
import SignInScreen from './src/screens/auth/SignInScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RegisterScreen from './pages/auth/RegisterScreen';
import ConfirmScreen from './src/screens/auth/ConfirmScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeIcon height={30} width={30} fill={color} />
          ),
        }} />
      <Tab.Screen
        name="SettingsStack"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <HomeIcon height={30} width={30} fill={color} />
          ),
        }} />
    </Tab.Navigator>
  )
}

const App = () => {
  const [global, setGlobal] = useGlobal();

  React.useEffect(() => {
    setGlobal({
      userToken: undefined,
      errors: {}
    })

    const bootstrapAsync = async () => {
      console.log('token: ' + global.userToken);
    }

    setTimeout(() => {

      bootstrapAsync()
    }, 2000);

  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_left'
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Confirm" component={ConfirmScreen} />
          <Stack.Screen name="App" component={HomeTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App