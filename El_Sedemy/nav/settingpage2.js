
import * as React from 'react'
import { Text, View, StatusBar, TouchableOpacity, Modal, TextInput, ScrollView, ActivityIndicator, Image, AsyncStorage } from 'react-native'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      obj: JSON.parse(this.props.navigation.getParam("obj"))




    }


  }

  async store_nav() {
    await AsyncStorage.setItem("user_store_data", "auth")
    this.props.navigation.navigate("authStackScreens")

  }


  render() {
    return (

      <>

        <Text style={{
          alignSelf: 'center',
          color: '#f00',
          fontSize: 30,
          marginVertical: 50
        }}>Setting </Text>


        <Text style={{
          alignSelf: 'center',
          color: '#f00',
          fontSize: 30,
          marginVertical: 50
        }}>{this.state.obj.name + "---" + this.state.obj.age} </Text>



        <TouchableOpacity
          style={{
            width: '80%',
            height: 50,
            backgroundColor: '#f00',
            alignSelf: 'center'
          }}
          onPress={() => {
            this.store_nav()
          }}
        ><Text style={{
          alignSelf: 'center',
          color: '#fff',
          fontSize: 30,

        }}>LogOut From Here </Text></TouchableOpacity>
      </>
    );
  }
}

