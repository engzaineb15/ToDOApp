import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList,TouchableOpacity } from 'react-native';
import {
	FlingGestureHandler,
	Directions,
	State,
  GestureHandlerRootView,
  PanGestureHandler
} from "react-native-gesture-handler";

import { useSharedValue } from 'react-native-reanimated';


const ChatScreen = () => {

  // const startingPosition = 0;
  // const x = useSharedValue(startingPosition);


  const [messages, setMessages] = useState([
    {
			user: 1,
			time: "12:05",
			content: "Should we hang out tomorrow? I was thinking of going somewhere which has drinks",
		},
		{
			user: 0,
			time: "12:07",
			content: "Sure",
		},
		{
			user: 1,
			time: "12:09",
			content: "Great",
		},
		{
			user: 0,
			time: "12:07",
			content: "7 o'clock?",
		},
		{
			user: 1,
			time: "12:09",
			content: "Sounds good",
		},
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    // Create a new message object
    const message = {
      text: newMessage,
      sender: 'user',
      replyTo: replyTo, // Include the ID of the parent message
    };

    // Add the new message to the messages array
    setMessages([...messages, message]);

    // Clear the message input and replyTo
    setNewMessage('');
    setReplyTo(null);
  };

  const handleReply = (index) => {
    setReplyTo(index);
  };
 

	

  return (
    
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item,index  }) => (
          <View style={{ alignItems: item.sender === 'user' ? 'flex-end' : 'flex-start',  }}>
    
            <TouchableOpacity
            onPress={() => handleReply(index)} // Handle press to reply
              style={{
                backgroundColor: item.sender === 'user' ? '#027aff' : '#b2b2b2',
                padding: 10,
                borderRadius: 5,
                margin: 5,
                maxWidth: '70%',
              }}
            >
              {item.replyTo && (
                <View style={{ backgroundColor: '#e6e6e6', borderRadius: 5, padding: 5 }}>
                  <Text style={{ color: 'black', fontWeight: 'bold' }}>Replying to:</Text>
                  <Text>{messages[item.replyTo].text}</Text>
                </View>
              )}
              <Text style={{ color: 'white' }}>{item.content}</Text>
            </TouchableOpacity>
          
          </View>
        )}
      />
      
     
      <View style={{ flexDirection: 'row', alignItems: 'center', flex:1 }}>
        <TextInput
          style={{ flex: 1, height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingLeft: 10 }}
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleSend} />
        <Button title="Reply" onPress={() => setReplyTo(messages.length - 1)} />
      </View>
      

    </View>
  );
};



export default ChatScreen;