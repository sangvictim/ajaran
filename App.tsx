import React, { useGlobal, resetGlobal } from 'reactn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './src/screens/auth/AuthStack';

//context
import { AuthContext } from './src/contexts/Contexts';

//screen
import SplashScreen from './src/screens/SplashScreen';
import { HomeScreen } from './src/screens/user/HomeScreen';

// icon
import HomeIcon from './icon/home.svg';
import apiCall from './utils/apiCall';
import { Alert } from 'react-native';
import axios from 'axios';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [global, setGlobal] = useGlobal();
  const [loading, isLoading] = React.useState(true)
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken')
        console.log('token: ' + userToken);

      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    setTimeout(() => {
      isLoading(false)
      bootstrapAsync();
    }, 2000);

  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (username: any, password: any) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token


        let data = {
          'login': username,
          'password': password,
        }
        await apiCall('POST', 'auth/login', data)
          .then(res => {
            const userToken = AsyncStorage.setItem('userToken', res.data.access_token)
            setGlobal({
              userToken: res.data.access_token
            })
            dispatch({ type: 'SIGN_IN', token: userToken });
          })
          .catch(err => {
            Alert.alert('Perhatian', 'harap langkapi form brikut')
          })


      },
      signOut: async (): Promise<any> => {
        resetGlobal()
        await AsyncStorage.clear()
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  if (loading) {
    return (
      <SplashScreen />
    )
  }

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        {state.userToken == null ? (
          <AuthStack />
        ) : (
          <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
              tabBarShowLabel: false,
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
        )}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

export default App