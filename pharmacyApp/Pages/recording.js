import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Button,
  Dimensions,
  Modal,
  TextInput,
  Image,
  
} from 'react-native';
import Permissions from 'react-native-permissions';
import AudioRecord from 'react-native-audio-record';
import Sound from 'react-native-sound';
import {Buffer} from 'buffer';
import LinearGradient from 'react-native-linear-gradient';
import {timeStamp} from 'console';

export default class AddAudio extends Component {
  sound = null;
  state = {
    audioFile: '',
    recording: false,
    loaded: false,
    paused: true,

    recordTime: '00:00:00',
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '00:00:00',
    duration: '00:00:00',
    recordSecs: 0,
  };

  async componentDidMount() {
    await this.chekPermission();

    const options = {
      sampleRate: 16000,
      channels: 1,
      bitsPerSample: 16,
      wavFile: 'tesr.wav',
    };

    AudioRecord.init(options);

    AudioRecord.on('data', data => {
      const chunk = Buffer.from(data, 'base64');
      // console.log('chunk size', chunk.byteLength)
    });
  }

  chekPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Cool Photo App needs access to your camera',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can awesome pictuers.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    const p = await Permissions.check('microphone');
    console.log('permission check', p);

    if (p === 'authorized') return;
    return this.requestPermission();
  };

  requestPermission = async () => {
    const p = await Permissions.request('microphone');
    //console.log('Permission request',p)
  };

  formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = num => (num < 10 ? '0' : '') + num;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  start = () => {
    console.log('start record');

    this.setState({
      audioFile: '',
      recording: true,
      loaded: false,
      recordTime: '00:00:00',
      recordSecs: 0,
      playTime: '00:00:00',
    });

    this.recordTimeInterval = setInterval(() => {
      this.setState(prevState => {
        const {recordSecs} = prevState;
        const newRecordSecs = recordSecs + 1;
        return {
          recordTime: this.formatTime(newRecordSecs),
          recordSecs: newRecordSecs,
        };
      });
    }, 1000);

    AudioRecord.start();
  };

  stop = async () => {
    if (!this.state.recording) return;
    console.log('stop record');

    clearInterval(this.recordTimeInterval); // Clear the interval

    let audioFile = await AudioRecord.stop();

    console.log('audioFile', audioFile);

    this.setState({audioFile, recording: false});
  };

  load = () => {
    return new Promise((resolve, reject) => {
      if (!this.state.audioFile) {
        return reject('file path is empty');
      }

      this.sound = new Sound(this.state.audioFile, '', error => {
        if (error) {
          console.log('failed to load file ', error);
        }

        this.setState({loaded: true});
        return resolve();
      });
    });
  };

  play = async () => {
    if (!this.state.loaded) {
      try {
        await this.load();
      } catch {
        console.log(error);
      }
    }

    this.setState({paused: false});
    this.setState({playTime: '00:00:00'});
    Sound.setCategory('Playback');

    this.playTimeInterval = setInterval(() => {
      this.setState(prevState => {
        const {currentDurationSec} = prevState;
        const newDurationSec = currentDurationSec + 1;
        return {
          playTime: this.formatTime(newDurationSec),
          currentDurationSec: newDurationSec,
        };
      });
    }, 1000);

    this.sound.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
      this.setState({paused: true});
      clearInterval(this.playTimeInterval); // Clear the play interval
    });
  };

  pause = () => {
    this.sound.pause();
    this.setState({paused: true});
  };

  render() {
    const {recording, paused, audioFile} = this.state;
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffff',
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
          {'الستجيلات الصوتية'}
        </Text>
      </View>
          {!recording ? (
            <Image
              source={require('./assets/voice-assistant.png')}
              style={{
                width: 80,
                height: 80,
                alignSelf: 'center',
                marginTop: 40,
              }}
            />
          ) : (
            <Image
              source={require('./assets/voice.png')}
              style={{
                width: 80,
                height: 80,
                alignSelf: 'center',
                marginTop: 40,
              }}
            />
          )}
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: '#000',
              marginTop: 40,
            }}>
            {this.state.recordTime}
          </Text>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 20,
              marginTop: 40,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.start();
              }}
              style={{
                width: '85%',
                height: 55,
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 10,
                alignSelf: 'center',
              }}>
              <LinearGradient
                colors={recording ? ['#ddd', '#ddd'] : ['#f1a420', '#007c84']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#FFF',
                  }}>
                  Record{' '}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.stop();
              }}
              style={{
                width: '85%',
                height: 55,
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 10,
                alignSelf: 'center',
              }}>
              <LinearGradient
                colors={recording ? ['#f1a420', '#007c84'] : ['#ddd', '#ddd']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#FFF',
                  }}>
                  Stop{' '}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {paused ? (
              <TouchableOpacity
                disabled={!audioFile}
                onPress={() => {
                  this.play();
                }}
                style={{
                  width: '85%',
                  height: 55,
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 10,
                  alignSelf: 'center',
                }}>
                <LinearGradient
                  colors={audioFile ?  ['#f1a420', '#007c84'] : ['#ddd', '#ddd']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      color: '#FFF',
                    }}>
                    Play{' '}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  this.pause();
                }}
                style={{
                  width: '85%',
                  height: 55,
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 10,
                  alignSelf: 'center',
                }}>
                <LinearGradient
                  colors={audioFile ?  ['#f1a420', '#007c84'] : ['#ddd', '#ddd']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      color: '#FFF',
                    }}>
                    Pause{' '}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </>
    );
  }
}
