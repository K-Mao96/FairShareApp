import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

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

// フッターメニューのアイコン切り替え処理
const getTabBarIcon = ({ route, size, color }) => {
  let iconName;
  if (route.name === 'トップ') {
    iconName = 'money';
  } else if (route.name === '立て替えリスト') {
    iconName = 'list';
  } else if (route.name === '設定') {
    iconName = 'settings';
  }
  return <MaterialIcons name={iconName} size={size} color={color} />;
};

// 設定画面のroutingを定義
function SettingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
    >
      {/* 設定画面 */}
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
      />
      {/* 詳細設定画面 */}
      <Stack.Screen
        name="OthersSetting"
        component={OthersSettingScreen}
      />
      {/* サイフ作成画面 */}
      <Stack.Screen
        name="WalletCreate"
        component={WalletCreateScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => getTabBarIcon({ route, color, size }),
        })}
        tabBarOptions={{
          activeTintColor: '#4946D1',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="トップ" component={HomeScreen} />
        <Tab.Screen name="立て替えリスト" component={ReimbursementListScreen} />
        <Tab.Screen name="設定" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
