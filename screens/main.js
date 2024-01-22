import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native";

function Main({navigation}) {
    return (
      <View>
         <SafeAreaView>
            <Text>Page content</Text>
        </SafeAreaView>
        <Text>start page</Text>
        <Button 
          title="go to test screen" 
          onPress={() => navigation.navigate('Test')}
        />
      </View>
    );
  }

export default Main;