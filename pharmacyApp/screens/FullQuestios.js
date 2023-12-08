import React from 'react';
import {View, Text} from 'react-native';
const FullQuestios = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        // animation="fadeInRight"
        // delay={100}
        style={{
          // backgroundColor: '#ddd',
          width: '90%',
          alignSelf: 'center',
          padding: 10,
          marginTop: 10,
          // borderWidth: 1,
          // borderColor: "#293077"
        }}>
        <Text
          style={{
            fontSize: 15,
            color: '#146C94',
            fontWeight: 'bold',
            //  fontFamily: fontFamily,
          }}>
          من خصائص الاتحاد الكونفدرالى{' '}
        </Text>
      </View>
    </View>
  );
};
export default FullQuestios;

// import * as React from 'react';

// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Alert,
//   Modal,
//   BackHandler,
//   Dimensions,
//   Animated,
//   NativeModules,
//   AsyncStorage,
// } from 'react-native';

// import {
//   Container,
//   Spinner,
//   NativeBaseProvider,
//   // Icon
// } from 'native-base';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import Icon from 'react-native-vector-icons/FontAwesome5';
// import * as Animatable from 'react-native-animatable';
// //  import ProgressCircle from 'rn-animated-progress-circle';
// // import Counter from 'react-native-animated-counter';
// // import LinearGradient from 'react-native-linear-gradient';
// import NetInfo from '@react-native-community/netinfo';
// // import Header1 from './Header';
// import axios from 'axios';

// // import {
// //   Domain,
// //   color,
// //   fontFamily,
// //   appName,
// //   teacherName,
// //   teacherPhone,
// //   teacherPhoneTwo,
// //   subjectName,
// //  facebookLink,
// // } from '../Constants';

// // import * as Constants from '../Constants';
// // import {TabContext} from '../contexts/TabContext';
// const {width, height} = Dimensions.get('window');

// // import {RecyclerListView, LayoutProvider, DataProvider} from 'recyclerlistview';
// // const ViewTypes = {
// //   FULL: 0,
// //   HALF_LEFT: 1,
// //   HALF_RIGHT: 2,
// // };
// export default class FullQuestios extends React.Component {
//   // static contextType = TabContext;
//   constructor(props) {
//     super(props);

//     this.state = {
//       status: 'not_done',
//       fullDegree: '100%',
//       studenDegree: '50%',
//       visibleModal: false,
//       percent: '40%',
//       quizId: 1,
//       quiz_name: 'اسم الامتحان',
//       loading: false,
//       buttonLoading: false,
//       student_id: '133',
//       index: 1,
//       oldIndex: 0,
//       bottomConnectionMsg: new Animated.Value(-100),
//       connection_Status: 'Online',
//       questions: [
//         {
//           real_answers: [
//             'الاجابه الاولي',
//             'الاجابه التانيه',
//             'الاجابه الثالثه',
//             'الاجابه الرابعه',
//           ],
//         },
//         {
//           real_answers: [
//             'الاجابه الاولي',
//             'الاجابه التانيه',
//             'الاجابه الثالثه',
//             'الاجابه الرابعه',
//           ],
//         },
//         {
//           real_answers: [
//             'الاجابه الاولي',
//             'الاجابه التانيه',
//             'الاجابه الثالثه',
//             'الاجابه الرابعه',
//           ],
//         },
//         {
//           real_answers: [
//             'الاجابه الاولي',
//             'الاجابه التانيه',
//             'الاجابه الثالثه',
//             'الاجابه الرابعه',
//           ],
//         },
//         {
//           real_answers: [
//             'الاجابه الاولي',
//             'الاجابه التانيه',
//             'الاجابه الثالثه',
//             'الاجابه الرابعه',
//           ],
//         },
//       ],
//       EndScroll: 1,
//       arr: [{}],
//       LogoutModal: false,
//       failedgetDegreeOfExamModal: false,
//     };
//     // this._subscription;
//     this.scrollToIndex = this.scrollToIndex.bind(this);

//     this._rowRenderer = this._rowRenderer.bind(this);
//   }
//   componentWillUnmount() {
//     // this.backHandler.remove();
//     // this._subscription && this._subscription()
//     // let refrish = this.props.navigation.getParam('refrish')
//     // refrish()
//   }

//   async componentDidMount() {
//     this.forbidFunction();
//     const data = JSON.parse(await AsyncStorage.getItem('AllData'));
//     if (data != null) {
//       this.setState({
//         student_id: data.student_id,
//       });
//       this.selectQuestions();
//     }

//     const unsubscribe = NetInfo.addEventListener(async state => {
//       if (state.isConnected == true) {
//         this.setState({
//           connection_Status: 'Online',
//         });
//       } else {
//         this.setState({
//           connection_Status: 'Offline',
//         });
//       }
//     });

//     this.backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       this.backAction,
//     );
//   }
//   scrollToIndexFailed(error) {
//     const offset = error.averageItemLength * error.index;
//     this.flatListRef.scrollToOffset({offset});
//     setTimeout(() => {
//       this.flatListRef.scrollToIndex({index: error.index});
//     }, 2500);
//   }

