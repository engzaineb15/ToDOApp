import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Modal,StatusBar } from 'react-native';
import color from '../constant/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {logo,rightarrow,facebook,social,apple} from '../constant/image';


const { width, height } = Dimensions.get("screen");

const SingUPPage = ({navigation}) => {


  const [email, Setemail] = useState("")
  const [pass, Setpass] = useState("")
  const [checkIcon,SetcheckIcon]= useState(false)

 const change_sec = () => {
    
    SetcheckIcon(!checkIcon)
  }





  return (
    <>

    <StatusBar backgroundColor={"#Ffff"} barStyle="dark-content"></StatusBar>
      <View style={{ flex: 1, backgroundColor: "#FBFBFB", }}>
      
      <View
      style={{
        //  width:width,
        //  height:height/2.5,
        padding:30,
      //  backgroundColor:"#ff0",
       justifyContent:"flex-end",
      }}>
        <Image
                          source={logo}
                          style={{
                            width: 260,
                            height: 220,
                             resizeMode: "cover",
                           //  backgroundColor:"#000",
                             alignSelf:"center"
                          }} />
  
  <Text
            style={{
              fontSize: 24,
              fontFamily:'PTSerif-Bold',
              color:color.support1,
           //   marginVertical:10,
              alignSelf:"center"

            }}>{"Let's get strated!"}</Text>
</View>

<View
style={{
// backgroundColor:"#0ff",
 alignItems:"center"
}}>
  <View
  style={{
     width:width/1.43,
   
  //backgroundColor:"#0f7",
   
  }}>
    <Text
            style={{
              fontSize: 15,
              fontFamily:'PTSerif-Regular',
              color:color.support1,
             marginVertical:10

            }}>{'EMAIL ADDRESS'}</Text>
  <View
  style={{
   // padding:10,
   width:width/1.5,
//  backgroundColor:"#00f",
  flexDirection:"row",
  alignItems:"center"
  }}> 
  
  {/* <TouchableOpacity activeOpacity={0.7}
        onPress={() => {
         change_sec();
        }}>
        <Icon
          name={checkIcon ? 'eye-slash' : 'eye'}
          style={{
            
            color: '#84b3d1',
          
        }}
          size={height * 0.03}
        />     
        </TouchableOpacity> */}
 <TextInput
 style={{
  width:width/1.43,
 // padding:20,
  borderRadius:15,
  borderWidth:2,
  borderColor:color.support1,
  color:color.support1,
  alignSelf:"center",
  textAlign:"center"
 }}
                    value={(email+ '')}
                    onChangeText={(valemail) => {
                      Setemail(valemail)
                    }}>
                      

 </TextInput>
 </View>    
 </View>

 <View
  style={{
     width:width/1.43,
   
  // backgroundColor:"#0f7",

    
   
  }}>
    <Text
            style={{
              fontSize: 15,
              fontFamily:'PTSerif-Regular',
              color:color.support1,
             marginVertical:10

            }}>{'PASSWORD'}</Text>
 <TextInput
 style={{
  width:width/1.43,
  borderRadius:15,
  borderWidth:2,
  borderColor:color.support1,
  alignSelf:"center",
  textAlign:"center",
  color:color.support1

 }}
                    
                    value={(pass+ '')}
                    onChangeText={(val) => {
                      Setpass(val)
                    }}>

 </TextInput>

 </View>



</View>





<TouchableOpacity
   
   activeOpacity={0.7}
   
   style={{
    width:width/3,
     padding:5,
     backgroundColor: color.Accent,
     alignSelf: 'center',
     marginVertical:20,
     borderRadius:25,
     alignItems: 'center',
     justifyContent: 'center',
   }}
   onPress={() => {
    
   }}>


<Text
         style={{
           fontSize: 20,
           fontFamily:'PTSerif-Bold',
           color:"#fff",
          marginVertical:10

         }}>{'Sing up'}</Text>


   </TouchableOpacity>

 <View 
 style={{
       // padding:30,
      //  backgroundColor:"#ff0",
       alignItems:"center"
 }}
 >
   <Text
         style={{
           fontSize: 20,
           fontFamily:'PTSerif-Regular',
           color:color.lightbalck,
         // marginVertical:10

         }}>{'or sing up with'}</Text>
</View>

  <View
  style={{
    width:width/2,
    alignSelf:"center",
     padding:10,
   //  backgroundColor:"#ff0",
    flexDirection:"row",
    justifyContent:"space-between"
}}>

<TouchableOpacity>
<Image
                          source={facebook}
                          style={{
                            width: 45,
                            height:45,
                           
                          }} />
                          </TouchableOpacity>
                          <TouchableOpacity>
<Image
                          source={social}
                          style={{
                            width: 45,
                            height: 45,
                           
                          }} />
                          </TouchableOpacity>
                          <TouchableOpacity>
<Image
                          source={apple}
                          style={{
                            width: 45,
                            height: 45,
                           
                          }} />
                          </TouchableOpacity>                                                  

  </View>

  <View 
 style={{
       width:width/1.8,
       alignSelf:"center",
      //  backgroundColor:"#ff0",
       alignItems:"center",
       marginVertical:30,
       flexDirection:"row"
 }}>
   <Text
         style={{
           fontSize: 16,
           fontFamily:'PTSerif-Regular',
           color:color.lightbalck,
         // marginVertical:10

         }}>{'Already have an account?'}</Text>
      
      <TouchableOpacity
      
     
       
        onPress={()=>{
  
          navigation.navigate('login'); 
        
        }}
      
      >
      <Text
         style={{
           fontSize: 16,
           fontFamily:'PTSerif-Bold',
           color:color.Accent,
         // marginVertical:10

         }}>{' Login in'}</Text>
      </TouchableOpacity>
</View>
      </View>
    </>
  )
}

export default SingUPPage;