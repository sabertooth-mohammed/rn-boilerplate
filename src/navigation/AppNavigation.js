import React from 'react';
import {NavigationContainer , createSwitchNavigator} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack ';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { color } from 'src/config/color';
import Login from 'src/screens/login/login';
import Dashboard from 'src/screens/dashboard/dashboard';
import SelectStudent from "src/screens/selectstudent/selectstudent";
import Homework from 'src/screens/homework/homework';
import Circular from 'src/screens/circular/circular';
import Notification from 'src/screens/notification/notification';
import Payment from 'src/screens/payment/payment';
import Holiday from 'src/screens/holiday/holiday';
import Marks from 'src/screens/marks/marks';

import Monday from 'src/screens/timetable/Monday';
import Gallery from 'src/screens/gallery/gallery';

import {HeaderRight} from 'src/components/Header'
import Leaves from 'src/screens/leaves/leaves';
import Attendance from 'src/screens/attendance/attendance';
import ApplyLeaves from 'src/screens/leaves/applyleaves';

const TimetableTabScreen = createMaterialTopTabNavigator(
  {
    Monday: { screen: Monday },
    Tuesday: { screen: Monday },
    Wednesday: { screen: Monday },
    Thursday: { screen: Monday },
    Friday: { screen: Monday },
    Saturday: { screen: Monday },
  },
  {
    lazy:true,
    swipeEnabled: true,
    animationEnabled: true,
    navigationOptions:{
      title:'TIMETABLE',
      headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    },
    tabBarOptions: {
      scrollEnabled:true,
      style: {
        backgroundColor: color.primary,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
    },
  }
);

const LeavesTabScreen = createMaterialTopTabNavigator(
  {
    Leaves: { screen: Leaves },
    Apply:{screen:ApplyLeaves,navigationOptions:{
      title:'Apply Leaves'
    }}
  },
  {
    lazy:true,
    swipeEnabled: true,
    animationEnabled: true,
    navigationOptions:{
      title:'LEAVES',
      headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    },
    tabBarOptions: {
      scrollEnabled:true,
      style: {
        borderColor: 'transparent',
        backgroundColor: color.primary,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
    },
  }
);

const Stack = createStackNavigator();


const AppNavigation = createStackNavigator(
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ 
            headerTintColor: 'black',
            headerTitleStyle: {fontWeight: 'bold',color: 'black'},}}
        >
          <Stack.Screen
            name="Home"
            component={Login}
            options={{ title: 'Login' }}
          />
        </Stack.Navigator>
      
);


const AuthAppStack = createStackNavigator(
    <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ 
            headerStyle: {
                height:70,
                backgroundColor: color.primary,
                elevation:0,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }}
    >
         <Stack.Screen
            name="SelectStudent"
            component={SelectStudent}
            options={{ title: 'Login', }}
            screenOptions={{ header:null }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: 'Dashboard', }}
          />
          <Stack.Screen
            name="Homework"
            component={Homework}
            options={{ title: 'Homework', }}
          />
          <Stack.Screen
            name="Circular"
            component={Circular}
            options={{ title: 'Circular', }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ title: 'Notification', }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ title: 'Payment', }}
          />
          <Stack.Screen
            name="Holiday"
            component={Holiday}
            options={{ title: 'Holiday', }}
          />
           <Stack.Screen
            name="Holiday"
            component={Holiday}
            options={{ title: 'Holiday', }}
          />
           <Stack.Screen
            name="Marks"
            component={Marks}
            options={{ title: 'Marks', }}
          />
           <Stack.Screen
            name="Timetable"
            component={TimetableTabScreen}
            options={{ title: 'TimetableTabScreen', }}
          />
          <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={{ title: 'Gallery', }}
          />
          <Stack.Screen
            name="Leaves"
            component={LeavesTabScreen}
            options={{ title: 'LeavesTabScreen', }}
          />
           <Stack.Screen
            name="Attendance"
            component={Attendance}
            options={{ title: 'Attendance', }}
          />

    </Stack.Navigator>

);

const AuthDrawerNavigation = createDrawerNavigator(
    <Drawer.Navigator
        drawerType={{
            hideStatusBar: false,
            // contentComponent: SideMenu,
            drawerWidth: 300,
            drawerBackgroundColor: 'rgba(255,255,255,.9)',
            overlayColor: '#6b52ae',
            contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
            },
        }}
    >
        <Drawer.Screen name="Home" component={AuthAppStack} />
    </Drawer.Navigator>

  
);

export default NavigationContainer (
  createSwitchNavigator(
    {
      App: AppNavigation,
      Auth: AuthDrawerNavigation,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