//   allowFunction = async () => {
//     try {
//       const result = await NativeModules.PreventScreenshotModule.allow();
//       console.log(result);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   forbidFunction = async () => {
//     try {
//       const result = await NativeModules.PreventScreenshotModule.forbid();
//       console.log(result);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   backAction = () => {
//     if (this.state.visibleModal == true) {
//       BackHandler.exitApp();
//     } else {
//       this.setState({LogoutModal: true});

//       return true;
//     }
//   };
//   praviousFunction() {
//     this.setState({
//       index: this.state.index - 1,
//       oldIndex: this.state.oldIndex - 1,
//     });
//     this.scrollToIndex();
//   }
//   NextFunction() {
//     this.setState({
//       index: this.state.index + 1,
//       oldIndex: this.state.oldIndex + 1,
//     });
//     this.scrollToIndex();
//   }
//   // async selectQuestions() {
//   //   let data_to_send = {id: this.state.quizId};

//   //   axios
//   //     .post(
//   //       this.context.serverNewDomain + Domain + 'select_questions.php',
//   //       data_to_send,
//   //     )
//   //     .then((res) => {
//   //       // this.setState({});

//   //       if (res.data) {
//   //         // console.log(res.data);
//   //         if (res.data == 'error') {
//   //           Alert.alert(appName + '', 'هناك خطأ ما في استرجاع بيانات الامتحان');
//   //         } else {
//   //           var m = res.data.questions.length / 10;
//   //           m = Math.ceil(m);
//   //           var arr = [];
//   //           console.log('=================' + m);
//   //           for (var i = 1; i <= m; i++) {
//   //             arr.push(i + '');
//   //           }
//   //           this.setState({arr: arr});
//   //           let allQuestions = res.data.questions;
//   //           for (let i = 0; i < allQuestions.length; i++) {
//   //             const j = Math.floor(Math.random() * (i + 1));
//   //             let temp = allQuestions[i];
//   //             allQuestions[i] = allQuestions[j];
//   //             allQuestions[j] = temp;
//   //           }

//   //           this.setState({questions: allQuestions});
//   //         }
//   //       }
//   //       this.setState({loading: false});
//   //     });
//   // }

//   // renderModal() {
//   //   return (
//   //     // <Modal
//   //     //   animationType="slide"
//   //     //   // transparent={true}
//   //     //   visible={this.state.visibleModal}>
//   //     //   <ScrollView style={{marginBottom: 0}}>
//   //     //     <View style={{height: 40}} />
//   //     //     <View
//   //     //       style={{
//   //     //         flex: 1,
//   //     //         backgroundColor: '#fff',
//   //     //         justifyContent: 'center',
//   //     //         padding: 20,
//   //     //         // alignItems: 'center',
//   //     //       }}>
//   //     //       <View style={{alignItems: 'flex-start'}}>
//   //     //         {this.state.percent == '' ? (
//   //     //           <Animated.Text
//   //     //             style={{
//   //     //               fontSize: 12,
//   //     //               fontWeight: '900',
//   //     //              // //,
//   //     //               // marginBottom: 8,
//   //     //               textAlign: 'right',

//   //     //               transform: [
//   //     //                 {
//   //     //                   translateX:
//   //     //                     -(this.state.studenDegree / this.state.fullDegree) *
//   //     //                     (width * 0.85),
//   //     //                 },
//   //     //               ],
//   //     //             }}>
//   //     //             0%
//   //     //           </Animated.Text>
//   //     //         ) : (
//   //     //           <Animated.Text
//   //     //             style={{
//   //     //               fontSize: 12,
//   //     //               fontWeight: '900',
//   //     //               //,
//   //     //               // marginBottom: 8,
//   //     //               textAlign: 'right',

//   //     //               transform: [
//   //     //                 {
//   //     //                   translateX:
//   //     //                     -(this.state.studenDegree / this.state.fullDegree) *
//   //     //                     (width * 0.85),
//   //     //                 },
//   //     //               ],
//   //     //             }}>
//   //     //             {parseInt(this.state.percent)}%
//   //     //           </Animated.Text>
//   //     //         )}
//   //     //       </View>
//   //     //       <View
//   //     //         style={{
//   //     //           flexDirection: 'row',
//   //     //           height: 40,
//   //     //           position: 'absolute',
//   //     //           top: 40,
//   //     //           alignSelf: 'center',
//   //     //           width: width * 0.9,
//   //     //         }}>
//   //     //         <View
//   //     //           style={{backgroundColor: '#D2DFE0', height: 40, width: '50%'}}
//   //     //         />
//   //     //         <View
//   //     //           style={{backgroundColor: '#FCD98D', height: 40, width: '15%'}}
//   //     //         />
//   //     //         <View
//   //     //           style={{backgroundColor: '#E6F1CD', height: 40, width: '10%'}}
//   //     //         />
//   //     //         <View
//   //     //           style={{backgroundColor: '#B5DCC9', height: 40, width: '10%'}}
//   //     //         />

