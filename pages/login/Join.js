import React from 'react';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {useLinkProps} from '@react-navigation/native';
import {ForceTouchGestureHandler} from 'react-native-gesture-handler';
import Axios from 'axios';

const Views = styled.SafeAreaView``;

const Button = styled.Button``;

const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  padding: 4px;
  border: 1px solid #e5e5e5;
`;

function Join(props) {
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [pwA, setPwa] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [checkpw, setCheckpw] = React.useState('');

  const userjoin = function () {
    id;
    pw;
    pwA;
    email;
    name;
    //axios 로 보내기
  };
  const JoinAlert = () =>
    Alert.alert('안내창', '회원가입을 축하드립니다!', [{text: 'OK'}], {
      cancelable: false,
    });
  return (
    <>
      <Views>
        <Input
          placeholder="아이디입력"
          value={id}
          onChangeText={(value) => setId(value)}
        />
        <Input
          placeholder="비밀번호입력"
          value={pw}
          onChangeText={(value) => setPw(value)}
        />
        <Input
          placeholder="비밀번호확인"
          value={checkpw}
          onChangeText={(value) => setCheckpw(value)}
        />
        <Input
          placeholder="이메일입력"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholder="별명입력"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <Text>가장 기억에 남는 선물은?</Text>

        <Input
          placeholder="비밀번호 찾기 답변"
          value={pwA}
          onChangeText={(value) => setPwa(value)}
        />
        <Button
          title="이전"
          onPress={() => {
            props.navigation.navigate('login');
          }}
        />
        <Button
          title="가입"
          onPress={() => {
            userjoin;
            JoinAlert;
            Alert.alert('회원가입을 축하드립니다.');
            props.navigation.navigate('login');
          }}
        />
      </Views>
    </>
  );
}

export default Join;
