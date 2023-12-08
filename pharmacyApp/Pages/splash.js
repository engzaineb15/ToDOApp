import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get("screen");


import COLOR from './constant/COLOR';
 import {logo} from './constant/IMAGE';

const splash = ({}) =>{
  


//   async componentDidMount() {
  
//     const logged = await AsyncStorage.getItem('logged');
 
//     // logged = JSON.parse(logged)
// // console.log(logged)
//     setTimeout(() => {
//       if (logged == null ) {
//         this.props.navigation.navigate('SignIn');
//       } else if (logged == 'logged') {
//         this.props.navigation.navigate('Home');
//       }
//     }, 1500);
//   }


  return (
    <>
<SafeAreaView style={{ flex: 1, backgroundColor:COLOR.primary, }}>
      <StatusBar backgroundColor={COLOR.primary} barStyle="dark-content"></StatusBar>
      <View
      style={{
      top:200,
      //backgroundColor:"#ff0",
      alignSelf:"center",
     //justifyContent:"space-between",
    alignItems:"center"
      }}>
        <Image
                          source={logo}
                          style={{
                            width: 85,
                            height:85,
                             resizeMode: "cover", 
                            marginVertical:10
                          
                          }} />
<Text
         style={{
           fontSize: 35,
           color:COLOR.white,  

         }}>{"PHARMA"}</Text>
 
 <Text
         style={{
           fontSize: 16,
           color:COLOR.white,  

         }}>{"Be anteak b oahom mectte"}</Text>

      </View>


</SafeAreaView>
      
    </>
  )

}
export default splash;