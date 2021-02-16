import React ,{useLayoutEffect}from "react";
import { Button, Text, View ,TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StartGame = (props) => {

  console.log(props);
  
  useLayoutEffect(() => {
    props.navigation.setOptions({
      
      headerLeft: () => (
        <TouchableOpacity style={{padding:5}} onPress={()=>{props.navigation.openDrawer()}}>
        <MaterialCommunityIcons name="hamburger" size={34} color="black" />
      </TouchableOpacity>
      )
    });
  }, [props.navigation]);
    


    
  return (
    <View>
      <Text>StartGame</Text>
      <Button title="Go to Play Game"  onPress={()=>{props.navigation.navigate("playGame",{title:"round 1"})}} />
    </View>
  );
};
export default StartGame;
