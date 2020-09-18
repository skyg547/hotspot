import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

const Views = styled.SafeAreaView``;

const Button = styled.Button``;

function Main(props) {
  return (
    <>
      <Views>
        <Button title="메인" />
      </Views>
    </>
  );
}

export default Main;
