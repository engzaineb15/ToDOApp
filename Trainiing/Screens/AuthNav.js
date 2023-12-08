
import * as React from 'react';
import {
  View,
  ImageBackground,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import color from '../constant/color';

import BottomNav from '../Screens/BottomNav'
import Calendar from '../Screens/Calendar'

import Welcome from '../Screens/welcomeScreen'
import SingUP from '../Screens/SingUP'
import login from '../Screens/lognin'
import Dashboard from '../Screens/Dashboard'
// import { Calendar } from 'react-native-calendars';
// // import Calendar from '../Screens/Calendar'
// import mytasks from '../Screens/mytasks'


const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator();


function AuthNavigator(){

  return(
   
   <Stack.Navigator
   screenOptions={
    {
      headerShown: false, 
    }
    
  }
  initialRouteName='SingUP'
   
   >
     {/* <Stack.Screen name="Welcome" component={Welcome}/> */}
     <Stack.Screen name="SingUP" component={SingUP}/>
     <Stack.Screen name="login" component={login}/>
     <Stack.Screen name="Dashboard" component={Dashboard}/>
     
     <Stack.Screen name="Calender" component={Calendar}/>  

    <Stack.Screen name="mytasks" component={BottomNav}/>


     
   </Stack.Navigator>
  
  )
}

export default AuthNavigator;




// <Tab.Navigator
    
//     screenOptions={{
//      headerShown: false,
     
//      tabBarStyle: {
//        backgroundColor: color.Accent 
     
//      },
//      tabBarInactiveTintColor: '#fff',
//    //  tabBarActiveTintColor: 'yellow',
//    }}
//    initialRouteName='splash'
//     >
     
//            <Tab.Screen 
//         name='MY Tasks'
//          component={mytasks}
        
//          options={({route}) => ({
 
//            tabBarStyle: {
//          //    display: getTabBarVisibility(route),
//              backgroundColor: color.Accent,
//            },
 
//            tabBarIcon: ({color, size}) => (
//              <Icon name="list" size={size} color={color}/>
//            ),
//          })
       
//        }
//         />
 
//  <Tab.Screen 
//         name='Calendar'
//          component={Calendar}
        
//          options={({route}) => ({
 
//            tabBarStyle: {
//          ///  display: getTabBarVisibility(route),
//              backgroundColor: color.Accent,
//            },
 
//            tabBarIcon: ({color, size}) => (
//              <Icon name="calendar" size={size} color={color}/>
//            ),
//          })
//        }
//         />
 
//  {/* <Tab.Screen 
//         name=''
//          component={offers}
        
//          options={({route}) => ({
 
//            tabBarStyle: {
//          //    display: getTabBarVisibility(route),
//              backgroundColor: '#AD40AF',
//            },
 
//            tabBarIcon: ({color, size}) => (
//              <Icon name="percent" size={size} color={color}/>
//            ),
//          })}
        
//         /> */}
   
 
//        </Tab.Navigator> 
 


  




