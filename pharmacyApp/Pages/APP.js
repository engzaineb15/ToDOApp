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
  ImageBackground
} from 'react-native';


import AppIntroSlider from 'react-native-app-intro-slider';

const { width, height } = Dimensions.get("screen");


import COLOR from './constant/COLOR';
import {intro2,intro,introooo} from './constant/IMAGE';




const introPagee = ({}) =>{

 const [showHomePage,SetshowHomePage]=useState(false);
 
 const slides =[
  {
    id:1,
    dec:"We select the best specialist",
    image:require('./assets/introoo.png')
  },
  {
    id:2,
    dec:"We will deliver at a convenient time ",
    image:require('./assets/intro2.png')
  },
  {
    id:3,
    dec:"for you Wide range of medicines",
    image:require('./assets/introooo.png')
  },
 ]

 const buttonLabel = (label) => {
  return (
    <View  
    style={{
      width:width/1.2,
      //  height: height * 0.25,
        justifyContent: 'space-between',
       // paddingHorizontal: 20,
         padding:10,
         marginRight:20,
         backgroundColor: COLOR.primary,
         alignSelf: 'center',
         top:-height/8,
         borderRadius:15,
         alignItems: 'center',
    }}>
 <Text
 style={{
  
  fontSize: 24,
  fontFamily:'AROneSans-Bold',
  color:'white', 
  
 }}>
 {label}
 </Text>
    </View>
  )
 }

 if(!showHomePage){
   return(
     <AppIntroSlider 
     data={slides}
     renderItem={({item})=>{
       return(
        <View 
        style={{ flex:1 }}
        > 
        <StatusBar translucent={true} barStyle="dark-content"></StatusBar>
       <ImageBackground 
       
    source={item.image}
    imageStyle={{opacity:0.5}} 
    style={{
      flex:1 ,
      backgroundColor:'black'
    
    }}>
 
 <TouchableOpacity
style={{
  marginVertical:20,
  width:width/5,
  alignSelf:"flex-end",
  padding:5,
//  backgroundColor:"#ff0"
}}
>
<Text
         style={{
          fontSize: 27,
          fontFamily:'AROneSans-Regular',
          color:'white', 
          
         }}>{'skip'}</Text>
         </TouchableOpacity>



<View
style={{
  padding:15
}}>
<Text
         style={{
           fontSize: 30,
           fontFamily:'AROneSans-Bold',
           color:'white', 
           top:height/2.1,
         }}>{item.dec}</Text>
</View>

</ImageBackground>
      </View>
       )
    }}
  activeDotStyle={{
    backgroundColor:COLOR.primary
  }}
  renderNextButton={()=> buttonLabel("Next")}
  renderSkipButton={()=> buttonLabel("Skip")}
  renderDoneButton={()=>buttonLabel("Done")}
    />

   
   )
 }



  return (
    <>
<View
style={{
  flex:1,
  alignItems:"center",
  justifyContent:"center"
}}>
  <StatusBar translucent={true} barStyle="dark-content"></StatusBar>
  <Text>Home Page</Text>
  
</View>
    </>
  )

}
export default introPagee;