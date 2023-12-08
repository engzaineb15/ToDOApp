import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Modal,StatusBar } from 'react-native';
import color from '../constant/color';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AnimatedLottieView from 'lottie-react-native';
import {oval,label,human,settings,list,calendar,kanban,arrowdown,add,note,noproject,arrowRight} from '../constant/image';
import moment from 'moment';
const { width, height } = Dimensions.get("screen");

const Dashboard = ({navigation}) => {


  const [Label, SetLabel] = useState(
    [
         {
          LabelName:'Study',
          NumofLabel:'5',
        },
        {
          LabelName:'Work',
          NumofLabel:'2',
        },
        {
          LabelName:'Sports',
          NumofLabel:'2',
        },
        {
          LabelName:'Personal',
          NumofLabel:'2',
        },
        
    ]
  )

  const [Projects, SetProjects] = useState(
    [
         {
       projName:'CareerFoundry Course',
       NumofTasks:'5',
        },
        {
          projName:'App Design Project',
          NumofTasks:'2',
        }
    ]
  )
  
  
  const [Status, SetStatus] = useState(
    [
         {
          status:'To do',
          //NumofTasks:'5',
        },
        {
          status:'Doing',
         // NumofTasks:'2',
        },
        {
          status:'Done',
         // NumofTasks:'2',
        }
    ]
  )
  
  const [modaladdProj, SetmodaladdProj] = useState(false)
  const [NewInputProj, SetNewInputProj] = useState('')
  const [insertListproj, SetinsertListproj] = useState(false)

  const [insertListLabel, SetinsertListLabel] = useState(false)
  const [modaladdLabel, SetmodaladdLabel] = useState(false)
  const [NewInputLabel, SetNewInputLabel] = useState('')
  
  const [insertListstatus, SetinsertListstatus] = useState(false)
  
 
  const addProject = () => {
    let arr = [...Projects]
    let inputObj = {
      projName: NewInputProj,
     // NumofTasks: NewinputPrice,
    
    }
    arr.push(inputObj)

    SetProjects(arr)
    SetNewInputProj('')
    SetmodaladdProj(false)
   // storePriceList(arr)
  }

  const addLabel = () => {
    let arr = [...Label]
    let inputObj = {
      LabelName: NewInputLabel,
     // NumofTasks: NewinputPrice,
    
    }
    arr.push(inputObj)

    SetLabel(arr)
    SetNewInputLabel('')
    SetmodaladdLabel(false)
   // storePriceList(arr)
  }

  


  return (
    <>

    <StatusBar backgroundColor={color.Accent} barStyle="dark-content"></StatusBar>
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: color.grey, }}>
      
      <View
      style={{
        opacity:20,
        elevation:10,
        backgroundColor:color.Accent,
        flexDirection:"row",
        justifyContent:"space-between"
      }}>
          <View
  style={{
    width:width/2.5,
    height:height/7,
    padding:10,
    marginTop:10,
    borderTopStartRadius:100,
    borderTopRightRadius:600,
    backgroundColor:"#ead3d385",
   
   }}>

     <Image
                          source={human}
                          style={{
                            width: 40,
                            height:40,
                             resizeMode: "cover",
                            
                           //  backgroundColor:"#000",
                          
                          }} />

<Text
         style={{
           fontSize: 12,
           fontFamily:'PTSerif-Regular',
           color:"#FFFF",
          marginVertical:5

         }}>{ moment().format('dddd, D MMMM')}</Text>

<Text
         style={{
           fontSize: 20,
           fontFamily:'PTSerif-Bold',
           color:"#FFFF",
          marginVertical:5

         }}>{"Dashboard"}</Text>

  </View>



<TouchableOpacity
style={{
  width:50,
  height:50,
  padding:12,
  alignItems:"center",
  justifyContent:"center",
  marginTop:15,
  marginHorizontal:15,
 backgroundColor:"#ead3d385",
 borderRadius:50
}}
onPress={()=>{
 // navigation.navigate('mytasks'); 
}}
>
<Image
                          source={settings}
                          style={{
                            width: 25,
                            height: 25,
    
                          }} />
                          </TouchableOpacity>
    </View>
  
 <View
 style={{
  padding:20,
// backgroundColor:"#0f0",
  justifyContent:"space-between",
  flexDirection:"row",
  
 }}>
 
<View
style={{
  //padding:20,
 // backgroundColor:"#0f0",
  alignItems:"center"
  
 }}>
 
