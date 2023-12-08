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
  TextInput,
  FlatList,
  Modal
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get("screen");

const ChatScreen = () => {

  const [messages, setMessages] = useState([
    {
			user: 1,
			time: "12:05",
			content: "Should we hang out tomorrow? I was thinking of going somewhere which has drinks",
      replyctent:"I was thinking of going somewhere---I was thinking of going somewhere which has drinks"
		},
    
		
   
  ]);

 
		
   
  
  // const [newMessage, setNewMessage] = useState('');
   const [replyMsg, SetreplyMsg] = useState("");
	
  const[replyModel,SetreplyModel]=useState(false)

  return (
    
    <View style={{ flex: 1, padding:10 }}>
      
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item,index  }) => (

          <View style={{ alignItems:"center",
          // backgroundColor:"#0f0"
           }}>
            <View
              style={{
                backgroundColor:  '#027aff' ,
                padding: 10,
                borderRadius: 10,
                margin: 5,
                
               }}>
             
              <Text style={{ color: 'white',fontWeight:"600",fontSize:19 }}>{item.content}</Text>


              <View
              style={{
                backgroundColor:  '#5c71de' ,
                padding: 10,
                borderRadius: 10,
              marginVertical:5,
                flexDirection:"row",

               }}>
       

         
          

       
   <Image
              source={require('./assets/reply2.png')}
              style={{
                width: 20,
                height: 20,
                marginHorizontal:5,
               alignSelf: "flex-start",
              
              }}
            />
         
              <Text style={{ color: 'white',fontWeight:"600",fontSize:19 , width:"80%"}}>{item.replyctent}</Text>
               
              </View>
 
 <TouchableOpacity  
 onPress={()=>{
  SetreplyModel(true)
 }}
 style={{
  marginTop:20,
  width:width/4.5,
  backgroundColor:"white",
 flexDirection:"row",
 alignItems:"center",
 alignSelf:"flex-end",
 borderRadius:10
 }}>
 

              <View
       style={{
        //marginVertical:10,
        padding:10,
       // width:width/4,
    //  backgroundColor:"#e0f"
       }}>
       <Text style={{ color: 'grey',fontWeight:"600",justifyContent:"center",textAlign:"center",fontSize:17 }}>{'Reply'}</Text>
       </View>
          

       
   <Image
              source={require('./assets/reply.png')}
              style={{
                width: 20,
                height: 20,
                alignSelf: 'center',
              
              }}
            />
            
          </TouchableOpacity>

       </View>


          

          </View>
        )}
      />

 
 
<Modal
          visible={replyModel}
          onRequestClose={() => {
            SetreplyModel(false)
          }}
          transparent={true}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: '90%',
               height: height / 3,
                padding: 10,
                backgroundColor: "#fff",
                elevation: 22,
                borderRadius: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  //    backgroundColor: '#0ff',
                }}>

                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: "800",
                    color: '#000',

                  }}>{"write your Reply"}</Text>


              </View>


              <Animatable.View animation={"bounceInLeft"}>

                <View

                  style={{
                    width: '98%',
                  //  height: height / 15,
                    borderRadius: 5,
                    alignSelf: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center",
                  //   backgroundColor:"#00f"
                  }}>


                  <TextInput
                    style={{
                      width: '90%',
                      height: height / 8,
                      borderWidth: 2,
                      borderColor: "#5c71de",
                      borderStyle: "solid",
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginVertical: 5,
                      marginHorizontal: 5,
                      color: "#000",
                       padding:20
                    }}
                    placeholder="Your Reply"
                    placeholderTextColor={"grey"}
                    multiline={true}
                    value={(replyMsg + '')}
                    onChangeText={(msgval) => {
                    SetreplyMsg(msgval)
                    }}></TextInput>




                </View>

              </Animatable.View>


              <Animatable.View animation={"bounceInRight"}>

                <View
                  style={{
                    alignSelf: 'center',
                    width: '90%',
                    borderWidth: 1.5,
                    borderColor: "#7e58e9",
                  }} />

                <View
                  style={{
                   // width: width / 5,
                   // height: height / 1,
                    borderRadius: 10,
                    padding:10,

                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 7,
                    backgroundColor: "#5c71de",
                  }}>
                  <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center', }}
                    onPress={() => {

                     SetreplyModel(false)

                      // if (this.state.NewinputNamecust == '' ) {

                      //   alert("نسيت اسم العميل ي بابا")
                      //   this.setState({addModalcust:true})

                      // } else if (this.state.NewinputPricecust == '') {
                      //   alert("ادخل القيمه المتبقية ي أبي ")
                       
                      //   this.setState({addModalcust:true})
                      // }
                      // else if (this.state.modalForcust == "إضافة") {
                      //   this.addNewcust()
                      // } 
                      
                      

                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                      }}>
                   {"Send Reply"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Animatable.View>

            </View>
          </View>


        </Modal>




    </View>
  );
};



export default ChatScreen;