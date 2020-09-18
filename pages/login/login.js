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
import FindId from './FindId';

const Title = styled.Text`
  font-size: 36px;
`;
const Button = styled.Button``;
const Image = styled.Image`
  width: 100%;
  height: 360px;
`;
const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  padding: 4px;
  border: 1px solid #e5e5e5;
`;
const Texts = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
const Logo = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 12px;
`;
function Component(props) {
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [confirm, setConfirm] = React.useState(false);

  const Confirm = function () {
    id;
    pw;
  };

  return (
    <>
      <View>
        <Logo />
        <Input
          placeholder="아이디"
          value={id}
          onChangeText={(value) => setId(value)}
        />
        <Input
          placeholder="비밀번호"
          value={pw}
          onChangeText={(value) => setPw(value)}
        />
        <Texts
          onPress={() => {
            props.navigation.navigate('FindId');
          }}>
          <Text>아이디를 잊으셨나요?</Text>
        </Texts>
        <Texts
          onPress={() => {
            props.navigation.navigate('FindPw');
          }}>
          <Text>비밀번호가 기억 안나시나요?</Text>
        </Texts>
        <Button
          title="회원가입"
          onPress={() => {
            props.navigation.navigate('Join');
          }}
        />
        <Button
          title="로그인"
          onPress={() => {
            Confirm;
            if (confirm) {
              props.navigation.navigate('Main');
            } else {
              Alert.alert('아이디와 비밀번호를 확인해주세요');
            }
          }}
        />
      </View>
    </>
  );
}

export default Component;
