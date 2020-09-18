import React from 'react';
import styled from 'styled-components/native';
import {View, Text, SafeAreaView, Alert} from 'react-native';

const Button = styled.Button``;

const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  padding: 4px;
  border: 1px solid #e5e5e5;
`;
const Views = styled.SafeAreaView``;

function FindPw(props) {
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [confrimpwandid, setConfirmpwandid] = React.useState(false);
  const confirm = function () {
    id;
    pw;
  };
  return (
    <>
      <Views>
        <Input
          placeholder="아이디입력"
          value={id}
          onChangeText={(value) => setId(value)}
        />
        <Text>가장 기억에 남는 선물은?</Text>
        <Input
          placeholder="비밀번호답변"
          value={pw}
          onChangeText={(value) => setPw(value)}
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
            confirm;
            if (confrimpwandid) {
              //네비게이션 이동
            } else {
              Alert.alert('아이디와 답변을 다시 확인해주세요');
            }
          }}
        />
      </Views>
    </>
  );
}

export default FindPw;
