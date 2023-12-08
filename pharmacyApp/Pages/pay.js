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



const paymentPage = ({}) =>{

   const[cardnumber,Setcardnumber]=useState('')
   const[expData,SetexpData]=useState('')
   const[cardname,Setcardname]=useState('')
   const[cvv,Setcvv]=useState('')



   const [itemshow1, Setitemshow1] = useState(false)
   const [itemshow2, Setitemshow2] = useState(false)
   const [modhome, Setmodhome] = useState(false)
   const [save_index, Setsave_index] = useState(0)
   const [itemcheck, Setitemcheck] = useState(true)
   const [ placeinput, Setplaceinput] = useState("")
   const [ paymethods, Setpaymethods] = useState([
     {
       item:require("./assets/visa.png"),
       itemshow:false,
 
     },
     {
      item:require('./assets/applepay.png'),
       itemshow:false,
 
     },
     {
      item:require("./assets/paypal.png"),
       itemshow:false,
     },
   ])

 
   const checkedFun = (index) => {
    let arr=[...paymethods]
    let size = arr.length
    for(let i=0;i<size;i++){
      arr[i].itemshow=false
    }
    arr[index].itemshow=true
   // console.log(size)
    
    Setpaymethods(arr)
    Setsave_index(index)
  }



  return (
    <>

  <View
  style={{
 flex:1,
 padding:20,
  }}>

    <StatusBar translucent={true} backgroundColor={"#007c84"}></StatusBar>
    <View
    style={{
      width:"50%",
     marginVertical:40,
      alignItems:"center",
      alignSelf:"center",
      justifyContent:"space-between",
      flexDirection:"row",
    //  padding:10,
   // backgroundColor:"#0f0"
    }}>
    <Text style={{fontSize:25, fontWeight:"700", color:"#007c84"}} >{'طريقة الدفع'}</Text>

    <Image
                          source={wallet}
                          style={{
                            width: 50,
                            height: 50,
                            resizeMode: "cover",
                            //  backgroundColor:"#000",
                            //justifyContent: "center"
                          }} />
    </View>

   



    <View
  style={{
    
   padding:10,
 //backgroundColor:"#00f",
 flexDirection:"row",
 justifyContent:"flex-end",
// marginHorizontal:10
  }}>
  <Text
  style={{
    fontSize:20,
    fontWeight:"600",
    color:"#007684",
    marginHorizontal:8
  }}>طريقة الدفع</Text>

<Image
                          source={wallet}
                          style={{
                            width: 24,
                            height: 24,
                            resizeMode: "cover",
                           
                            //justifyContent: "center"
                          }} />

                          
  </View>

  <View
style={{
  width:"98%",
 // backgroundColor:"#00ff",
  flexDirection:"row-reverse",
  marginVertical:15
  //justifyContent:"center"
}}>

                         
<TouchableOpacity
style={{
  width:"98%",
  backgroundColor: "#fff",
  borderColor:"#999",
  borderWidth:1,
   borderRadius:10,
  // width:width/1.04,
  //height: 45,
  justifyContent:"space-between",
 flexDirection:"row-reverse",
 alignItems:"center",
  borderRadius: 10,
  padding:10,
  

}}
onPress={()=>{
 
 Setmodhome(true)
 Setitemcheck(true)
}}>

<Text
            style={{
              fontSize: 17,
         
              fontFamily: 'Almarai-Bold',
              color:"#666"
              
            }}>اختر طريقة الدفع</Text>

<Icon 
             
             name="angle-down" size={20} color="#666"/> 

</TouchableOpacity>
</View>


<View
style={{
 // marginTop:30,
  padding:10,
  alignSelf:"center",
  width:width,
  //backgroundColor:"#0f0",
 flexDirection:"row-reverse",
 justifyContent:"space-between"
}}>

    <View
    style={{
      // marginTop:30,
       alignItems:"flex-end",
      width:"65%",
      // justifyContent:"",
     // flexDirection:"row",
      justifyContent:"space-between",
      padding:10,
      // backgroundColor:"#ff0",
       
     }}>
      <Text style={{
         fontSize:20,
         color:"#007c84",
         fontWeight:"600",
         marginVertical:10,
      }}>{'رقم الفيزا'}</Text>
      
      <TextInput
               onChangeText={(value) => {
                Setcardnumber(value)
            }}
                style={{
                  padding:10,
                  width:"95%",
                  backgroundColor:"#fff",
                  borderWidth:2,
                  borderColor:"#007c84",
                  
                  borderRadius: height * 0.02,
                }}
                placeholder='ادخل رقم الفيزا '
              />

    </View>
  
    <View
    style={{
      // marginTop:30,
       alignItems:"flex-end",
      width:"38%",
      // justifyContent:"",
     // flexDirection:"row",
      justifyContent:"space-between",
      padding:10,
     // backgroundColor:"#0f0",
       
     }}>
      <Text style={{
         fontSize:18,
         color:"#007c84",
         fontWeight:"600",
         marginVertical:10,
      }}>{'تاريخ الانتهاء '}</Text>
      
      <TextInput
               onChangeText={(value) => {
                SetexpData(value)
            }}
                style={{
                  padding:10,
                  width:"95%",
                  backgroundColor:"#fff",
                  borderWidth:2,
                  borderColor:"#007c84",
                  
                  borderRadius: height * 0.02,
                }}
                placeholder='تاريخ انتهاء البطاقه'
              />

    </View>




  </View>


  <View
style={{
 // marginTop:20,
  padding:10,
  alignSelf:"center",
  width:width,
  //backgroundColor:"#0f0",
 flexDirection:"row-reverse",
 justifyContent:"space-between"
}}>

    <View
    style={{
      // marginTop:30,
       alignItems:"flex-end",
      width:"65%",
      // justifyContent:"",
     // flexDirection:"row",
      justifyContent:"space-between",
      padding:10,
      // backgroundColor:"#ff0",
       
     }}>
      <Text style={{
         fontSize:20,
         color:"#007c84",
         fontWeight:"600",
         marginVertical:10,
      }}>{'اسم المستخدم'}</Text>
      
      <TextInput
               onChangeText={(value) => {
               Setcardname(value)
            }}
                style={{
                  padding:10,
                  width:"95%",
                  backgroundColor:"#fff",
                  borderWidth:2,
                  borderColor:"#007c84",
                  
                  borderRadius: height * 0.02,
                }}
                placeholder='اكتب اسمك'
              />

    </View>
  
    <View
    style={{
      // marginTop:30,
       alignItems:"flex-end",
       width:"38%",
      // justifyContent:"",
     // flexDirection:"row",
      justifyContent:"space-between",
      padding:10,
     //  backgroundColor:"#0f0",
       
     }}>
      <Text style={{
         fontSize:18,
         color:"#007c84",
         fontWeight:"600",
         marginVertical:10,
      }}>{'رمز التحقق'}</Text>
      
      <TextInput
               onChangeText={(value) => {
                Setcvv(value)
            }}
                style={{
                  padding:10,
                  width:"95%",
                  backgroundColor:"#fff",
                  borderWidth:2,
                  borderColor:"#007c84",
                  
                  borderRadius: height * 0.02,
                }}
                placeholder='ادخل رمز التحقق'
              />

    </View>



 
  </View>


{/* 
<TouchableOpacity
                  style={{
                   // height:height/20,
                   padding:5,
                    width: width/1.2,
                    backgroundColor: "#fff",
             //       marginRight: height * 0.39,
                    shadowColor: "#007c84",
                    elevation: 16,
                   marginVertical:10,
                    alignSelf: 'center',
                    fontSize: height * 0.025,
                    borderRadius: height * 0.02,
                    justifyContent: 'center',
                    backgroundColor: "#007c84",
                    
                  }}>
                  <Text
                    style={{
                      
                      fontSize: 22,
                      fontFamily: 'Almarai-Regular',
                      textAlign: 'center',
                    color: "#fff",
                    }}>
                    تنفيذ الطلب 
                  </Text>
                </TouchableOpacity> */}
    
 
    <TouchableOpacity
        onPress={() => {
        //  setOpenModal(true);
        }}
        style={{
          padding:20,
          width: '30%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 15,
        //height: 100,
          borderRadius:15,
          // borderTopLeftRadius: 50,
          // borderBottomRightRadius: 50,
          position: 'absolute',
          bottom: 30,
          backgroundColor:"#f1a420"
        }}>
        <Text style={{color: '#fff', fontSize: 22,textAlign:"center"}}>{"دفع"}</Text>
      </TouchableOpacity>
  </View>




  <ModalHome
isOpen={modhome}
onRequestClose={() => {
  Setmodhome(false)
}}

style={{
 // height:'50%' ,
 
  backgroundColor:"#fff",
  borderRadius:10,
  padding:10,
  marginVertical:height/1.6,
  

}}

backButtonClose={true}
backdropPressToClose={true}

backdrop={true}

onClosed={()=>{
  Setmodhome(false)
}}>

<View
style={{
  // width:"100%",
  // height:"60%",
  // backgroundColor:"#ff3",
  // marginTop:310,
 //  paddingHorizontal:10,
 // paddingTop:5,
 
 
}}>
<Text
 style={{
  fontSize: 20,
  color: "#007c84",
  fontFamily: 'Almarai-Bold',
  alignSelf:"center",
 // justifyContent:"center"
   
}}>طريقة الدفع</Text>


{itemcheck?(
  <>

{paymethods.map((item,index)=>
<>

<TouchableOpacity
onPress={()=>{
  checkedFun(index) 
  }}>
<View style={{
 // backgroundColor:"#0ff",
  width:'100%',
  paddingHorizontal:10,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
 marginVertical:10,

}}>


<Image
                          source={item.item}
                          style={{
                            width: 30,
                            height:30,
                            resizeMode:"contain",
                         //   borderRadius:10
                            //  marginHorizontal:10
                          }} />

  <View style={{
    width:17,
    height:17,
    backgroundColor:paymethods[index].itemshow?'#f1a420':'#999',
    borderRadius:10, 
    
  }}>
   
 </View>
 </View>

{/* <View
    style={{
     // width:width,
      height:1,
      backgroundColor:Color.grey
    }}>
  </View> */}

  </TouchableOpacity>
  </>
)}
  </>
 ):null} 


 


</View>

<TouchableOpacity
                  style={{
                   // height:height/20,
                   padding:5,
                    width: width/1.2,
             //       marginRight: height * 0.39,
                    shadowColor: "#007c84",
                    elevation: 16,
                   marginVertical:15,
                    alignSelf: 'center',
                    borderRadius: height * 0.02,
                    justifyContent: 'center',
                    backgroundColor: "#f1a420",
                    
                  }}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontFamily: 'Almarai-Bold',
                      textAlign: 'center',
                      color: "#fff",
                    }}>
                    اختر  
                  </Text>
                </TouchableOpacity>

</ModalHome>
 
    </>
  )

}
export default paymentPage;