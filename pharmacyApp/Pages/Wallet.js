import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  Dimensions,
  ImageBackground,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalHome from 'react-native-modalbox';
const { width, height } = Dimensions.get("screen");

import COLOR from './constant/COLOR';
import {visa,wallet,applepay,paypal} from './constant/IMAGE';



const walletPage = ({}) =>{


  return (
    <>
   <View
  style={{
 flex:1,
 padding:20,
  }}>

    <StatusBar translucent={true} backgroundColor={"#007c84"}></StatusBar>
  <View style={{ flex: 0.4, backgroundColor: "#fff",}}>
     
     <View
     style={{
      // backgroundColor:"#0f0",
       padding:20,
       justifyContent:"center",
       alignItems:"center"
       
     }}>
     <Text
      style={{
       fontSize:25,
        fontWeight:"800",
         color:"#007c84",
         marginHorizontal:8
      }}>المحفظة</Text>
     
     </View>
        
     
        
     <View
            style={{
       //  backgroundColor:"#00f",
           // height:height/3,
         padding:80,
            width:width,
            alignItems:"center",
            justifyContent:"center"
         
            }}>
       
     <Image
                               source={wallet}
                               style={{
                                 width: 200,
                                 height: 200,
                                 resizeMode:"cover",
                                 //  backgroundColor:"#000",
                                 //justifyContent: "center"
                               }} />
      
           </View>
     
            <View 
           style={{
        // backgroundColor:"#0f0",
         //   height:height/3,
        // padding:10,
            width:width,
            alignItems:"center",
            justifyContent:"center"
           
            }}>
                             
       <Text style={{
         fontSize:28,
         fontFamily:'Almarai-Bold',
         color:"#007c84",
     
     
       }}>رصيد محفظتك </Text>
       <Text style={{
         fontSize:20,
         fontFamily:'Almarai-Bold',
         color:"#007c84",
         padding:10
     
       }}>30  ج.م</Text>
           </View> 
     
     <View  
     style={{
     //backgroundColor:"#0f0",
     marginVertical:80,
     }}
     >
           <TouchableOpacity
                       style={{
                        // height:height/20,
                        padding:5,
                         width: width/1.2,
                         // backgroundColor: Color.White,
                  //       marginRight: height * 0.39,
                         shadowColor: "#007c84",
                         elevation: 16,
                        marginVertical:10,
                         alignSelf: 'center',
                         // fontSize: height * 0.025,
                         borderRadius: height * 0.02,
                         justifyContent: 'center',
                         backgroundColor: "#f1a420",
                         
                       }}>
                       <Text
                         style={{
                          
                           fontSize: 22,
                           fontFamily: 'Almarai-Bold',
                           textAlign: 'center',
                           color: "#FFF",
                         }}>
                         طرق الدفع  
                       </Text>
                     </TouchableOpacity>
{/*      
                    <TouchableOpacity  
                    style={{
     
                    }}
                    >
              <Text
                         style={{
                           color:"#007c84",
                           fontSize: 17,
                           fontFamily: 'Almarai-Bold',
                           textAlign: 'center',
                           padding:10,
                           textDecorationLine:"underline"
                           
                         }}>خيارات الدفع</Text>
                    </TouchableOpacity> */}
                    </View>
     
     
                    </View>
       </View>
    </>
  )

}
export default walletPage;