import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Modal,StatusBar } from 'react-native';
import color from '../constant/color';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AnimatedLottieView from 'lottie-react-native';
import {music,menu,more,noproject} from '../constant/image';
import moment from 'moment';
const { width, height } = Dimensions.get("screen");

const mytasks = ({navigation}) => {

  const [searchResults, setSearchResults] = useState([]);

  const [myTasks, SetmyTasks] = useState(
    [
         
    ]
  )

  const [Today, SetToday] = useState(
    [
      
      {
        taskName:'Schedule dentist',
        label:'Personal',
        itemChecked:false
         },
         {
           taskName:'prepare Team Meating',
           label:'Personal',
           itemChecked:false
          },
          {
           taskName:'Schedule dentist',
           label:'Personal',
           itemChecked:false
            },
            {
              taskName:'prepare Team Meating',
              label:'Personal',
              itemChecked:false
             },
             {
               taskName:'Schedule dentist',
               label:'Personal',
               itemChecked:false
                },
                {
                  taskName:'prepare Team Meating',
                  label:'Personal',
                  itemChecked:false
                 },

                 {
                  taskName:'Schedule dentist',
                  label:'Personal',
                  itemChecked:false
                   },
                   {
                     taskName:'prepare Team Meating',
                     label:'Personal',
                     itemChecked:false
                    },
                    {
                     taskName:'Schedule dentist',
                     label:'Personal',
                     itemChecked:false
                      },
                      {
                        taskName:'prepare Team Meating',
                        label:'Personal',
                        itemChecked:false
                       },
                       {
                         taskName:'Schedule dentist',
                         label:'Personal',
                         itemChecked:false
                          },
                          {
                            taskName:'prepare Team Meating',
                            label:'Personal',
                            itemChecked:false
                           },
    ]
  )
  
  const [Tomorrow, SetTomorrow] = useState(
    [
      {
        taskName:'Call Charlotte',
        label:'Personal',
        ItemChecked:false
         },
         {
           taskName:'Submit execrise',
           label:'Study',
           ItemChecked:false
          },
          {
           taskName:'Perpare Test',
           label:'App',
           ItemChecked:false
          },
          {
            taskName:'Call Charlotte',
            label:'Personal',
            ItemChecked:false
             },
             {
               taskName:'Submit execrise',
               label:'Study',
               ItemChecked:false
              },
              {
               taskName:'Perpare Test',
               label:'App',
               ItemChecked:false
              },
    ]
  )
  
  
  const [ThisWeek, SetThisWeek] = useState(
    [
         {
       taskName:'Submit execrise 3.3',
       label:'study',
       ItemChecked:false
        },
        {
          taskName:'Water plants',
          label:'Study',
          ItemChecked:false
         },
         {
          taskName:'Perpare Test',
          label:'App',
          ItemChecked:false
         },
    ]
  )
  
  const [search_key, Setsearch_key] = useState('')
 


  const toggleItemCheckToday = (index) => {
    const arr = [...Today];
    arr[index].itemChecked = !arr[index].itemChecked;
    SetToday(arr);
  };

  const toggleItemCheckTomorrow = (index) => {
    const arr = [...Tomorrow];
    arr[index].itemChecked = !arr[index].itemChecked;
    SetTomorrow(arr);
  };

  const toggleItemCheckWeek = (index) => {
    const arr = [...ThisWeek];
    arr[index].itemChecked = !arr[index].itemChecked;
    SetThisWeek(arr);
  };



  const search = (query) => {
    const results = [];
  
    // Search in the 'Today' array
    const todayResults = Today.filter((item) =>
      item.taskName.toLowerCase().includes(query.toLowerCase())
    );
  
    // Search in the 'Tomorrow' array
    const tomorrowResults = Tomorrow.filter((item) =>
      item.taskName.toLowerCase().includes(query.toLowerCase())
    );
  
    // Search in the 'ThisWeek' array
    const thisWeekResults = ThisWeek.filter((item) =>
      item.taskName.toLowerCase().includes(query.toLowerCase())
    );
  
    // Combine the results from all three arrays
    results.push(...todayResults, ...tomorrowResults, ...thisWeekResults);
  
    // Update the search results state
    setSearchResults(results);
  };
  
  


  return (
    <>

    <StatusBar backgroundColor={color.Accent} barStyle="dark-content"></StatusBar>
      <View style={{ flex: 1, backgroundColor: color.grey, }}>
      
      <View
      style={{
        opacity:20,
        elevation:10,
        backgroundColor:color.Accent,
        flexDirection:"row",
       // justifyContent:"space-between"
      }}>
          <View
  style={{
   // width:width/2.5,
    height:height/7,
    padding:10,
    marginTop:10,
    borderTopStartRadius:100,
    borderTopRightRadius:600,
    backgroundColor:"#ead3d385",
   
   }}>

<TouchableOpacity
onPress={()=>{
  navigation.navigate('Dashboard')
}}
>
     <Image
                          source={menu}
                          style={{
                            width: 30,
                            height:30,
                             resizeMode: "cover",
                            
                           // backgroundColor:"#000",
                          
                          }} />
                          </TouchableOpacity>
<View
style={{
  marginVertical:20,
  //padding:5,
  //backgroundColor:"#0ff"
}}
>
<Text
         style={{
           fontSize: 12,
           fontFamily:'PTSerif-Regular',
           color:"#FFFF",
       
         }}>{ moment().format('dddd, D MMMM')}</Text>

<Text
         style={{
           fontSize: 20,
           fontFamily:'PTSerif-Bold',
           color:"#FFFF",
         

         }}>{"My tasks"}</Text>
</View>
  </View>

<View
style={{
  width:width/1.37,
 height:height/10,
 //padding:5,
 // backgroundColor:"#0f0",
  flexDirection:'row',
  justifyContent:"space-between",
 alignItems:"center",
 marginHorizontal:-55
}}
>


<View
        style={{
          width: width/1.7,
          alignSelf: 'center',
          padding: 5,
          height: height/16,
        }}>
        <TextInput
         
          style={{
            backgroundColor: "#FFFF",
            // borderColor: color.babyblue,
            // borderWidth: 2,
            borderRadius: height / 0.02,
            paddingRight: 16,
            paddingLeft: 16,
            color: color.blue,
            fontSize:14
          }}
          placeholder="Search"
          placeholderTextColor={color.grey}
          value={search_key}
          onChangeText={value => {
            Setsearch_key(value)
            search(value)
          }}
        />
        </View>


<TouchableOpacity
style={{
  width:45,
  height:45,
 // padding:12,
  alignItems:"center",
  justifyContent:"center",
  // marginTop:15,
  // marginHorizontal:15,
 backgroundColor:"#ead3d385",
 borderRadius:50
}}
onPress={()=>{
  
  navigation.navigate('Calendar'); 

}}
>
<Image
                          source={more}
                          style={{
                            width: 24,
                            height: 24,
    
                          }} />
                          </TouchableOpacity>


      </View>

    </View>
  
 
 <View
 style={{
  padding:20,
 //backgroundColor:color.Accent,
//  flexDirection:"row",
//  justifyContent:"space-between"
  
 }}>
 <Text
         style={{
           fontSize:17,
           fontFamily:'PTSerif-Bold',
           color:color.support1,
         // marginVertical:5

         }}>{"Today"}</Text>
  



  <FlatList 
      data={searchResults.length > 0 ? searchResults : Today}
      contentContainerStyle={{
     // backgroundColor:"#0f0",
        // marginTop: 10,
        paddingHorizontal: 10,
       //paddingBottom: 20,
      }}
       maxHeight={120}
       
      showsVerticalScrollIndicator={true}
    
     keyExtractor={(item, index) => `pro-${index}`}
     renderItem={({ item, index }) => {
                            return (
                              <>
                               <Animatable.View
                      animation={"fadeInDown"}
                      key={index}
                     delay={index * 3}>
 
          <View
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

        <TouchableOpacity
        style={{
          marginHorizontal:5,
         // backgroundColor:"#00f"
        }}
        onPress={()=>{
          toggleItemCheckToday(index)
        }}
         >
          <View
          style={{
             width:20,
             height:20,
             borderRadius:10,
             borderWidth:2,
             borderColor:color.Accent,
             backgroundColor:item.itemChecked?color.Accent:null
           }}>

          </View>
  

       </TouchableOpacity>



      <Text
              style={{
                fontSize:15,
                fontFamily:'PTSerif-Regular',
                color:color.support1,
              

              }}>{item.taskName}</Text>
              </View>
            <View
            style={{
             padding:5,
             backgroundColor:color.Accent,
             borderRadius:20,
            }}>                 

                                <Text
              style={{
                fontSize:15,
                fontFamily:'PTSerif-RegularRegular',
                color:"#000",
              }}>{item.label}</Text>
                        </View> 

                            </View>
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
                                    source={noproject}
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
                                    No Tasks add Today
                                  </Text>
                                </View>
                              );
                            }}
                />

  

</View>                 


<View
 style={{
  padding:20,
 //backgroundColor:color.Accent,
//  flexDirection:"row",
//  justifyContent:"space-between"
  
 }}>
 <Text
         style={{
           fontSize:17,
           fontFamily:'PTSerif-Bold',
           color:color.support1,
         // marginVertical:5
          marginTop:-20
         }}>{"Tomorrow"}</Text>
  

  <FlatList 
   data={searchResults.length > 0 ? searchResults : Tomorrow}
      contentContainerStyle={{
     // backgroundColor:"#0f0",
       //  marginTop: 10,
        paddingHorizontal: 10,
       //paddingBottom: 20,
      }}
       maxHeight={180}
      
      showsVerticalScrollIndicator={true}
     keyExtractor={(item, index) => `pro-${index}`}
     renderItem={({ item, index }) => {
                            return (
                              <>
                               <Animatable.View
                      animation={"fadeInDown"}
                      key={index}
                     delay={index * 3}>
 
          <View
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

        <TouchableOpacity
        style={{
          marginHorizontal:5,
         // backgroundColor:"#00f"
        }}
        onPress={()=>{
          toggleItemCheckTomorrow(index)
        }}
         >
          <View
          style={{
             width:20,
             height:20,
             borderRadius:10,
             borderWidth:2,
             borderColor:color.Accent,
             backgroundColor:item.itemChecked?color.Accent:null
           }}>

          </View>
  

       </TouchableOpacity>



      <Text
              style={{
                fontSize:15,
                fontFamily:'PTSerif-Regular',
                color:color.support1,
              

              }}>{item.taskName}</Text>
              </View>
            <View
            style={{
             padding:5,
             backgroundColor:color.Accent,
             borderRadius:20,
            }}>                 

                                <Text
              style={{
                fontSize:15,
                fontFamily:'PTSerif-RegularRegular',
                color:"#000",
              }}>{item.label}</Text>
                        </View> 

                            </View>
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
                                    source={noproject}
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
                                    No Tasks add Tomorrow
                                  </Text>
                                </View>
                              );
                            }}
                />

  

</View>                 

<View
 style={{
  padding:20,
 //backgroundColor:color.Accent,
//  flexDirection:"row",
//  justifyContent:"space-between"
  
 }}>
 <Text
         style={{
           fontSize:17,
           fontFamily:'PTSerif-Bold',
           color:color.support1,
           marginTop:-20

         }}>{"This Week"}</Text>
  

  <FlatList 
      data={searchResults.length > 0 ? searchResults : ThisWeek}
      contentContainerStyle={{
     // backgroundColor:"#0f0",
       //  marginTop: 10,
        paddingHorizontal: 10,
       //paddingBottom: 20,
      }}
       maxHeight={140}
      
      showsVerticalScrollIndicator={true}
     keyExtractor={(item, index) => `pro-${index}`}
     renderItem={({ item, index }) => {
                            return (
                              <>
                               <Animatable.View
                      animation={"fadeInDown"}
                      key={index}
                     delay={index * 3}>
 
          <View
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

        <TouchableOpacity
        style={{
          marginHorizontal:5,
         // backgroundColor:"#00f"
        }}
        onPress={()=>{
          toggleItemCheckWeek(index)
        }}
         >
          <View
          style={{
             width:20,
             height:20,
             borderRadius:10,
             borderWidth:2,
             borderColor:color.Accent,
             backgroundColor:item.itemChecked?color.Accent:null
           }}>

          </View>
  

       </TouchableOpacity>



      <Text
              style={{
                fontSize:15,
                fontFamily:'PTSerif-Regular',
                color:color.support1,
              

              }}>{item.taskName}</Text>
              </View>
            <View
            style={{
             padding:5,
             backgroundColor:color.Accent,
             borderRadius:20,
            }}>                 

                                <Text
              style={{
                fontSize:15,
                fontFamily:'PTSerif-RegularRegular',
                color:"#000",
              }}>{item.label}</Text>
                        </View> 

                            </View>
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
                                    source={noproject}
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
                                    No Tasks add this Week
                                  </Text>
                                </View>
                              );
                            }}
                />

  

</View>

      </View>
    </>
  )
}

export default mytasks;