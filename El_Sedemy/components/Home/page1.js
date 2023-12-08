import * as React from 'react';
import { View, Text, StatusBar, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default class page1 extends React.Component {


  constructor() {
    super();
    this.state = {


    }
  }

  render() {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.openDrawer()
            // openDrawer
          }}
          style={{
            width: '85%',
            height: 50,
             
            alignItems: 'flex-start',
           
            margin: 20,

          }}
        >
         <FontAwesome5 
         name='bars'
         size={30}
         />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}
        >
          <Text
            style={{
              fontSize: 30
            }}
          >
            page 1
          </Text>



        </View>
      </>
    )
  }
}