<Text
         style={{
           fontSize:20,
           fontFamily:'PTSerif-Regular',
           color:color.Accent,
          marginVertical:5

         }}>{"List"}</Text>

 
    <TouchableOpacity
style={{
  width:width/4,
  padding:10,
    backgroundColor:"#FFFF",
    borderRadius:10,
    alignItems:"center"
}}
onPress={() => {
  navigation.navigate('mytasks', {
   // useer:"hhh"
  }); 
 }}
>
  
<Image
                          source={list}
                          style={{
                            width: 40,
                            height: 40,
                            
                          
                          }} />
                          </TouchableOpacity>

                          </View>

   <View
style={{
  //padding:20,
 // backgroundColor:"#0f0",
  alignItems:"center"
  
 }}>
 
<Text
         style={{
           fontSize:20,
           fontFamily:'PTSerif-Regular',
           color:color.Accent,
          marginVertical:5

         }}>{"Calender"}</Text>

 
    <TouchableOpacity
style={{
  width:width/4,
  padding:10,
    backgroundColor:"#FFFF",
    borderRadius:10,
    alignItems:"center"
}}
onPress={() => {
  navigation.navigate('Calender')
 }}
>
  
<Image
                          source={calendar}
                          style={{
                            width: 40,
                            height: 40,
                            
                          
                          }} />
                          </TouchableOpacity>

                          </View>

                          <View
style={{
  //padding:20,
 // backgroundColor:"#0f0",
  alignItems:"center"
  
 }}>
 
<Text
         style={{
           fontSize:20,
           fontFamily:'PTSerif-Regular',
           color:color.Accent,
          marginVertical:5

         }}>{"Kanban"}</Text>

 
    <TouchableOpacity
style={{
  width:width/4,
  padding:10,
    backgroundColor:"#FFFF",
    borderRadius:10,
    alignItems:"center"
}}>
  
<Image
                          source={kanban}
                          style={{
                            width: 40,
                            height: 40,
                            
                          
                          }} />
                          </TouchableOpacity>

                          </View>
    </View>
   


 <View
 style={{

  padding:20,
 //backgroundColor:color.Accent,
 flexDirection:"row",
 justifyContent:"space-between"
  
 }}>
 <Text
         style={{
           fontSize:17,
           fontFamily:'PTSerif-Regular',
           color:color.support1,
          marginVertical:5

         }}>{"Projects"}</Text>


<View
style={{
   width:width/6,
  
 // backgroundColor:"#0ff",
 flexDirection:"row",
 justifyContent:"space-between"
  
}}>
  {insertListproj == true ? (
              <TouchableOpacity
              style={{

                padding:5,
                //  backgroundColor:"#F0F",
              
              }}
          onPress={()=>{
            SetinsertListproj(!insertListproj)
          }}>
  
<Image
                          source={arrowdown}
                          style={{
                            width: 25,
                            height: 25,
                            
                          
                          }} />
                          </TouchableOpacity>
):(

  <TouchableOpacity
  style={{

    padding:5,
    //  backgroundColor:"#F0F",
  
  }}
onPress={()=>{
SetinsertListproj(!insertListproj)
}}>

<Image
              source={arrowRight}
              style={{
                width: 25,
                height: 25,
                
              
              }} />
              </TouchableOpacity>


)}
                          <TouchableOpacity
              style={{
              
                padding:5,
                //   backgroundColor:"#FFFF",
              
              }}
              onPress={()=>{
                SetmodaladdProj(true)
              }}>
  
<Image
                          source={add}
                          style={{
                            width: 22,
                            height: 22,
                            
                          
                          }} />

                          
                          </TouchableOpacity>

                          </View>
 </View>
  
 <View
 style={{
 // height:height/4,
//  backgroundColor:"#f0f"
 }}
 >

