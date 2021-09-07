import React, { useGlobal, resetGlobal, getGlobal } from 'reactn';
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [global, setGlobal] = useGlobal();
  const [loading, isLoading] = React.useState(true)

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken')
        setGlobal({
          userToken: userToken
        })
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    setTimeout(() => {
      isLoading(false)
      bootstrapAsync();
    }, 2000);

  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (username: any, password: any) => {
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
          })
          .catch(err => {
            Alert.alert('Perhatian', 'harap ini form dengan benar')
          })
      },
      signOut: async (): Promise<any> => {
        resetGlobal()
        await AsyncStorage.clear()
      },
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
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
        {getGlobal().userToken == null ? (
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