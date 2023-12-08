import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Animated,
  ImageBackground,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';
import { SearchBar, IconProps } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { renderNode } from 'react-native-elements/dist/helpers';
import { TextInput } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');
  

const Subscriptions = () => {
   
   
  return (
    <>
    
      <View
        style={{
          flex: 1,
         backgroundColor: '#FFFF',
        }}>
          

          <LinearGradient

          colors={['#3c2365', '#3D15A9']}
           //    linear-gradient(180deg, #3D155F 0%, #3D15A9 100%);
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 1}}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height:90,
        
            paddingHorizontal:20,
            marginBottom:20
          }}>
        <StatusBar backgroundColor={"#3c2365"} barStyle="light-content" />
        <TouchableOpacity
        style={{
         
        }}
        onPress={()=>{
        
        }}>
        <Image
                        source={require('./assets/arrorwhite.png')}
                        style={{
                          width: 30,
                          height: 30,
  
                        }} />
                        </TouchableOpacity>
               
                   <Text
                style={{color: '#FFF', fontSize: 25, fontWeight: '600',alignSelf:"center"}}>
                {"Subscriptions"}
              </Text> 

           <View
           style={{
            padding:10,
         //   backgroundColor:"#0f0"
           }}></View>
           
 </LinearGradient>
     

         <ScrollView>

              <View 
              style={{
                padding:20,
            // backgroundColor:"#ff0"
          
           
              }}>

<View
style={{
 // backgroundColor:"#0f0",
  marginVertical:30
}}
>
 <View
 style={{
  padding:10,
   borderWidth:2,
   borderColor:"#3c2365",
   borderRadius:8,
   alignItems:"center"
 }}>

<Text
                style={{color: "#3c2365", fontSize: 20, fontWeight: '600',alignSelf:"center"}}>
                {"Tracks"}
              </Text>
      <View
      style={{
        width:350,
        borderWidth:0.8,
        borderColor:"#3c2365",
        marginVertical:10
      }}></View>

    <View
    style={{
      padding:10,
      width:"80%",
      alignItems:"center",
      justifyContent:"center"
   //   backgroundColor:"#f0f"
    }}>
      <Text
                style={{color: "#000", fontSize: 16, fontWeight: '500',textAlign:"center"}}
                numberOfLines={0.5}
                >
                {"Cairo university -->Law Collage -->Class 1 --> انتظام"}
              </Text>

</View>

<View
      style={{
        width:350,
        borderWidth:0.8,
        borderColor:"#3c2365",
        marginVertical:10
      }}></View>
<View
    style={{
      padding:10,
      width:"80%",
      alignItems:"center",
      justifyContent:"center"
   //   backgroundColor:"#f0f"
    }}>
      <Text
                style={{color: "#000", fontSize: 16, fontWeight: '500',textAlign:"center"}}
                numberOfLines={0.5}
                >
                {"Cairo university -->Law Collage -->Class 1 --> انتظام -->subject name"}
              </Text>

</View>

 </View>
</View>



           <View
style={{
 // backgroundColor:"#0f0"
}}
>
 <View
 style={{
  padding:10,
   borderWidth:2,
   borderColor:"#3c2365",
   borderRadius:8,
   alignItems:"center"
 }}>

<Text
                style={{color: "#3c2365", fontSize: 20, fontWeight: '600',alignSelf:"center"}}>
                {"Courses"}
              </Text>
      <View
      style={{
        width:350,
        borderWidth:0.8,
        borderColor:"#3c2365",
        marginVertical:10
      }}></View>

    <View
    style={{
      padding:10,
      width:"80%",
      alignItems:"center",
      justifyContent:"center"
   //   backgroundColor:"#f0f"
    }}>
      <Text
                style={{color: "#000", fontSize: 16, fontWeight: '500',textAlign:"center"}}
                numberOfLines={0.5}
                >
                {"Cairo university -->Law Collage -->Class 1 --> انتظام -->subject 1 -->Course 1"}
              </Text>

</View>

<View
      style={{
        width:350,
        borderWidth:0.8,
        borderColor:"#3c2365",
        marginVertical:10
      }}></View>
<View
    style={{
      padding:10,
      width:"80%",
      alignItems:"center",
      justifyContent:"center"
   //   backgroundColor:"#f0f"
    }}>
      <Text
                style={{color: "#000", fontSize: 16, fontWeight: '500',textAlign:"center"}}
                numberOfLines={0.5}
                >
                {"Cairo university -->Law Collage -->Class 1 --> انتظام -->subject 2 -->Course 2"}
              </Text>

</View>

 </View>
</View>  
   </View>



                </ScrollView>

      </View>
    </>
  );

};
export default Subscriptions;