{ insertListproj==true ? (

  
  
  
    <FlatList 
      data={Projects}
      contentContainerStyle={{
      // backgroundColor:"#0f0",
        paddingHorizontal: 20,
      }}
    
      showsVerticalScrollIndicator={false}
     keyExtractor={(item, index) => `pro-${index}`}
     renderItem={({ item, index }) => {
                            return (
                              <>
                               <Animatable.View
                      animation={"fadeInDown"}
                      key={index}
                     delay={index * 3}>
 
                            <TouchableOpacity
                  style={{
                  // width:width/4,
                    padding:10,
                      backgroundColor:"#FFFF",
                      borderRadius:10,
                    // alignItems:"center",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginVertical:5

                  }}>
        
        <View
        style={{
        // backgroundColor:"#0ff",
        
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center"
        }}> 
      <Image
                                source={note}
                                style={{
                                  width: 25,
                                  height: 25,
                                marginHorizontal:5
                                }}
                                />

      <Text
              style={{
                fontSize:15,
                fontFamily:'PTSerif-Regular',
                color:color.support1,
              

              }}>{item.projName}</Text>
              </View>
                              

                                <Text
              style={{
                fontSize:20,
                fontFamily:'PTSerif-RegularRegular',
                color:color.lightbalck,
              

              }}>{item.NumofTasks}</Text>
                            </TouchableOpacity>
                             </Animatable.View>
                            </>
                            )}}

                            ListEmptyComponent={() => {
                              return (
                                <View
                                  style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}>
                                  <AnimatedLottieView
                                    source={noproject }
                                    autoPlay
                                    loop
                                    style={{height: 200, width: '100%'}}
                                    resizeMode="contain"
                                  />
                                  <Text
                                    style={{ 
                                      fontSize: height * 0.025,
                                      fontFamily: 'Almarai-Bold',
                                      color: color.Accent,
                                      textAlign: 'center',
                                    }}>
                                    No Projects Added
                                  </Text>
                                </View>
                              );
                            }}
                />
                
                ) : null}
</View>
<Modal
          visible={modaladdProj}
          onRequestClose={() => {
            SetmodaladdProj(false)
           // this.setState({modaladdProj:false})
          }}
          transparent={true}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: '90%',
                padding: 8,
                backgroundColor: "#fff",
                elevation: 22,
                borderRadius: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: color.support1, 
                    fontFamily: 'Almarai-Bold',
                    alignSelf: 'center',

                  }}>{ "Add Project Name" }</Text>


              </View>

   

                <View

                  style={{
                    width: '98%',
                  //  height: height / 15,
                    borderRadius: 5,
                    alignSelf: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center",
                  //   backgroundcolor:"#00f"
                  }}>


                  <TextInput
                    style={{
                      width: '90%',
                      borderWidth: 2,
                      borderColor: color.Accent,
                      borderStyle: "solid",
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginVertical: 5,
                      marginHorizontal: 5,
                      color: "#000",
                      textAlign: "center",
                      fontFamily:"PTSerif-Regular"
                    }}
                    placeholder="Project Name"
                    placeholderTextColor={color.lightbalck}
                    keyboardType="default"
                    value={(NewInputProj + '')}
                    onChangeText={(nameval) => {
                      SetNewInputProj(nameval)
                     
                    }}></TextInput>



                </View>

                <View
                  style={{
                    alignSelf: 'center',
                    width: '90%',
                    borderWidth: 1.5,
                    borderColor: color.Accent,
                  }} />

                <View
                  style={{
                    width: width / 5,
                    height: height / 20,
                    borderRadius: 10,
                    
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 7,
                    backgroundColor: color.Accent,
                  }}>
                  <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center', }}
                    onPress={() => {

                      SetmodaladdProj(false)
                       

                      if (NewInputProj == '' ) {

                        alert("Should input project name")
                        SetmodaladdProj(true)
                       
                      }
                       else  {
                        addProject()
                       
                      } 

                    }}>
                    <Text
                      style={{
                        fontSize: height * 0.028,
                        color: color.support1, 
                        fontFamily:'PTSerif-Regular',
                        alignSelf: 'center',
                      }}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
           

            </View>
          </View>


        </Modal>




                   <View
                          style={{

                            padding:20,
                          //backgroundColor:color.Accent,
                          flexDirection:"row",
                          justifyContent:"space-between"
                            
                          }}>

                          <Text
                                  style={{
                                    fontSize:17,
                                    fontFamily:'PTSerif-Regular',
                                    color:color.support1,
                                    marginVertical:5

                                  }}>{"Labels"}</Text>

                          <View
                          style={{
                            width:width/6,
                            
                          // backgroundColor:"#0ff",
                          flexDirection:"row",
                          justifyContent:"space-between"
                            
                          }}>

                            {insertListLabel == true ? (
                  
                                        <TouchableOpacity
                                        style={{

                                          padding:5,
                                      //   backgroundColor:"#F0F",
                                        
                                        }}
                                    onPress={()=>{
                                      SetinsertListLabel(!insertListLabel)
                                    }}>
                            
                          <Image
                                                    source={arrowdown}
                                                    style={{
                                                      width: 25,
                                                      height: 25,
                                                      
                                                    
                                                    }} />
                                                    </TouchableOpacity>
                       ) :(

                        <TouchableOpacity
                        style={{

                          padding:5,
                      //   backgroundColor:"#F0F",
                        
                        }}
                    onPress={()=>{
                      SetinsertListLabel(!insertListLabel)
                    }}>
            
          <Image
                                    source={arrowRight}
                                    style={{
                                      width: 25,
                                      height: 25,
                                      
                                    
                                    }} />
                                    </TouchableOpacity>
                       )}
                                                    <TouchableOpacity
                                        style={{
                                        
                                          padding:5,
                                          //   backgroundColor:"#FFFF",
                                        
                                        }}
                                        onPress={()=>{
                                         SetmodaladdLabel(true)
                                        }}>
                            
                          <Image
                                                    source={add}
                                                    style={{
                                                      width: 22,
                                                      height: 22,
                                                      
                                                    
                                                    }} />

                                                    
                                                    </TouchableOpacity>

                                                    </View>
                          </View>
