import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

function Test({navigation}) {
    return ( 
      <View>
        <Text>test page!</Text>
        <Text>LUBID</Text>
        <Button 
          title="TEST" 
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    );
  }

export default Test;