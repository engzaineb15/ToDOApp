import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Modal,StatusBar } from 'react-native';
import color from '../constant/color';
import {logo,rightarrow} from '../constant/image';


const { width, height } = Dimensions.get("screen");

const ToDoAPP = ({navigation}) => {


  // const [listArr, SetlistArr] = useState([])
 
  // const modelData = () => {
  //   [

  //     {
  //       item_name: '',
  //       item_price: ''
  //     }

  //   ]
  // }


  // const [NewinputPrice, SetNewinputPrice] = useState("")
  // const [NewinputName, SetNewinputName] = useState("")
  // const [modalFor, SetmodalFor] = useState("تعديل")
  // const [addModal, SetaddModal] = useState(false)
  // const [openIndex, SetopenIndex] = useState(-1)
  // const [indexcancel, Setindexcancel] = useState(-1)
  // const [cancelmodel, Setcancelmodel] = useState(false)
  // const [Searchkey, SetSearchkey] = useState('')
  // const [current_id, Setcurrent_id] = useState('')
  




  return (
    <>

    <StatusBar backgroundColor={"#FBFBFB"} barStyle="dark-content"></StatusBar>
      <View style={{ flex: 1, backgroundColor: "#FBFBFB", }}>
      
      <View
      style={{
         width:width,
         height:height/2,
       //  backgroundColor:"#0ff",
       justifyContent:"flex-end",
      }}>
        <Image
                          source={logo}
                          style={{
                            width: 360,
                            height: 350,
                             resizeMode: "cover",
                           //  backgroundColor:"#000",
                             alignSelf:"center"
                          }} />

      </View>
     <View
     style={{
    padding:25,
    //  backgroundColor:"#f0f",
    justifyContent:"flex-end",
   }}>
   <Text
            style={{
              fontSize: 25,
              fontFamily:'PTSerif-Bold',
              color:color.support1,
              marginVertical:5

            }}>{'Get things done.'}</Text>

<Text
            style={{
              fontSize: 20,
              fontFamily:'PTSerif-Regular',
              color:color.lightbalck,
              // marginHorizontal:5

            }}>{'just a Click away from planning your tasks.'}</Text>
     </View>

  <View
  style={{
    width:width/2,
    height:height/3,
    borderTopLeftRadius:300,
    backgroundColor:color.Accent,
    alignSelf:"flex-end"
   }}>
<TouchableOpacity>
<Image
                          source={rightarrow}
                          style={{
                            width: 55,
                            height: 55,
                            marginTop:110,
                            marginLeft:55,
                            alignSelf:"center",
                          //    resizeMode: "cover",
                         //   backgroundColor:"#000",
                          //    alignSelf:"center"
                          }} />
                          </TouchableOpacity>
  </View>


      </View>
    </>
  )
}

export default ToDoAPP;