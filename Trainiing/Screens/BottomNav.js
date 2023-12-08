
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


import {plus} from '../constant/image';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import color from '../constant/color';

// import Welcome from '../Screens/welcomeScreen'
// import SingUP from '../Screens/SingUP'
// import login from '../Screens/lognin'
// import Dashboard from '../Screens/Dashboard'
import Calendar from '../Screens/Calendar'
import mytasks from '../Screens/mytasks'

import AuthNav from '../Screens/AuthNav'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();

function EmptyScreen(){
  return(
    <View
    style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}
    >

    </View>
  )
}



function BottomNav() {

  return (
   <>

 
 <Tab.Navigator
    
    screenOptions={{
     headerShown: false,   
    //  tabBarStyle: {
    //    backgroundColor: "#f0f" 
    //    na
    //  },
    //  tabBarInactiveTintColor: '#fff',
     tabBarActiveTintColor: color.Accent,
   }}
   
   
  // initialRouteName='splash'
    >
  
           <Tab.Screen 
        name='mytasks'
         component={mytasks}
        
         options={({route}) => ({
          tabBarLabel: '',
           tabBarStyle: {
         //    display: getTabBarVisibility(route),
         backgroundColor: "#ffff" ,
         
           },
 
           tabBarIcon: ({color, size}) => (
             <Icon name="list" size={size} color={color}/>
           ),
         })
       
       }/>

<Tab.Screen 
        name='add'
         component={EmptyScreen}
        
         options={({route}) => ({
          tabBarLabel: '',
           tabBarStyle: {
         //    display: getTabBarVisibility(route),
         backgroundColor: "#ffff" ,

           },
          
           tabBarIcon: ({focused}) => (
            
             <TouchableOpacity>
              <View
              style={{
                // width:55,
                // height:55,
               // backgroundColor:"#0f0",
                borderRadius:"50%",
                justifyContent:"center",
                alignItems:"center",
                marginBottom:30
              }}
              >
              <Image
                          source={plus}
                          style={{
                            width: 50,
                            height: 50,
    
                          }} />
              </View>

             </TouchableOpacity>
           ),
         })
       
       }/>

 
 <Tab.Screen 
        name='Calendar'
        component={Calendar}
        
         options={({route}) => ({
          tabBarLabel: '',
           tabBarStyle: {
         ///  display: getTabBarVisibility(route),
         backgroundColor: "#ffff", 
        
           },
         //  tabBarInactiveTintColor: '#fff',
 
           tabBarIcon: ({color, size}) => (
             <Icon name="calendar" size={size} color={color}/>
           ),
         })
       }
        />






       </Tab.Navigator> 


       
  
   </>
  );
  
}

export default BottomNav;


 
 


  




