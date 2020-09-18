import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import login from '../pages/login/login';
import FindId from '../pages/login/FindId';
import FindPw from '../pages/login/FindPw';
import Join from '../pages/login/Join';
import Main from '../pages/main/Main';

const Stack = createStackNavigator();

function AppNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="Join" component={Join} />
      <Stack.Screen name="FindId" component={FindId} />
      <Stack.Screen name="FindPw" component={FindPw} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