//   //     //         <View
//   //     //           style={{backgroundColor: '#99B7DF', height: 40, width: '15%'}}
//   //     //         />
//   //     //       </View>

//   //     //       <View style={{alignItems: 'flex-start'}}>
//   //     //         <Animated.Image
//   //     //           source={require('./assets/back.png')}
//   //     //           style={{
//   //     //             width: 15,
//   //     //             height: 15,
//   //     //             // width: '100%',
//   //     //             // height: 200,
//   //     //             // alignSelf: 'center',

//   //     //             // marginLeft: 10,
//   //     //             // marginBottom:-10,
//   //     //             transform: [
//   //     //               {
//   //     //                 translateX:
//   //     //                   -(this.state.studenDegree / this.state.fullDegree) *
//   //     //                   (width * 0.85),
//   //     //               },
//   //     //             ],
//   //     //           }}
//   //     //         />
//   //     //         <Animated.View
//   //     //           style={{
//   //     //             height: 10,
//   //     //             width: 10,
//   //     //             borderRadius: 20,
//   //     //             backgroundColor: '#000',
//   //     //             marginTop: 2,
//   //     //             marginLeft: 5,
//   //     //             transform: [
//   //     //               {
//   //     //                 translateX:
//   //     //                   -(this.state.studenDegree / this.state.fullDegree) *
//   //     //                   (width * 0.85),
//   //     //               },
//   //     //             ],
//   //     //           }}
//   //     //         />

//   //     //         <Animated.Image
//   //     //           source={require('./assets/back.png')}
//   //     //           style={{
//   //     //             width: 15,
//   //     //             height: 15,

//   //     //             marginTop: 3,

//   //     //             transform: [
//   //     //               {
//   //     //                 translateX:
//   //     //                   -(this.state.studenDegree / this.state.fullDegree) *
//   //     //                   (width * 0.85),
//   //     //               },
//   //     //             ],
//   //     //           }}
//   //     //         />
//   //     //       </View>
//   //     //       <Text
//   //     //         style={{
//   //     //           fontSize: 12,
//   //     //           fontWeight: '900',
//   //     //           //fontFamily: fontFamily,
//   //     //           marginTop: 4,
//   //     //           // textAlign:'right'
//   //     //         }}>
//   //     //         100%
//   //     //       </Text>
//   //     //       <View
//   //     //         style={{
//   //     //           alignItems: 'center',
//   //     //           justifyContent: 'center',
//   //     //           marginTop: 20,
//   //     //           marginBottom: 20,
//   //     //         }}>
//   //     //         {this.state.percent >= 0 && this.state.percent < 50 ? (
//   //     //           <View
//   //     //             style={{
//   //     //               justifyContent: 'center',
//   //     //               alignItems: 'center',
//   //     //               width: 80,
//   //     //               height: 80,
//   //     //               backgroundColor: '#',

//   //     //               marginTop: 20,
//   //     //             }}>
//   //     //             {/* <Image
//   //     //               source={require('../Images/sad.gif')}
//   //     //               style={{
//   //     //                 width: 80,
//   //     //                 height: 80,
//   //     //               }}
//   //     //             /> */}
//   //     //           </View>
//   //     //         ) : this.state.percent >= 50 && this.state.percent < 75 ? (
//   //     //           <View
//   //     //             style={{
//   //     //               justifyContent: 'center',
//   //     //               alignItems: 'center',
//   //     //               width: 80,
//   //     //               height: 80,

//   //     //               marginTop: 20,
//   //     //             }}>
//   //     //             {/* <Image
//   //     //               source={require('../Images/happy2.gif')}
//   //     //               style={{
//   //     //                 // flex: 1,
//   //     //                 width: 80,
//   //     //                 height: 80,
//   //     //               }}
//   //     //             /> */}
//   //     //           </View>
//   //     //         ) : (
//   //     //           <View
//   //     //             style={{
//   //     //               justifyContent: 'center',
//   //     //               alignItems: 'center',

//   //     //               marginTop: 20,
//   //     //             }}>
//   //     //             {/* <Image
//   //     //               source={require('../Images/happy.gif')}
//   //     //               style={{
//   //     //                 width: 80,
//   //     //                 height: 80,
//   //     //               }}
//   //     //             /> */}
//   //     //           </View>
//   //     //         )}
//   //     //       </View>
//   //     //       <View
//   //     //         style={{
//   //     //           // transform: [{rotateY: '180deg', rotate: '180deg'}],
//   //     //           marginTop: 20,
//   //     //         }}>
//   //     //         <ProgressCircle
//   //     //           style={{alignSelf: 'center'}}
//   //     //           value={this.state.percent / 100}
//   //     //           size={120}
//   //     //           thickness={6}
//   //     //           color={
//   //     //             this.state.percent > 0 && this.state.percent < 50
//   //     //               ? 'red'
//   //     //               : this.state.percent >= 50 && this.state.percent < 75
//   //     //               ? '#f2dc1a'
//   //     //               : '#5cb85c'
//   //     //           }
//   //     //           unfilledColor="#293077"
//   //     //           animationMethod="timing"
//   //     //           shouldAnimateFirstValue={true}
//   //     //           animationConfig={{duration: 2000, dely: 500}}>
//   //     //           <View
//   //     //             style={{
//   //     //               marginTop: 20,
//   //     //               alignItems: 'center',

