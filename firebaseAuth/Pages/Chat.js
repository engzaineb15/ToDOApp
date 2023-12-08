import React from 'react'
import {GiftedChat} from 'react-native-gifted-chat'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
export default class Chat extends React.Component {


    state = {
        messages: [
            {
                _id: 1,
                text: 'Welcome, ' + auth().currentUser.email,
                createdAt: new Date(),
                system: true,
            }
        ]
    }

    componentDidMount() {

        database()
            .ref('/chat/')
            .limitToLast(1)
            .on('child_added', snapshot => {
                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, snapshot.val()),
                }))
            });
    }


    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={message => this.onSend(message)}
                showUserAvatar={true}
                renderUsernameOnMessage={true}
                renderAvatarOnTop={true}
                multiline={false}
                user={{
                    name: auth().currentUser.email,
                    _id: auth().currentUser.email,
                    avatar: 'https://placeimg.com/140/140/any'
                }}
            />
        )
    }

    onSend = ((message) => {
        database()
            .ref('/chat/')
            .push(message)
    })
}