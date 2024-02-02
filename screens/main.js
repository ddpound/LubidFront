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
    flex:0.3,
    flexDirection: "row",
    width: 100
  },
  footerUserButton:{
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
        <View style={mainViewStyle.footerStyle}>
          <View>
            <Button title="홈"/>
          </View>
          <View style={mainViewStyle.footerUserButton}>
            <Button title="유저정보"/>
          </View>
          <Text>푸터임</Text>
        </View>
      </>
    );
  }

export default Main;