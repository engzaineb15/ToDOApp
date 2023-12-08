import React, { useState, useCallback, useRef,Component } from "react";
import { StyleSheet } from "react-native";
import { Button, View, Alert,Dimensions,Text } from "react-native";
import YouTube from "react-native-youtube";
import YoutubePlayer from "react-native-youtube-iframe";
import YoutubeIframe from 'react-native-youtube-iframe';



const youtube = () => {
   
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);

  const handleOnReady = () => {
    setIsReady(true);
  };

  const handleOnChangeState = (e) => {
    setStatus(e.state);
  };

  const handleOnChangeQuality = (e) => {
    setQuality(e.quality);
  };

  const handleOnError = (e) => {
    setError(e.error);
  };


  return (

    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>


         
<YouTube
          videoId="uOmnbYI5Kws"
          play={true}
          fullscreen={true}
          loop={false}
          apiKey="AIzaSyCZv6V2Oz-JYZEcaWqKzmrL1VRbIbN4MT4"
          onReady={handleOnReady}
        onChangeState={handleOnChangeState}
        onChangeQuality={handleOnChangeQuality}
        onError={handleOnError}
          style={{ alignSelf: 'stretch', height: 300 }}
         />
         
         {error && (
          <Text style={{ color: 'red' }}>An error occurred: {error}</Text>
        )}
        {isReady && !error && (
          <Text style={{ color: 'green' }}>Player is ready and the status is: {status}</Text>
        )}
  
  
      </View>
  )}
export default youtube;








