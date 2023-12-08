import React, { useState, useEffect } from 'react';
import { View, Text,Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';

export default function Home({user}) {

    return(
        <View>
            <Text 
            style={{
                color:"#00f"
            }}
            >Welcome Home Page {user} </Text>

            <Button 
             title='SignOut'
             onPress={()=>{
                auth().signOut()
             }}
            />
        </View>
    )
}