//   //     //               // transform: [{rotateY: '180deg', rotate: '180deg'}],
//   //     //             }}>
//   //     //             <View
//   //     //               style={{
//   //     //                 flexDirection: 'row',
//   //     //                 alignSelf: 'center',
//   //     //                 alignItems: 'center',
//   //     //                 justifyContent: 'center',
//   //     //                 marginTop: -40,
//   //     //               }}>
//   //     //               <Text
//   //     //                 style={{
//   //     //                   color:"#0f0",
//   //     //                   fontSize: 25,
//   //     //                   fontWeight: 'bold',
//   //     //                  // fontFamily: fontFamily,
//   //     //                 }}>
//   //     //                 %
//   //     //               </Text>
//   //     //               {/* <Counter
//   //     //                 start={0}
//   //     //                 end={parseInt(this.state.percent)}
//   //     //                 style={{
//   //     //                   color: "#0f0",
//   //     //                   fontSize: 25,
//   //     //                   fontWeight: 'bold',
//   //     //                   fontFamily: fontFamily,
//   //     //                 }}
//   //     //                 duration={2000}
//   //     //               /> */}
//   //     //             </View>

//   //     //             <Text
//   //     //               style={{
//   //     //                 // textAlign: 'center',
//   //     //                // fontFamily: fontFamily,
//   //     //                 color: '#293077',
//   //     //                 marginTop: 10,
//   //     //               }}>
//   //     //               {this.state.studenDegree}
//   //     //               {''} /{''} {this.state.fullDegree}
//   //     //             </Text>
//   //     //           </View>
//   //     //         </ProgressCircle>
//   //     //       </View>
//   //     //       {/* <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
//   //     //         <Text
//   //     //           style={{
//   //     //             fontSize: 16,
//   //     //             alignSelf: 'center',
//   //     //             // marginTop: 20,
//   //     //             color: '#293077',
//   //     //             marginTop: 20,
//   //     //             textAlign: 'center',
//   //     //             //   fontFamily: fontFamily,
//   //     //           }}>
//   //     //           لقد انهيت الامتحان بالتوفيق في الامتحان القادم
//   //     //         </Text>
//   //     //       </View> */}

//   //     //       <TouchableOpacity
//   //     //         style={{
//   //     //           marginTop: 60,
//   //     //           alignItems: 'center',
//   //     //           justifyContent: 'center',
//   //     //           width: '100%',
//   //     //           // height: 50,
//   //     //           backgroundColor: "#0f0",
//   //     //           alignSelf: 'center',
//   //     //           borderRadius: 50,
//   //     //           marginBottom: 20,
//   //     //         }}
//   //     //         onPress={() => {
//   //     //           this.setState({visibleModal: false, buttonLoading: false}),
//   //     //             this.props.navigation.goBack();
//   //     //         }}>
//   //     //         <LinearGradient
//   //     //           colors={["#0f0", "#0f0", "#0f0"]}
//   //     //           style={{
//   //     //             // marginTop: 30,
//   //     //             alignItems: 'center',
//   //     //             justifyContent: 'center',
//   //     //             width: '100%',
//   //     //             height: 50,
//   //     //             // backgroundColor: "#0f0",
//   //     //             alignSelf: 'center',
//   //     //             borderRadius: 50,
//   //     //             // marginBottom: 30,
//   //     //           }}>
//   //     //           <Text
//   //     //             style={{
//   //     //               alignSelf: 'center',
//   //     //               fontSize: 25,
//   //     //               color: '#FFF',
//   //     //               // fontFamily: fontFamily,
//   //     //             }}>
//   //     //             اغلاق
//   //     //           </Text>
//   //     //         </LinearGradient>
//   //     //       </TouchableOpacity>
//   //     //     </View>
//   //     //   </ScrollView>
//   //     // </Modal>

//   //   );
//   // }
//   scrollToIndex = () => {
//     console.log('+++++++++++++++' + this.state.index);
//     // let m = Math.ceil(this.state.questions.length / 10);
//     // if (this.state.index == m - 1) {
//     //   var randomIndex = this.state.index * 10 + 1;
//     // }
//     var randomIndex = this.state.index * 10 - 10;

//     this.flatListRef.scrollToIndex({index: randomIndex});
//   };

