import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

function test({navigation}) {
    return (
      <View>
        <Text>start!</Text>
        <Button 
          title="go to main" 
          onPress={() => navigation.navigate('main')}
        />
      </View>
    );
  }

export default test;