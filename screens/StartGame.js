import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ButtonCom from "../Components/helpingComponents/ButtonCom";
import InputCom from "../Components/helpingComponents/InputCom";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const StartGame = (props) => {
  const [dimensions, setdimensions] = useState({ window, screen });

  console.log(props);

  const onChange = ({ window, screen }) => {
    setdimensions({ window, screen });
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => {
            props.navigation.openDrawer();
          }}
        >
          <MaterialCommunityIcons name="hamburger" size={34} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [props.navigation]);

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  let textWidth =
    Platform.OS == "web"
      ? dimensions.window.width / 2
      : dimensions.window.width / 2;


  let containerPadding = dimensions.window.width >400 ? dimensions.window.width/5: 0;   
  return (
    <View  style={{marginHorizontal:containerPadding,backgroundColor:"white",flex:1} } >
      <View
        style={{
          width: textWidth,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: Platform.OS == "web" ? 70 : 35,
            alignSelf: "center",
          }}
        >
          {" "}
          StartGame
        </Text>
      </View>

      <View
        style={{
          width:
            Platform.OS == "web"
              ? dimensions.window.width / 3
              : dimensions.window.width,
              alignSelf:"center"
        }}
      >
        <Button
          title="Go to Play Game"
          onPress={() => {
            props.navigation.navigate("playGame", { title: "round 1" });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: Platform.OS === "web" ? window.width / 3 : window.width,
  },
});
export default StartGame;