//   _rowRenderer(data, index) {
//     if (index >= this.state.oldIndex * 10 && index < this.state.index * 10) {
//       return (
//         <View style={{}}>
//           <Animatable.View
//             // animation="fadeInRight"
//             // delay={100}
//             style={{
//               //  backgroundColor:"#ddd",
//               width: '90%',
//               alignSelf: 'center',
//               padding: 10,
//               marginTop: 10,
//               // borderWidth: 1,
//               // borderColor: "#293077"
//             }}>
//             <Text
//               style={{
//                 fontSize: 18,
//                 color: '#146C94',
//                 fontWeight: 'bold',
//                 //  fontFamily: fontFamily,
//               }}>
//               {index + 1} ) {'من خصائص الاتحاد الكونفدرالي'}
//             </Text>

//             {data.question_image == null ? null : (
//               <View
//                 style={{flex: 1, width: '100%', height: 200, marginTop: 30}}>
//                 {/* <Image
//                   source={{uri: data.question_image}}
//                   style={{
//                     flex: 1,
//                     width: null,
//                     height: null,
//                     // width: '100%',
//                     // height: 200,
//                     // alignSelf: 'center',
//                     // marginTop: 10,
//                     marginBottom: 30,
//                     resizeMode: 'contain',
//                   }}
//                 /> */}
//               </View>
//             )}
//             {data.real_answers?.map(item => {
//               return (
//                 <TouchableOpacity
//                   // animation="fadeInRight"
//                   disabled={this.state.buttonLoading}
//                   onPress={() => {
//                     if (
//                       this.state.questions[this.state.questions.indexOf(data)]
//                         .chosen_answer != '' &&
//                       this.state.questions[this.state.questions.indexOf(data)]
//                         .chosen_answer == item
//                     ) {
//                       let newArray = this.state.questions;
//                       newArray[newArray.indexOf(data)].chosen_answer = '';
//                       this.setState({questions: newArray});
//                     } else {
//                       let array =
//                         this.state.questions[this.state.questions.indexOf(data)]
//                           .real_answers;
//                       this.chooseTheAnswer(
//                         this.state.questions.indexOf(data),
//                         array.indexOf(item),
//                       );
//                     }
//                   }}
//                   style={{
//                     // borderColor: 'black',
//                     // borderWidth: 1,
//                     // borderRadius: 50,
//                     // marginTop: 5,
//                     // flexDirection: 'row',
//                     // // borderColor: "#0f0",
//                     // backgroundColor: '#fff',
//                     // elevation: 2,

//                     backgroundColor: '#fff',
//                     elevation: 1,
//                     width: '90%',
//                     alignSelf: 'center',
//                     // height: 50,
//                     marginTop: 20,
//                     padding: 14,
//                     flexDirection: 'row-reverse',
//                     alignItems: 'center',
//                     borderRadius: 20,
//                     flex: 1,

//                     // paddingBottom: 10,
//                     // paddingLeft: 10,
//                     // paddingTop: 10,
//                   }}>
//                   <View
//                     style={{
//                       flex: 1,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}>
//                     {item != data.chosen_answer ? (
//                       <View
//                         style={{
//                           borderColor: '#0f0',
//                           // borderWidth: 1,
//                           marginRight: 10,
//                           height: 30,
//                           width: 30,
//                           borderRadius: 20,
//                           backgroundColor: '#DDD',
//                         }}></View>
//                     ) : (
//                       <View
//                         style={{
//                           height: 30,
//                           width: 30,
//                           borderRadius: 20,
//                           backgroundColor: '#5cb85c',
//                           marginRight: 10,
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}>
//                         {/* <Icon
//                           name="check"
//                           style={{fontSize: 26, color: '#FFF'}}
//                         /> */}

//                         <Image
//                           source={require('../checked.png')}
//                           style={{
//                             width: 25,
//                             height: 25,
//                           }}
//                         />
//                       </View>
//                     )}
//                   </View>
//                   <View
//                     style={{
//                       flex: 4,
//                       //   alignItems: 'flex-start',
//                       justifyContent: 'center',
//                     }}>
//                     <Text
//                       style={{
//                         fontSize: 14,
//                         //    textAlign: 'left',
//                         //  fontFamily: fontFamily,

//                         // color:'#FFF'
//                       }}>
//                       {item}
//                     </Text>
//                   </View>
//                 </TouchableOpacity>
//               );
//             })}
//           </Animatable.View>

//           {index + 1 == this.state.questions.length &&
//           this.state.status == 'not_done' ? (
//             <TouchableOpacity
//               disabled={this.state.buttonLoading}
//               style={{
//                 marginTop: 40,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: '88%',
//                 height: 50,
//                 backgroundColor: '#0f0',
//                 alignSelf: 'center',
//                 borderRadius: 10,
//                 marginBottom: 30,
//               }}
//               onPress={() => this.getDegreeOfExam()}>
//               {this.state.buttonLoading == true ? (
//                 <Spinner color="#fff" size={30} style={{marginTop: 5}} />
//               ) : (
//                 <Text
//                   style={{
//                     alignSelf: 'center',
//                     fontSize: 25,
//                     color: '#FFF',
//                     //  fontFamily: fontFamily,
//                   }}>
//                   انهاء
//                 </Text>
//               )}
//             </TouchableOpacity>
//           ) : null}
//         </View>
//       );
//     }
//   }

