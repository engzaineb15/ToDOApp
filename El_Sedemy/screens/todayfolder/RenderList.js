import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      userName: '',
      loading: false,
      loading_btn: false,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    this.setState({loading: true});
    axios.get('https://camp-coding.tech/test_api/select_list.php').then(res => {
      // console.log(res.data)
      let myData = res.data;
      // for(let i=0;i<myData.length;i++){
      //   myData[i].loading=false
      // }
      myData.map(item => (item.loading = false));
      this.setState({arr: myData, userName: ''});
      this.setState({loading: false});
    });
  }

  saveNewItem() {
    this.setState({
      loading_btn: true,
    });
    let data_to_send = {
      item_name: this.state.userName,
    };
    axios
      .post('https://camp-coding.tech/test_api/add_item.php', data_to_send)
      .then(res => {
        console.log(res.data);
        if ((res.data = 'success')) {
          this.getData();
        }
        this.setState({
          loading_btn: false,
        });
      });
  }

  deleteitem(index) {
    let arr = this.state.arr;
    arr[index].loading = true;
    this.setState({
      arr,
    });

    let data_to_send = {
      item_id: arr[index].item_id,
    };
    axios
      .post('https://camp-coding.tech/test_api/delete_item.php', data_to_send)
      .then(res => {
        if (res.data == 'success') {
          arr.splice(index, 1);
          this.setState({arr});
        } else {
          arr.map(item => (item.loading = false));
          this.setState({
            arr,
          });
        }
      });
  }

  // refrish() {
  //   this.getData();
  // }

  render() {
    return (
      <>
        <Text
          style={{
            alignSelf: 'center',
            color: '#f00',
            fontSize: 30,
            marginVertical: 50,
          }}>
          List
        </Text>

        <TextInput
          style={{
            width: '80%',
            borderWidth: 2,
            alignSelf: 'center',
            marginBottom: 50,
          }}
          value={this.state.userName}
          onChangeText={val => {
            this.setState({userName: val});
          }}
        />
        <TouchableOpacity
          style={{
            width: '80%',
            height: 50,
            borderWidth: 2,
            backgroundColor: '#0d0',
            alignSelf: 'center',
            marginBottom: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.saveNewItem();
          }}>
          {this.state.loading_btn ? (
            <ActivityIndicator color={'#000'} />
          ) : (
            <Text
              style={{
                fontSize: 20,
              }}>
              add item
            </Text>
          )}
        </TouchableOpacity>
        <ScrollView>
          {this.state.loading ? (
            <ActivityIndicator color={'#00ffff'} size={35} />
          ) : (
            this.state.arr.map((item, index) => (
              <>
                <TouchableOpacity
                  style={{
                    width: '90%',
                    height: 50,
                    borderWidth: 2,
                    alignSelf: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('Detils', {
                      pressObj: item,
                      refrish: () => {
                        this.getData();
                      },
                    });
                    // this.deleteitem(index)
                    // console.log(item)
                  }}>
                  {item.loading ? (
                    <ActivityIndicator color={'red'} />
                  ) : (
                    <TouchableOpacity
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#f00',
                        borderRadius: 40 / 2,
                      }}></TouchableOpacity>
                  )}

                  <Text
                    style={{
                      fontSize: 25,
                    }}>
                    {item.item_title}
                  </Text>
                </TouchableOpacity>
              </>
            ))
          )}
        </ScrollView>
      </>
    );
  }
}