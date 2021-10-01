import React, { useGlobal } from 'reactn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//screen
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/auth/SignInScreen';
import RegisterScreen from './pages/auth/RegisterScreen';
import ConfirmScreen from './src/screens/auth/ConfirmScreen';
import { HomeScreen } from './src/screens/user/HomeScreen';

// icon
import HomeIcon from './icon/home.svg';

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
  const [global, setGlobal] = useGlobal()

  setGlobal({
    errors: {}
  })
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
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