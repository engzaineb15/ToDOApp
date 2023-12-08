// import React, { useState, useEffect } from 'react';
// import React, {useState} from 'react';
// import { View, Text,Button } from 'react-native';
// import auth from '@react-native-firebase/auth';


// function doLogin(email, password) {
//   auth().signInWithEmailAndPassword(email, password)
//       .catch(error => {
//           auth().createUserWithEmailAndPassword(email, password)
//               .then(() => {
//                   alert('account created')
//               }).catch(error => {
//               console.error(error);
//           });
//       });
// }


// export default function login() {
    
//     const [email, setEmail] = React.useState('hosam.zewain@gmail.com');
//     const [password, setPassword] = React.useState('123456');
    


//     return(
//         <>
//         <View>
//             {/* <Text 
//             style={{
//                 color:"#00f"
//             }}>login Page </Text>
//             {loginFun()} */}

//              <View>
//             <Text style={{textAlign: 'center', paddingVertical: 20}}>Please login</Text>
//             <View style={{padding: 10}}>
//                 <TextInput
//                     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//                     onChangeText={text => setEmail(text)}
//                     value={email}

//                 />
//                 <TextInput
//                     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//                     onChangeText={text => setPassword(text)}
//                     value={password}
//                     secureTextEntry={true}
//                 />

//                 <Button
//                     title="Login"
//                     onPress={() => {
//                         doLogin(email, password)
//                     }}
//                 />
//             </View>
//         </View>
//         </View>
//         </>
//     )
// }

// function loginFun(){
   
// auth()
 
//   .createUserWithEmailAndPassword('hakr@gmail.com', 'hakr012@')
//   .then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
// }

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';


export default function Login() {
    const [email, setEmail] = React.useState('hakr@gmail.com');
    const [password, setPassword] = React.useState('123456');

    return (
        <View>
            <Text style={{textAlign: 'center', paddingVertical: 20}}>Please login</Text>
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => setEmail(text)}
                    value={email}

                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />

                <Button
                    title="Login"
                    onPress={() => {
                        doLogin(email, password)
                    }}
                />
            </View>
        </View>
    );
}

function doLogin(email, password) {
    auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    alert('account created')
                }).catch(error => {
                console.error(error);
            });
        });
}