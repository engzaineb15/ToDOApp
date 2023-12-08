
import { FLOWBASEANNOTATION_TYPES } from '@babel/types';
import * as React from 'react';
import { Text, View, Modal, Dimensions, StyleSheet,FlatList, Image, ScrollView, TextInput, TouchableOpacity, StatusBar, Mod } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as Animatable from 'react-native-animatable';


import AnimatedLottieView from 'lottie-react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ckecked_edit: false,
      tomorrow_check: false,
      edit_voice: [
  
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
   
      ],
      orginal_voice: [

        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
        {
          patient: 'التسجيل الاول',
          treatment: 'Tooth Extroction',
          date: '5-9-2022',
          time: '11:30 - 12:30',
          done: false

        },
  
      ],
      time:[
       '9 - 10',
       '10 - 11',
       '11 - 12'
      ],
      visable:false,
      patientt:'',
      datee:'',
      timee:'',
      treatmentt:'',

    }
  }

  // add_new() {
  //   let edit_voice = this.state.edit_voice
  //   let newObj = {
  //     patient:this.state.patientt,
  //     treatment:this.state.treatmentt,
  //     date:this.state.datee,
  //     time: this.state.timee,
  //   }
  //   edit_voice.push(newObj)
  //   this.setState({
  //     edit_voice, patientt: '',
  //     treatmentt: '', datee: '',timee:''
  //   })
  // }


  delet_sound(index)
    {
      let edit_voice=this.state.edit_voice
      edit_voice.splice(index,1)
      this.setState({edit_voice:edit_voice})
    }



    delet_orginal(index)
    {
      let orginal_voice=this.state.orginal_voice
      orginal_voice.splice(index,1)
      this.setState({orginal_voice:orginal_voice})
    }




      checked() {
        let ckecked_edit = this.state.ckecked_edit
        this.setState({ ckecked_edit: true, tomorrow_check: false })
      }


      checked_orginal() {
        let ckecked_edit = this.state.ckecked_edit
        this.setState({ tomorrow_check: true, ckecked_edit: false })
      }

    
  //     check_time(index){
  //       let time=this.state.time    
  // }

  render() {
    return (
      <>
       <View
          style={{
            flex: 1,
            backgroundColor: '#ffff',
          }}>
          <View
        style={{
          height: 60,
          backgroundColor: '#f1a420',
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          marginBottom: 30,
        }}>
        <Text
          style={{
            flex: 1,
            color: '#fff',
            fontSize: 20,
            textAlign: 'center',
            // alignSelf: 'center',
            // fontWeight: '700',
          }}>
          {'التعديلات الصوتية'}
        </Text>
      </View>

          <View style={{

            height: 60,
            width: '90%',
            backgroundColor: '#007c84',
            shadowColor: '#000',
            shadowRadius: 10,
            shadowOpacity: 0.26,
            borderRadius: 20,
            shadowOffset: { height: 1, width: 0 },
            elevation: 10,
            flexDirection: 'row',
            alignItems: 'center',
            // marginVertical: 10,
            alignSelf: 'center',

          }}>
            <TouchableOpacity style={{
              height: '100%',
              width: '50%',
              backgroundColor: this.state.ckecked_edit ? '#f1a420' : null,
              borderRadius: 20,
              alignItems: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
              onPress={() => {
                this.checked()
              }}>
              <Text style={{
                fontSize: 20,
                fontWeight:"700",
              //  marginTop:-10,
                color: '#fff',

              }}>{"الصوت المعدل"}</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{
              height: '100%',
              width: '50%',
              backgroundColor: this.state.tomorrow_check ? '#f1a420' : null,
              borderRadius: 20,
              alignItems: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }} onPress={() => {
              this.checked_orginal()
            }}>
              <Text style={{
                fontSize: 20,
                fontWeight:"700",
              //  marginTop:-10,
                color: '#fff',

              }}>{'الصوت الاصلي'}</Text></TouchableOpacity>
          </View>



          {this.state.ckecked_edit ? (

            <>
              <ScrollView>
                <View style={{
                  padding:10,
                  // height: '70%',
                   width: '95%',
                   alignSelf:"center",
                  alignItems: 'center',
                  justifyContent:"center",
             // backgroundColor:"#00f"
                }}>
                      <FlatList
                       data={this.state.edit_voice}
                       contentContainerStyle={{
                         
                        marginVertical:20,
                        paddingHorizontal: 10,
                        paddingBottom: 10,
                      //  backgroundColor:"#0f0"
                      }}
                       
                           showsVerticalScrollIndicator={false}
                           keyExtractor={(item, index) => `pro-${index}`}
                           renderItem={({ item, index }) => {
                            return (
                              <>
                   
                   <TouchableOpacity 
                   style={{
                     // padding:20,
                         height: 70,
                        width: '85%',
                        backgroundColor: '#fff',
                        marginBottom: 20,
                        shadowColor: '#000',
                        shadowOpacity: 0.26,
                        elevation: 4,
                        paddingVertical: 10,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        borderRadius:20,
                      }}>

                        <View style={{
                          //backgroundColor: '#f0f',
                         alignItems:"flex-end"
                        }}>

                          <Text style={{
                            fontSize: 20,
                            fontFamily:'Amiri-Bold',
                           // marginTop:-10,
                            color: '#000',
                          }}>{item.patient}</Text>
                          <Text style={{
                            fontSize: 15,
                            fontFamily:'Amiri-Bold',
                             //marginTop:-10,
                            color: '#666',
                            
                          }}>{"00:00:30"}</Text>

                        </View>

                        <View style={{
                         //  backgroundColor: '#f0f',
                          flexDirection:'row-reverse',
                         // width: '45%',
                          justifyContent: 'space-between'

                        }}>

                          {/* <Text style={{
                            fontSize: 18,
                            fontFamily:'Amiri-Bold',
                      //   marginTop:-10,
                            color: '#000',
                          }}>{item.time}</Text> */}


                          <TouchableOpacity style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowColor: '#000',
                            shadowOpacity: 0.26,
                            elevation: 5,
                            shadowRadius: 10,
                            backgroundColor:'#fff',
                            // alignItems: 'center',
                            // justifyContent: 'center',
                          }} onPress={() => {
                            this.delet_sound(index)
                          }}>
                            <Text style={{
                              fontSize: 18,
                              fontFamily:'Amiri-Bold',
                              alignSelf:"center",
                              justifyContent:"center",
                            //  marginTop:-15,
                              color: '#000',
                            }}>x</Text>
                          </TouchableOpacity></View>


                      </TouchableOpacity>
                   
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
                                    source={require('./assets/nosongs.json')}
                                    autoPlay
                                    loop
                                    style={{height: 200, width: '100%'}}
                                    resizeMode="contain"
                                  />
                                  <Text
                                    style={{
                                      fontSize:20,
                                      textAlign: 'center',
                                      color: "#f1a420",
                                    }}>
                                   {"لم يتم اضافة اي صوت"}
                                  </Text>
                                </View>
                              );
                            }}
                      />
               

                </View>


              </ScrollView>
            </>
          ) : null}

          {this.state.tomorrow_check ? (


            <>
              <ScrollView>
                <View style={{
                   padding:10,
                   // height: '70%',
                    width: '95%',
                    alignSelf:"center",
                   alignItems: 'center',
                   justifyContent:"center",
              // backgroundColor:"#00f"

                }}>
                  <FlatList
                       data={this.state.orginal_voice}
                       contentContainerStyle={{
                         
                        marginVertical:20,
                        paddingHorizontal: 10,
                        paddingBottom: 10,
                      //  backgroundColor:"#0f0"
                      }}
                       
                           showsVerticalScrollIndicator={false}
                           keyExtractor={(item, index) => `pro-${index}`}
                           renderItem={({ item, index }) => {
                            return (
                              <>
                   
                   <TouchableOpacity 
                   style={{
                     // padding:20,
                         height: 70,
                        width: '85%',
                        backgroundColor: '#fff',
                        marginBottom: 20,
                        shadowColor: '#000',
                        shadowOpacity: 0.26,
                        elevation: 4,
                        paddingVertical: 10,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        borderRadius:20,
                      }}>

                        <View style={{
                          //backgroundColor: '#f0f',
                         alignItems:"flex-end"
                        }}>

                          <Text style={{
                            fontSize: 20,
                            fontFamily:'Amiri-Bold',
                           // marginTop:-10,
                            color: '#000',
                          }}>{item.patient}</Text>
                          <Text style={{
                            fontSize: 15,
                            fontFamily:'Amiri-Bold',
                             //marginTop:-10,
                            color: '#666',
                            
                          }}>{"00:00:30"}</Text>

                        </View>

                        <View style={{
                         //  backgroundColor: '#f0f',
                          flexDirection:'row-reverse',
                         // width: '45%',
                          justifyContent: 'space-between'

                        }}>

                          {/* <Text style={{
                            fontSize: 18,
                            fontFamily:'Amiri-Bold',
                      //   marginTop:-10,
                            color: '#000',
                          }}>{item.time}</Text> */}


                          <TouchableOpacity style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowColor: '#000',
                            shadowOpacity: 0.26,
                            elevation: 5,
                            shadowRadius: 10,
                            backgroundColor:'#fff',
                            // alignItems: 'center',
                            // justifyContent: 'center',
                          }} onPress={() => {
                            this.delet_orginal(index)
                          }}>
                            <Text style={{
                              fontSize: 18,
                              fontFamily:'Amiri-Bold',
                              alignSelf:"center",
                              justifyContent:"center",
                            //  marginTop:-15,
                              color: '#000',
                            }}>x</Text>
                          </TouchableOpacity></View>


                      </TouchableOpacity>
                   
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
                                    source={require('./assets/nosongs.json')}
                                    autoPlay
                                    loop
                                    style={{height: 200, width: '100%'}}
                                    resizeMode="contain"
                                  />
                                  <Text
                                    style={{
                                      fontSize:20,
                                      textAlign: 'center',
                                      color: "#f1a420",
                                    }}>
                                   {"لم يتم اضافة اي صوت"}
                                  </Text>
                                </View>
                              );
                            }}
                      />

                </View>


              </ScrollView>
            </>
          ) : null}





        </View>

      </>

    );
  }
}