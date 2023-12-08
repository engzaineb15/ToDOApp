
import { FLOWBASEANNOTATION_TYPES } from '@babel/types';
import * as React from 'react';
import { Text, View, Modal, Dimensions, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, StatusBar, Mod } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ModalHome from 'react-native-modalbox';

import { photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23 } from './constantApp/image'
import { checkPluginState } from 'react-native-reanimated/lib/reanimated2/core';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      signin: true,
      select: false,
      select_a: false,
      select_s: false,

    }
  }

  sign_in(user, pass) {
    var username = 'user'
    var password = '1234'
    var adminname='admin'
    var adminpassword='5678'
    if (user == '' && pass == '') {
      this.setState({ signin: true })
    } else if(this.state.select_s==true) {
      if (user == username) {
        if (pass == password) {
          this.setState({ signin: true })
          alert('Done succecfully')
        } else { alert('This password is not correct. ') }

      } else { alert('This user name is not correct. ') }

    }else if(this.state.select_a==true) {
      if (user == adminname) {
        if (pass == adminpassword) {
          this.setState({ signin: true })
          alert('Done succecfully')
        } else { alert('This password is not correct. ') }

      } else { alert('This user name is not correct. ') }

    }else if(this.state.select_a==false&&this.state.select_s==false){
      alert('Select user type first')
    }


  }
  check_a(select){
  
   if(select!=true){
    this.setState({select_s:false})
   }
  }
  check_s(select){
    if(select!=true){
     this.setState({select_a:false})
    }
   }


  render() {
    return (
      <>
        {this.state.signin ? (<>
          <ScrollView>
            <View style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#fff',
              paddingHorizontal: 30,
              paddingTop: 40
            }}>
              <Image source={require('./assest/edu.jpg')} size={20} style={{
                alignSelf: 'center',
                borderRadius: 120,
                marginBottom: 15
              }}></Image>
              <Text style={{
                color: '#3db9c9',
                fontSize: 30,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>E-Learning</Text>
              <TouchableOpacity style={{
                borderRadius: 15,
                height: 50, width: '100%',
                backgroundColor: '#e2e2e2',
                color: '#4f4646',
                fontSize: 20,
                paddingHorizontal: 20,
                marginVertical: 15,
                justifyContent: 'center'
              }}
                onPress={() => {
                  this.setState({ select:!this.state.select })
                }}
              >
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <Text
                    style={{
                      color: '#4f4646',
                      fontSize: 30,

                    }}>+</Text>

                  <Text style={{
                    color: '#4f4646',
                    fontSize: 18,

                  }}>Select user type</Text>
                </View>

              </TouchableOpacity>
              {this.state.select ? (<>
                <View style={{
                  height: 100,
                  width: '100%',
                  borderRadius: 15,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  elevation: 10,
                  padding:20,
                }}>
<View style={{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginBottom:10,
}}><TouchableOpacity style={{
  height:20,
  width:20,
  borderRadius:10,
  backgroundColor:this.state.select_a?'#4f4646':'#fff',
  borderWidth:2,
  borderColor:'#4f4646'
}}
onPress={()=>{
  this.setState({select_a:!this.state.select_a})
  this.check_a(this.state.select_a)
}}
></TouchableOpacity>
   <Text style={{
                    color: '#4f4646',
                    fontSize: 18,
                  }}>Admin</Text>
                  
</View>
<View style={{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginBottom:10,
}}><TouchableOpacity style={{
  height:20,
  width:20,
  borderRadius:10,
  backgroundColor:this.state.select_s?'#4f4646':'#fff',
  borderWidth:2,
  borderColor:'#4f4646'
}}onPress={()=>{
  this.setState({select_s:!this.state.select_s})
  this.check_s(this.state.select_s)
}}></TouchableOpacity>
   <Text style={{
                    color: '#4f4646',
                    fontSize: 18,
                  }}>Student</Text>
                  
</View>
                 
                </View>
              </>) : null}

              <TextInput style={{
                borderRadius: 15,
                height: 50, width: '100%',
                backgroundColor: '#e2e2e2',
                color: '#4f4646',
                fontSize: 18,
                paddingHorizontal: 20,
                marginVertical: 15
              }}
                placeholder={'Enter user name'}
                placeholderTextColor={'#4f4646'}
                value={(this.state.username)}
                onChangeText={(newuser) => {
                  this.setState({ username: newuser })
                }}
              ></TextInput>
              <TextInput style={{
                borderRadius: 15,
                height: 50, width: '100%',
                backgroundColor: '#e2e2e2',
                color: '#4f4646',
                fontSize: 18,
                paddingHorizontal: 20,
                marginVertical: 15,
              }}
                placeholder={'Enter password'}
                placeholderTextColor={'#4f4646'}
                value={(this.state.password)}
                onChangeText={(newpass) => {
                  this.setState({ password: newpass })
                }}
              ></TextInput>
              <TouchableOpacity style={{
                height: 50,
                width: '50%',
                backgroundColor: '#3db9c9',
                borderRadius: 15,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 50,
                marginBottom: 60
              }}
                onPress={() => {
                  this.sign_in(this.state.username, this.state.password)
                }}
              >
                <Text style={{
                  color: '#fff',
                  fontSize: 25,
                }}>sign in</Text>
              </TouchableOpacity>


            </View>
          </ScrollView>
        </>) : null}

      </>

    );
  }
}