//   chooseTheAnswer(opjectIndex, answerIndex) {
//     let newArray = this.state.questions;
//     newArray[opjectIndex].chosen_answer =
//       newArray[opjectIndex].real_answers[answerIndex];
//     this.setState({questions: newArray});
//   }
//   async getDegreeOfExam() {
//     if (this.state.connection_Status == 'Online') {
//       let validate = 0;
//       let newArray = this.state.questions;
//       let length = newArray.length;
//       let fullMark = newArray.length;

//       for (var i = 0; i < length; i++) {
//         if (newArray[i].chosen_answer != '') {
//           validate++;
//         }
//       }

//       let studenDegree = 0;
//       let AllQuestionString = '';
//       for (let i = 0; i < length; i++) {
//         if (newArray[i].chosen_answer == newArray[i].question_valid_answer) {
//           studenDegree++;
//           if (i == newArray.length - 1) {
//             AllQuestionString +=
//               newArray[i].question_id +
//               '***' +
//               '1' +
//               '***' +
//               newArray[i].chosen_answer;
//           } else {
//             AllQuestionString +=
//               newArray[i].question_id +
//               '***' +
//               '1' +
//               '***' +
//               newArray[i].chosen_answer +
//               '***camp_coding***';
//           }
//         } else {
//           if (i == newArray.length - 1) {
//             AllQuestionString +=
//               newArray[i].question_id +
//               '***' +
//               '0' +
//               '***' +
//               newArray[i].chosen_answer;
//           } else {
//             AllQuestionString +=
//               newArray[i].question_id +
//               '***' +
//               '0' +
//               '***' +
//               newArray[i].chosen_answer +
//               '***camp_coding***';
//           }
//         }
//       }
//       // alert(AllQuestionString)

//       let data_to_send = {
//         id: this.state.quizId,
//         student_id: this.state.student_id,
//         score: studenDegree + '/' + fullMark,
//         all_question: AllQuestionString,
//       };

//       this.setState({buttonLoading: true});
//       if (this.state.connection_Status == 'Online') {
//         axios
//           .post(
//             this.context.serverNewDomain + Domain + 'upload_score.php',
//             data_to_send,
//           )
//           .then(res => {
//             this.setState({buttonLoading: false});

//             if (res.data) {
//               // console.log(res.data);
//               if (res.data == 'success') {
//                 let precent = (studenDegree / fullMark) * 100;
//                 this.setState({
//                   visibleModal: true,
//                   percent: precent,
//                   status: 'done',
//                 });
//               } else {
//                 Alert.alert(
//                   'appName' + '',
//                   'هناك خطأ ما في استرجاع بيانات الامتحان',
//                 );
//               }
//             }
//           });
//       } else {
//         this.setState({buttonLoading: false});
//         Alert.alert('appName' + '', 'من فضلك تحقق من اتصالك بالإنترنت', [
//           {
//             text: '',
//             onPress: () => console.log('Cancel Pressed'),
//             style: 'cancel',
//           },
//           {text: 'حسنا', onPress: () => console.log('OK Pressed')},
//         ]);
//       }

//       this.setState({fullDegree: fullMark, studenDegree: studenDegree});
//     } else {
//       this.setState({failedgetDegreeOfExamModal: true});
//     }
//   }
//   render() {
//     const ViewConnectionMsg = props => {
//       return (
//         <Animated.View
//           style={[
//             styles.ConnectionView,
//             {bottom: this.state.bottomConnectionMsg},
//           ]}>
//           <View>
//             <Text style={{color: 'white'}}>{'props.ConnectionEnter'}</Text>
//           </View>
//         </Animated.View>
//       );
//     };
//     return (
//       <NativeBaseProvider>
//         <Container style={{backgroundColor: '#f8f8f8'}}>
//           {/* {alertheaderText(this.state.questions.length)} */}
//           <View
//             style={{
//               width: width,
//               height: height * 0.1,
//               backgroundColor: '#479bc1c9',
//               borderBottomLeftRadius: 50,
//               borderBottomRightRadius: 50,
//               flexDirection: 'row',
//             }}>
//             <View
//               style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//               <TouchableOpacity
//                 onPress={() => {
//                   this.setState({LogoutModal: true});
//                   Alert.alert(
//                     'appName' + '',
//                     'اذا خرجت الان سيتم اعتبار هذا الامتحان محلولا,هل ما زلت تريد الخروج ؟',
//                     [
//                       {
//                         text: 'لا',
//                         onPress: () => console.log('Cancel Pressed'),
//                         style: 'cancel',
//                       },
//                       {text: 'نعم', onPress: () => this.getDegreeOfExam()},
//                     ],
//                     {cancelable: false},
//                   );
//                   //    this.props.navigation.goBack();
//                 }}>
//                 <Image
//                   source={require('../left.png')}
//                   style={{
//                     width: 25,
//                     height: 25,
//                   }}
//                 />
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
//               <Text
//                 numberOfLines={2}
//                 style={{
//                   // fontFamily: fontFamily,
//                   color: '#fff',
//                   fontSize: 22,
//                 }}>
//                 {this.state.quiz_name}
//               </Text>
//             </View>
//             <View style={{flex: 1}}></View>
//           </View>
//           {/* <ScrollView> */}

