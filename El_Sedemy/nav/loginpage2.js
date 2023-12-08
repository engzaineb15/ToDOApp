
import * as React from 'react'
import {
  Text, View, StatusBar,
  TouchableOpacity, Modal, TextInput, ScrollView, ActivityIndicator, Image, AsyncStorage
} from 'react-native'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      value: ''


    }


  }

  async save_data() {
    await AsyncStorage.setItem("userName", JSON.stringify(this.state.value))
    this.nav()
  }

  nav() {
    this.props.navigation.navigate("signUpScreen")

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

        {/* <TouchableOpacity
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
        /> */}

        <TextInput
          value={this.state.value}
          onChangeText={(n_val) => {
            this.setState({ value: n_val })
          }}
          style={{
            height: 70,
            width: 300,
            borderColor: "#f0f",
            borderWidth: 2,
            alignSelf: "center"
          }}

        />


        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: '#f00',
            alignSelf: 'center',
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => {
            // console.log(this.props)
            this.save_data()

          }}
        >

          <Text
            style={{
              fontSize: 20,
              color: "#fff"
            }}
          >
            save data
          </Text>
        </TouchableOpacity>


      </>
    );
  }
}

