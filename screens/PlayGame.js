import React,{useEffect} from "react";
import { Button, Text, View } from "react-native";

import { useSelector } from "react-redux";

const PlayGame = (props) => {

  const userData =  useSelector( state => state.User)



  useEffect(() => {
     
    console.log(userData);
  }, [useSelector]);

  return (
    <View>
      <Text>PlayGame</Text>
      <Button title="End Game"  onPress={()=>{props.navigation.navigate("endGame")  }} />
    </View>
  );
};
export default PlayGame;