//           {this.state.loading == true &&
//           this.state.connection_Status == 'Online' ? (
//             <Spinner color={'#0ff'} size={40} style={{marginTop: 200}} />
//           ) : // </ScrollView>
//           this.state.loading == false && this.state.status == 'not_done' ? (
//             <View style={{flex: 1, paddingBottom: 40}}>
//               <FlatList
//                 ref={ref => (this.flatListRef = ref)}
//                 onScrollToIndexFailed={this.scrollToIndexFailed.bind(this)}
//                 data={this.state.questions}
//                 numColumns={1}
//                 renderItem={({item, index}) => this._rowRenderer(item, index)}
//                 onEndReached={() => {
//                   if (
//                     this.state.index ==
//                       Math.ceil(this.state.questions.length / 10) &&
//                     this.state.EndScroll == 1
//                   ) {
//                     this.scrollToIndex();
//                   }
//                 }}
//                 onScrollEndDrag={() => {
//                   if (
//                     this.state.index ==
//                     Math.ceil(this.state.questions.length / 10)
//                   ) {
//                     this.setState({EndScroll: 2});
//                   } else {
//                     this.setState({EndScroll: 1});
//                   }
//                 }}
//               />
//             </View>
//           ) : this.state.connection_Status != 'offline' ? null : (
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginTop: height / 3,
//               }}>
//               {/* <Image
//               style={{width: '70%', height: height / 4}}
//               source={require('../Images/NoInternet.png')}
//             /> */}
//               <Text style={{marginTop: 10, fontSize: 18}}>
//                 لا يوجد اتصال بالإنترنت
//               </Text>
//             </View>
//           )}
//           {/* </ScrollView> */}

//           {/* <View style={styles.footer}>
//           {this.state.oldIndex != 0 ? (
//             <TouchableOpacity
//               onPress={() => {
//                 this.praviousFunction();
//               }}
//               style={{
//                 height: 30,
//                 width: 30,
//                 borderRadius: 20,
//                 marginLeft: '3%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Icon name="arrow-right" size={20} style={{color: '#fff'}}></Icon>
//             </TouchableOpacity>
//           ) : (
//             <View style={{width: 30, marginLeft: '3%'}} />
//           )}
//           {this.state.questions?.length / 10 >= 10 ? (
//             <ScrollView
//               style={{
//                 flexWrap: 'nowrap',
//                 flexDirection: 'row',
//                 paddingHorizontal: 20,
//                 width: '100%',
//                 //   backgroundColor: 'red',
//               }}
//               horizontal={true}>
//               {this.state.arr?.map((item) => (
//                 <TouchableOpacity
//                   onPress={() => {
//                     this.scrollToIndex(item),
//                       this.setState({
//                         index: this.state.arr.indexOf(item) + 1,
//                         oldIndex: this.state.arr.indexOf(item),
//                       });
//                     // alert("hi")
//                     // alert(this.state.arr.indexOf(item)+1)
//                   }}
//                   style={{
//                     width: 30,
//                     height: 30,
//                     borderRadius: 50,
//                     backgroundColor:
//                       this.state.oldIndex == index ? "#0f0" : '#FFF',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginLeft: 5,
//                     elevation: 1,
//                   }}>
//                   <Text
//                     style={{
//                       color: this.state.oldIndex == index ? '#fff' : '#000',
//                       fontSize: 18,
//                       // fontFamily: fontFamily,
//                     }}>
//                     {"item"}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           ) : (
//             <View style={{flexDirection: 'row'}}>
//               {this.state.arr?.map((item, index) => (
//                 <TouchableOpacity
//                   onPress={() => {
//                     this.scrollToIndex(item),
//                       this.setState({
//                         index: this.state.arr.indexOf(item) + 1,
//                         oldIndex: this.state.arr.indexOf(item),
//                       });
//                   }}
//                   style={{
//                     width: 30,
//                     height: 30,
//                     borderRadius: 50,
//                     backgroundColor:
//                       this.state.oldIndex == index ? '#fff' :"#0f0",
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginLeft: 5,
//                     borderWidth: 1,
//                     borderColor: '#fff',

//                     elevation: 1,
//                   }}>
//                   <Text
//                     style={{
//                       color: this.state.oldIndex == index ? '#000' : '#FFF',
//                       fontSize: 18,

//                     }}>
//                     {"jtem"}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           )}
//           {this.state.oldIndex == this.state.arr.length - 1 ? (
//             <View style={{width: 30, marginRight: '3%'}} />
//           ) : (
//             <TouchableOpacity
//               onPress={() => {
//                 this.NextFunction();
//               }}
//               style={{
//                 height: 30,
//                 width: 30,
//                 borderRadius: 20,
//                 marginRight: '3%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Image
//                         source={require('./assets/back.png')}
//                         style={{
//                           width: 25,
//                           height: 25,

