// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import Home from './Pages/Home';
// import Login from './Pages/Login';
// export default function App() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View  style={{
//         flex:1,
//         backgroundColor:"#ffff"
//       }} >
//         <Login/>
//       </View>
//     );
//   }

//   return (
//     <View  style={{
//       flex:1,
//       backgroundColor:"#ffff"
//     }}>
//       <Home user={user.email}/>
      
//     </View>
//   );
// }


import React, {useState, useEffect} from 'react';
import {Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Chat from './Pages/Chat';
import Login from './Pages/Login';

export default function App() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const Stack = createStackNavigator();


    if (initializing) return null;

    if (!user) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Login}/>
                </Stack.Navigator>
            </NavigationContainer>
        );

    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Chat} options={({navigation, route}) => ({

                    headerRight: props => <Button title="signout" onPress={() => auth().signOut()}/>

                })}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}