<View
style={{
// backgroundColor:"#0f0"
}}>

{insertListLabel==true ? (
  
  
    <FlatList 
      data={Label}
      contentContainerStyle={{
      // backgroundColor:"#ff0",
        flexDirection:"row",
        paddingHorizontal: 20,
        flexWrap:"wrap",
        justifyContent:"space-between"
      }}
    
      showsVerticalScrollIndicator={false}
     keyExtractor={(item, index) => `pro-${index}`}
     renderItem={({ item, index }) => {
                            return (
                              <>
                               <Animatable.View
                      animation={"fadeInDown"}
                      key={index}
                     delay={index * 3}>

                            <TouchableOpacity
                  style={{
                  width:width/2.4,
                    padding:10,
                      backgroundColor:"#FFFF",
                      borderRadius:10,
                     alignItems:"center",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginVertical:5

                  }}>
        
        <View
        style={{
        // backgroundColor:"#0ff",
        
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center"
        }}> 
      <Image
                                source={label}
                                style={{
                                  width: 20,
                                  height: 20,
                                marginHorizontal:10
                                }}
                                />

      <Text
              style={{
                fontSize:15,
                fontFamily:'PTSerif-Regular',
                color:color.support1,
              

              }}>{item.LabelName}</Text>
              </View>
                              

                                <Text
              style={{
                fontSize:20,
                fontFamily:'PTSerif-RegularRegular',
                color:color.lightbalck,
              

              }}>{item.NumofLabel}</Text>
                            </TouchableOpacity>
               
                             </Animatable.View>
                            </>
                            )}}

                            ListEmptyComponent={() => {
                              return (
                                <View
                                  style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}>
                                  <AnimatedLottieView
                                    source={noproject }
                                    autoPlay
                                    loop
                                    style={{height: 200, width: '100%'}}
                                    resizeMode="contain"
                                  />
                                  <Text
                                    style={{ 
                                      fontSize: height * 0.025,
                                      fontFamily: 'Almarai-Bold',
                                      color: color.Accent,
                                      textAlign: 'center',
                                    }}>
                                    No Labels Added
                                  </Text>
                                </View>
                              );
                            }}
                />
                
                ) : null}


</View>


