
import * as React from 'react'
import { Text, View, StatusBar, TouchableOpacity, Modal, TextInput, ScrollView, ActivityIndicator, Image, AsyncStorage } from 'react-native'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {




    }


  }


  render() {
    return (

      <>

        <Text style={{
          alignSelf: 'center',
          color: '#f00',
          fontSize: 30,
          marginVertical: 50
        }}>Login </Text>

        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: '#f00',
            alignSelf: 'center'
          }}
          onPress={() => {
// console.log(this.props)
this.props.navigation.navigate("signUpScreen")

          }}
        />
      </>
    );
  }
}

