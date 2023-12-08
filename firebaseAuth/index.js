/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidStyle } from '@notifee/react-native';
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    displayNotification(remoteMessage)
  });
messaging().getInitialNotification(async remoteMessage =>{
    console.log("Message handle ", remoteMessage)
    displayNotification(remoteMessage)
})

notifee.onBackgroundEvent(async message => {
    console.log('background', message);
    return true;
  });

  
const displayNotification = async data => {
  
    await notifee.requestPermission()
    
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: data.notification.title,
      body: data.notification.body,
      android: {
        channelId,
       // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        // style: { type: AndroidStyle.BIGPICTURE, 
        //   picture: require('./assets/floer.jpg')},
  
      },
    });
  }

AppRegistry.registerComponent(appName, () => App);
