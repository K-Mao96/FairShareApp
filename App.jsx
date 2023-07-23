import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import ReimbursementListScreen from './src/screens/ReimbursementListScreen';
import ReimbursementCreateScreen from './src/screens/ReimbursementCreateScreen';
import SettingScreen from './src/screens/SettingScreen';
import OthersSettingScreen from './src/screens/OthersSettingScreen';
import DeleteDialog from './src/components/DeleteDialog';
import AccountCreateScreen from './src/screens/AccountCreateScreen';
import WalletCreateScreen from './src/screens/WalletCreateScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="WalletCreate"
    //     screenOptions={{
    //       headerStyle: { backgroundColor: '#467fd3' },
    //       headerTitleStyle: { color: '#fff' },
    //       headerTitle: 'Memo App',
    //       headerTintColor: '#fff',
    //       headerBackTitle: 'Back',
    //       cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    //       gestureEnabled: true,
    //       gestureDirection: 'horizontal',
    //     }}
    //   >

    //     {/* 割り勘アプリ */}
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="ReimbursementList" component={ReimbursementListScreen} />
    //     <Stack.Screen name="ReimbursementCreate" component={ReimbursementCreateScreen} />
    //     <Stack.Screen name="Setting" component={SettingScreen} />
    //     <Stack.Screen name="OthersSetting" component={OthersSettingScreen} />
    //     <Stack.Screen name="DeleteDialog" component={DeleteDialog} />
    //     <Stack.Screen name="AccountCreate" component={AccountCreateScreen} />
    //     <Stack.Screen name="WalletCreate" component={WalletCreateScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => {
              <Ionicons name="home" color={color} size={size} />
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => {
              <Ionicons name="settings" color={color} size={size} />
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
