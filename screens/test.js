import {React, useEffect, useState} from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

function Test({navigation}) {
  const [testText, setTestText] = useState('');
  
  useEffect(()=>{
    setTestText('hi');
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