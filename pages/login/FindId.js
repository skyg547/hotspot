import React from 'react';
import styled from 'styled-components/native';
import {Alert, View} from 'react-native';

const Views = styled.SafeAreaView``;

const Button = styled.Button``;

const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  padding: 4px;
  border: 1px solid #e5e5e5;
`;
function FindId(props) {
  const [email, setEmail] = React.useState('');
  const [confirmid, setConfirmid] = React.useState(false);

  const Confirm = function () {
    email;
  };
  return (
    <>
      <Views>
        <Input
          placeholder="이메일입력"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <Button
          title="이전"
          onPress={() => {
            props.navigation.navigate('login');
          }}
        />
        <Button
          title="다음"
          onPress={() => {
            Confirm;
            if (confirmid) {
              Alert.alert('id');
            } else {
              Alert.alert('이메일을 다시 확인해주세요');
            }
          }}
        />
      </Views>
    </>
  );
}

export default FindId;
