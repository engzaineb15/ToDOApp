import * as React from 'react';
import {Text, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';

export default class Detils extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      id: 0,
    };
  }

  componentDidMount() {
    let passedData = this.props.navigation.getParam('pressObj');
    // console.log(passedData);
    this.setState({
      title: passedData.item_title,
      id: passedData.item_id,
    });
  }

  componentWillUnmount() {
    let refrish = this.props.navigation.getParam('refrish');
    refrish();
  }

  update() {
    let id = this.state.id;
    let data_to_send = {
      item_title: this.state.title,
      item_id: id,
    };

    axios
      .post('https://camp-coding.tech/test_api/update_list.php', data_to_send)
      .then(res => {
        if (res.data == 'success') {
          this.props.navigation.goBack();
        }
      });
  }

  render() {
    return (
      <>
        <Text
          style={{
            alignSelf: 'center',
            color: '#0f0',
            fontSize: 30,
            marginVertical: 50,
          }}>
          Item Detils
        </Text>

        <TextInput
          style={{
            width: '80%',
            borderWidth: 2,
            alignSelf: 'center',
            marginBottom: 50,
          }}
          value={this.state.title}
          onChangeText={val => {
            this.setState({title: val});
          }}
        />
        <TouchableOpacity
          style={{
            width: '80%',
            height: 50,
            borderWidth: 2,
            backgroundColor: '#f00',
            alignSelf: 'center',
            marginBottom: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.update();
          }}>
          <Text
            style={{
              fontSize: 20,
            }}>
            update
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}