import React from "react";
import { Button, Text, View } from "react-native";

const PlayGame = (props) => {

  return (
    <View>
      <Text>PlayGame</Text>
      <Button title="End Game"  onPress={()=>{props.navigation.navigate("endGame")  }} />
    </View>
  );
};
export default PlayGame;