import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

function main({navigation}) {
    return (
      <View>
        <Text>start!</Text>
        <Button 
          title="go to test screen" 
          onPress={() => navigation.navigate('test')}
        />
      </View>
    );
  }

export default main;