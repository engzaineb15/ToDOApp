
import * as React from 'react'
import { Text, View, StatusBar, TouchableOpacity, Modal, TextInput, ScrollView, ActivityIndicator, Image, AsyncStorage } from 'react-native'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      arr: [
        {
          name: 'ali',
          age: 20
        }, {
          name: 'mido',
          age: 25
        },
      ]


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
        }}>Home </Text>


        {this.state.arr.map((item, index) => <>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              borderWidth: 2,
              alignSelf: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center'
            }}
            onPress={() => {
              this.props.navigation.navigate("settingScreen",
                {
                  obj: JSON.stringify(item)
                }
                
                )
            }}>
            <Text style={{
              fontSize: 25
            }}>{item.name}</Text>
            <Text style={{
              fontSize: 25
            }}>{item.age}</Text>
          </TouchableOpacity>

        </>)}


      </>
    );
  }
}