//                         }} />
//             </TouchableOpacity>
//           )}
//         </View> */}

//           {/* {this.renderModal()} */}
//           <Modal
//             visible={this.state.LogoutModal}
//             onRequestClose={() => {
//               this.setState({LogoutModal: false});
//             }}
//             transparent={true}>
//             <View
//               style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//               <View
//                 style={{
//                   width: '90%',
//                   padding: 10,
//                   backgroundColor: '#fff',
//                   elevation: 22,
//                   borderRadius: 15,
//                 }}>
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     padding: 10,
//                   }}>
//                   <Text style={{color: '#0ff', fontSize: 22}}>{'appName'}</Text>
//                 </View>
//                 <View
//                   style={{
//                     alignSelf: 'center',
//                     width: '90%',
//                     borderWidth: 1.5,
//                     borderColor: '#ddd',
//                   }}
//                 />

//                 <View style={{paddingHorizontal: 20, paddingVertical: 12}}>
//                   <Text
//                     style={{
//                       //  fontFamily: fontFamily,
//                       color: '#00f',
//                       fontSize: 17,
//                       textAlign: 'center',
//                     }}>
//                     اذا خرجت الان سيتم اعتبار هذا الامتحان محلولا,هل ما زلت تريد
//                     الخروج ؟
//                   </Text>
//                 </View>

//                 <View
//                   style={{
//                     alignSelf: 'center',
//                     width: '90%',
//                     borderWidth: 1.5,
//                     borderColor: '#ddd',
//                   }}
//                 />

//                 <View
//                   style={{
//                     marginTop: 7,
//                     flexDirection: 'row',
//                     justifyContent: 'space-around',
//                   }}>
//                   <TouchableOpacity
//                     style={{
//                       flex: 1,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       borderRightWidth: 1,
//                       borderRightColor: '#ddd',
//                     }}
//                     onPress={() => {
//                       this.getDegreeOfExam();
//                       this.setState({LogoutModal: false});
//                     }}>
//                     <Text
//                       style={{
//                         //  fontFamily: fontFamily,
//                         color: '#00f',
//                         fontSize: 20,
//                       }}>
//                       نعم
//                     </Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     style={{
//                       flex: 1,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       borderLeftWidth: 1,
//                       borderLeftColor: '#ddd',
//                     }}
//                     onPress={() => {
//                       this.setState({LogoutModal: false});
//                     }}>
//                     <Text
//                       style={{
//                         //  fontFamily: fontFamily,
//                         color: '#00f',
//                         fontSize: 20,
//                       }}>
//                       إلغاء
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </Modal>
//           <Modal
//             visible={this.state.failedgetDegreeOfExamModal}
//             onRequestClose={() => {
//               this.setState({failedgetDegreeOfExamModal: false});
//             }}
//             transparent={true}>
//             <View
//               style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//               <View
//                 style={{
//                   width: width * 0.9,
//                   padding: 10,
//                   backgroundColor: '#fff',
//                   elevation: 22,
//                   borderRadius: 15,
//                 }}>
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     padding: 10,
//                   }}>
//                   <Text
//                     style={{
//                       color: '#00f',
//                       fontSize: 22,
//                     }}>
//                     {'appName'}
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     alignSelf: 'center',
//                     width: '90%',
//                     borderWidth: 1.5,
//                     borderColor: '#ddd',
//                   }}
//                 />

//                 <View style={{paddingHorizontal: 20, paddingVertical: 12}}>
//                   <Text
//                     style={{
//                       //  fontFamily: fontFamily,
//                       color: '#00f',
//                       fontSize: 17,
//                       textAlign: 'center',
//                     }}>
//                     الرجاء التحقق من اتصال الانترنت
//                   </Text>
//                 </View>

//                 <View
//                   style={{
//                     alignSelf: 'center',
//                     width: '90%',
//                     borderWidth: 1.5,
//                     borderColor: '#ddd',
//                   }}
//                 />

//                 <View
//                   style={{
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginTop: 7,
//                   }}>
//                   <TouchableOpacity
//                     style={{alignItems: 'center', justifyContent: 'center'}}
//                     onPress={() => {
//                       this.setState({failedgetDegreeOfExamModal: false});
//                     }}>
//                     <Text
//                       style={{
//                         //  fontFamily: fontFamily,
//                         color: '#00f',
//                         fontSize: 20,
//                       }}>
//                       إلغاء
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </Modal>

//           <ViewConnectionMsg ConnectionEnter="لا يوجد اتصال بالإنترنت" />
//         </Container>
//       </NativeBaseProvider>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   footer: {
//     width: '100%',
//     height: 40,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#f0f',
//     alignSelf: 'center',
//     position: 'absolute',
//     bottom: 0,
//   },
//   ConnectionView: {
//     width: '100%',
//     height: 20,
//     position: 'absolute',
//     zIndex: 222,
//     backgroundColor: '#479bc1c9',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
