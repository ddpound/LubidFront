import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native";

const mainViewStyle = StyleSheet.create({
  headerStyle : {
    flex : 1
  },
  container : {
    flex : 3
  },
  footerStyle:{
    flex: 1
  }
});


function Main({navigation}) {
    return (
      <>
        <View style={mainViewStyle.headerStyle}>
          <Text>헤더임</Text>
        </View>
        <View style={mainViewStyle.container}>
          <SafeAreaView>
              <Text>Page content</Text>
          </SafeAreaView>
          <Text>start page</Text>
          <Button 
            title="go to test screen" 
            onPress={() => navigation.navigate('Test')}
          />
        </View>
      </>
    );
  }

export default Main;