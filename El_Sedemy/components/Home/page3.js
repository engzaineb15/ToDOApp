import * as React from 'react';
import { View, Text, StatusBar, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';


export default class page3 extends React.Component {


  constructor() {
    super();
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
          backgroundColor:"#f0f"
        }}
      >
        <Text
          style={{
            fontSize: 30
          }}
        >
          page 3
        </Text>



      </View>
    )
  }
}
