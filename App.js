import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import useAuth from './src/hooks/useAuth'
import LoginScreen from './src/screens/LoginScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Landing() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Detail' component={DetailScreen} />
    </Tab.Navigator>
  )
}

function App() {
  const { isAuthenticated } = useAuth()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name='Home'
            options={{ headerShown: false }}
            component={Landing}
          />
        ) : (
          <Stack.Screen
            name='Login'
            options={{ headerShown: false }}
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
