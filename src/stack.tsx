import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen, {IListItem} from './screens/list';
import {ThemeFont} from './components/typography';
import {Item} from './item';
import {NavigationContainer} from '@react-navigation/native';
export type RootStackParamList = {
  ListScreen: undefined;
  ItemScreen?: IListItem;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const Stack = () => {
  return (
    // To avoid the maximum stack exceed error
    <NavigationContainer>
    <RootStack.Navigator
      // initialRouteName="ListScreens"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleStyle: {
          fontSize: 16,
          ...(ThemeFont.medium as any),
        },
        contentStyle: {
          backgroundColor: '#eee',
        },
      }}
      >
      <RootStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{title: 'Items'}}
      />
      <RootStack.Screen
        name="ItemScreen"
        component={Item}
        options={{title: 'ItemScreen'}}
      />
    </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
