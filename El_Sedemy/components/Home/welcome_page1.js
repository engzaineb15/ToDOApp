import * as React from 'react';
import { View, Text, StatusBar, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';


export default class welcome_page1 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#15215151"
        }}
      >
        <Text
          style={{
            fontSize: 30
          }}
        >
          hello to my app
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Drawer')  
            // openDrawer
                  }}
          style={{
            width: '85%',
            height: 50,
            backgroundColor: '#0ff',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 20,

          }}
        >
          <Text>
          go to drawer pages

          </Text>
        </TouchableOpacity>


      </View>
    )
  }
}
