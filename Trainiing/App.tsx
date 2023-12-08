
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

import Welcome from './Screens/welcomeScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AuthNav from './Screens/AuthNav'
import BottomNav from './Screens/BottomNav';



// const Stack = createNativeStackNavigator()

// const Tab = createBottomTabNavigator();



export default function App() {

  return (
   <>


   <NavigationContainer>
    
   
  <AuthNav />
   
  
   </NavigationContainer>
   </>
  );
  
}


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
 


  




