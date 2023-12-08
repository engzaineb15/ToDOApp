import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Animated,
  ImageBackground,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {RFValue} from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable';
const Questionss = () => {
  const {width, height} = Dimensions.get('screen');

  const [examsList, setexamsList] = useState([
    {
      examname: 'Breast1',
      QuesNum: 20,
    },
    {
      examname: 'Breast2',
      QuesNum: 20,
    },
    {
      examname: 'Breast3',
      QuesNum: 24,
    },
    {
      examname: 'Breast4',
      QuesNum: 20,
    },
    {
      examname: 'Breast5',
      QuesNum: 20,
    },
    {
      examname: 'Breast6',
      QuesNum: 20,
    },
    {
      examname: 'Breast7',
      QuesNum: 20,
    },
    {
      examname: 'Breast8',
      QuesNum: 20,
    },
  ]);

  function renderBody() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            backgroundColor: '#479bc1c9',
            width: '100%',
            height: 130,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            padding: 15,
            marginBottom: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              //             backgroundColor: '#0f0',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 70,
              padding: 20,
            }}>
            <View
              style={{
                width: 40,
              }}>
              <TouchableOpacity>
                <FastImage
                  tintColor={'#fff'}
                  source={require('../arrow1.png')}
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#ffff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Exams
              </Text>
            </View>

            <View
              style={{
                width: 40,
              }}></View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 150,

              backgroundColor: '#479bc1c9',
              shadowColor: '#fff',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              marginBottom: 20,
              // alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              // padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              // alignItems: 'center',
            }}>
            {/*  */}
            <ImageBackground
              source={require('../homeCard.png')}
              style={{
                width: '100%',
                height: 150,
                flexDirection: 'row',
                padding: 10,
              }}>
              <FastImage
                // tintColor={'#82a7c9'}
                source={require('../examcard.png')}
                resizeMode="contain"
                style={{
                  width: 90,
                  height: 100,
                  alignSelf: 'center',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                  flex: 1,
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginBottom: 7,
                  }}>
                  {'Breast Exam'}
                </Text>

                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 14,
                  }}>
                  {'Topic: Breast '}
                </Text>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 14,
                  }}>
                  {'Time: 15 Min '}
                </Text>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 14,
                  }}>
                  {'Exam Deadline: 15 May '}
                </Text>
              </View>
            </ImageBackground>

            {/* <View
              style={{
                marginLeft: 10,
                flex: 1,
              }}>
              <Text
                style={{
                  color: '#000',
                }}>
                Breast
              </Text>
              <Text
                style={{
                  color: '#000',
                }}>
                Duration
              </Text>
            </View> */}

            {/* <TouchableOpacity>
              <FastImage
                // tintColor={'#82a7c9'}
                source={require('../next.png')}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        {/* {renderHeader()} */}
        {renderBody()}
      </View>
    </>
  );
};
export default Questionss;
