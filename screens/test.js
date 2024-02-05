import axios from "axios";
import {React, useEffect, useState} from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

 //바코드 번호로 품목보고번호 얻기
 const getRepotNo = async () => {
  const response = await fetch(
    'http://localhost:7001/auth/test/welcome',
    {
      method: 'GET',
    },
  );

  if (response.status === 200) {
    const responseJson = await response.json();
    return responseJson.C005.row[0];
  } else {
    return 0;
    // throw new Error('unable to get');
  }
};

function Test({navigation}) {
  const [testText, setTestText] = useState('');
  
  useEffect(()=>{
    setTestText('hi');
    getRepotNo();
  },[])
  return ( 
    <View>
      <Text>{testText}</Text>
      <Text>LUBID</Text>
      <Button 
        title="TEST" 
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
  }

export default Test;