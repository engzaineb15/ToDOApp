import React, {useState} from 'react';
import {Text, TouchableOpacity, View,TextInput} from 'react-native';
// import {COLORS, SIZES} from '../constant';
import Tts from 'react-native-tts';

import 'react-native-gesture-handler';
const TtsTest = () => {
  const [txt, setText] = useState('');
  function _HandleVoice(txt) {
    // Tts.setDefaultLanguage('ar-SA');
    Tts.setDefaultRate(0.5);
    Tts.setDefaultVoice('ar-language');
    Tts.setDefaultLanguage('ar');
    // Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
    // Tts.setDefaultVoice('ar-xa-x-arc-network');
    // Tts.setDefaultVoice('es-us-x-sfb-local');

    Tts.speak(txt);
  }

  // const [Words, setWords] = useState([
  //   {
  //     word: 'hello',
  //   },
  //   {
  //     word: 'Menna',
  //   },
  // ]);

  // function renderWords() {
  //   return Words.map(item => {
  //     return (
  //       <TouchableHighlight
  //         onPress={() => {
  //           _HandleVoice(item);
  //         }}
  //         style={{
  //           width: '90%',
  //           height: 55,
  //           alignSelf: 'center',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           backgroundColor: COLORS.dark60,
  //           marginTop: 20,
  //           borderRadius: SIZES.radius,
  //         }}>
  //         <Text>{item.word}</Text>
  //       </TouchableHighlight>
  //     );
  //   });
  // }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffff',
        // paddingHorizontal: 10,
        // paddingTop: 100,
      }}>
      <View
        style={{
          height: 60,
          backgroundColor: '#f1a420',
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          marginBottom: 30,
        }}>
        <Text
          style={{
            flex: 1,
            color: '#fff',
            fontSize: 20,
            textAlign: 'center',
            // alignSelf: 'center',
            // fontWeight: '700',
          }}>
          تحويل الأغانى
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingTop: 30,
        }}>
        <TextInput
          numberOfLines={7}
          editable
          multiline
          style={{
            width: '90%',
            height: 200,
            borderWidth: 2,
            borderRadius: 20,
            alignSelf: 'center',
            borderColor: '#f1a420',
            textAlignVertical: 'top',
          }}
          onChangeText={txt => {
            setText(txt);
          }}
        />

        <TouchableOpacity
          onPress={() => {
            _HandleVoice(txt);
          }}
          style={{
            width: '90%',
            height: 55,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            backgroundColor: '#007c84',
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: '#ffff',
            }}>
            تحويل النص لأغنيه{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: COLORS.white,
    //   }}>
    //   <TouchableHighlight
    //     onPress={() => {
    //       Tts.speak('If you press you meen you love us');
    //     }}
    //     style={{
    //       width: '90%',
    //       height: 55,
    //       alignSelf: 'center',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       backgroundColor: COLORS.bag10Bg,
    //       marginTop: 20,
    //       borderRadius: SIZES.radius,
    //     }}>
    //     <Text>SuBSCRIBE</Text>
    //   </TouchableHighlight>
    //   {renderWords()}
    // </View>
  );
};
export default TtsTest;