<Modal
          visible={modaladdLabel}
          onRequestClose={() => {
            SetmodaladdLabel(false)
          
          }}
          transparent={true}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: '90%',
                padding: 8,
                backgroundColor: "#fff",
                elevation: 22,
                borderRadius: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: color.support1, 
                    fontFamily: 'Almarai-Bold',
                    alignSelf: 'center',

                  }}>{ "Add Label Name" }</Text>


              </View>

   

                <View

                  style={{
                    width: '98%',
                  //  height: height / 15,
                    borderRadius: 5,
                    alignSelf: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center",
                  //   backgroundcolor:"#00f"
                  }}>


                  <TextInput
                    style={{
                      width: '90%',
                      borderWidth: 2,
                      borderColor: color.Accent,
                      borderStyle: "solid",
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginVertical: 5,
                      marginHorizontal: 5,
                      color: "#000",
                      textAlign: "center",
                      fontFamily:"PTSerif-Regular"
                    }}
                    placeholder="Label Name"
                    placeholderTextColor={color.lightbalck}
                    keyboardType="default"
                    value={(NewInputLabel + '')}
                    onChangeText={(namval) => {
                      SetNewInputLabel(namval)
                     
                    }}></TextInput>



                </View>

                <View
                  style={{
                    alignSelf: 'center',
                    width: '90%',
                    borderWidth: 1.5,
                    borderColor: color.Accent,
                  }} />

                <View
                  style={{
                    width: width / 5,
                    height: height / 20,
                    borderRadius: 10,
                    
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 7,
                    backgroundColor: color.Accent,
                  }}>
                  <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center', }}
                    onPress={() => {

                      SetmodaladdLabel(false)
                       

                      if (NewInputProj == '' ) {

                        alert("Should input Label name")
                        SetmodaladdLabel(true)
                      }
                       else  {
                        addLabel()
                       
                      } 

                      

                    }}>
                    <Text
                      style={{
                        fontSize: height * 0.028,
                        color: color.support1, 
                        fontFamily:'PTSerif-Regular',
                        alignSelf: 'center',
                      }}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
           

            </View>
          </View>


        </Modal>




 
  <View
                          style={{

                            padding:20,
                          //backgroundColor:color.Accent,
                          flexDirection:"row",
                          justifyContent:"space-between"
                            
                          }}>

                          <Text
                                  style={{
                                    fontSize:17,
                                    fontFamily:'PTSerif-Regular',
                                    color:color.support1,
                                    marginVertical:5

                                  }}>{"Status"}</Text>

                          <View
                          style={{
                            width:width/6,
                          // backgroundColor:"#0ff",
                          alignItems:"center"
                            
                          }}>

                            {insertListstatus == true ? (
                  
                                        <TouchableOpacity
                                        style={{

                                          padding:5,
                                      //   backgroundColor:"#F0F",
                                        
                                        }}
                                    onPress={()=>{
                                      SetinsertListstatus(!insertListstatus)
                                    }}>
                            
                          <Image
                                                    source={arrowdown}
                                                    style={{
                                                      width: 25,
                                                      height: 25,
                                                      
                                                    
                                                    }} />
                                                    </TouchableOpacity>
                       ) :(

                        <TouchableOpacity
                        style={{

                          padding:5,
                      //   backgroundColor:"#F0F",
                        
                        }}
                    onPress={()=>{
                      SetinsertListstatus(!insertListstatus)
                    }}>
            
          <Image
                                    source={arrowRight}
                                    style={{
                                      width: 25,
                                      height: 25,
                                      
                                    
                                    }} />
                                    </TouchableOpacity>
                       )}
                                                  

                                                    </View>
       
      
                        </View>
   {insertListstatus == true ?(

 <View
 style={{
  padding:20,
  alignItems:"center",
 flexDirection:"row",
 justifyContent:"space-between",
 }}>

 <TouchableOpacity
                  style={{
                    
                  width:width/4.3,
                    padding:10,
                      backgroundColor:"#FFFF",
                      borderRadius:10,
                     alignItems:"center",
                    flexDirection:"row",
                    justifyContent:"space-between"
                    

                  }}>
        
      <Image
                                source={oval}
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius:10,
                                  backgroundColor:"red",
                            //    marginHorizontal:10
                                }}
                                />

      <Text
              style={{
                fontSize:16,
                fontFamily:'PTSerif-Regular',
                color:color.support1,
              

              }}>{"To do"}</Text>
              
                              
              </TouchableOpacity>

              <TouchableOpacity
                  style={{
                    
                  width:width/4.3,
                    padding:10,
                      backgroundColor:"#FFFF",
                      borderRadius:10,
                     alignItems:"center",
                    flexDirection:"row",
                    justifyContent:"space-between"
                    

                  }}>
        
      <Image
                                source={oval}
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius:10,
                                  backgroundColor:"yellow",
                            //    marginHorizontal:10
                                }}
                                />

      <Text
              style={{
                fontSize:16,
                fontFamily:'PTSerif-Regular',
                color:color.support1,
              

              }}>{"Doing"}</Text>
              
                              
              </TouchableOpacity>

              <TouchableOpacity
                  style={{
                    
                  width:width/4.3,
                    padding:10,
                      backgroundColor:"#FFFF",
                      borderRadius:10,
                     alignItems:"center",
                    flexDirection:"row",
                    justifyContent:"space-between"
                    

                  }}>
        
      <Image
                                source={oval}
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius:10,
                                  backgroundColor:"green",
                            //    marginHorizontal:10
                                }}
                                />

      <Text
              style={{
                fontSize:16,
                fontFamily:'PTSerif-Regular',
                color:color.support1,
              

              }}>{"Done"}</Text>
              
                              
              </TouchableOpacity>




              </View>              
):null}  
  
  
  
                             
      </View>
      </ScrollView>
    </>
  )
}

export default Dashboard;