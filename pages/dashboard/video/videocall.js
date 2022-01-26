import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

const VideoCall = ({navigation}) => {
  const [roomName, setRoomName] = useState('');
  const [user, setUser] = useState('');
  const [mail, setMail] = useState('');
  const onConferenceTerminated = nativeEvent => {
    /* Conference terminated event */
  };

  const onConferenceJoined = nativeEvent => {
    /* Conference joined event */
    console.log('tu marches');
  };

  const onConferenceWillJoin = nativeEvent => {
    /* Conference will join event */
    console.log('ce quoi ?');
  };

  useEffect(() => {
    setTimeout(() => {
      const url = roomName; // can also be only room name and will connect to jitsi meet servers
      const userInfo = {
        displayName: user,
        email: mail,
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      const options = {
        audioMuted: false,
        audioOnly: false,
        videoMuted: false,
        subject: 'your subject',
        token: 'your token',
      };
      const meetFeatureFlags = {
        addPeopleEnabled: true,
        calendarEnabled: true,
        callIntegrationEnabled: true,
        chatEnabled: true,
        closeCaptionsEnabled: true,
        inviteEnabled: true,
        androidScreenSharingEnabled: true,
        liveStreamingEnabled: true,
        meetingNameEnabled: true,
        meetingPasswordEnabled: true,
        pipEnabled: true,
        kickOutEnabled: true,
        conferenceTimerEnabled: true,
        videoShareButtonEnabled: true,
        recordingEnabled: true,
        reactionsEnabled: true,
        raiseHandEnabled: true,
        tileViewEnabled: true,
        toolboxAlwaysVisible: false,
        toolboxEnabled: true,
        welcomePageEnabled: false,
      };
      JitsiMeet.call(url, userInfo, options.meetFeatureFlags);
      /* You can also use JitsiMeet.audioCall(url) for audio only call */
      /* You can programmatically end the call with JitsiMeet.endCall() */
    }, 1000);
  }, [roomName, user, mail]);

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <JitsiMeetView
        onConferenceTerminated={onConferenceTerminated}
        onConferenceJoined={onConferenceJoined}
        onConferenceWillJoin={onConferenceWillJoin}
        style={{flex: 1, height: '100%', width: '100%'}}
      />
    </View>
  );
};

export default VideoCall;
