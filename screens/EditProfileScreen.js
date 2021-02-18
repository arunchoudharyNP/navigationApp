import React from "react";
import {
  Text,
  View,
  Platform,
  ImageBackground,
  StyleSheet,
} from "react-native";
import InputCom from "../Components/helpingComponents/InputCom";

const EditProfileScreen = (props) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={
          Platform.OS == "web" ? require("../assets/Background_img.jpg") : null
        }
      >
        <View
          style={Platform.OS == "web" ? styles.webStyle : styles.mobileStyle}
        >
          <View style={  Platform.OS == "web"? { flex: 1 } :{} }>
            <View style={ Platform.OS == "web" ? { flexDirection: "row" } : {}}>
              <InputCom
                design={{ marginVertical: 10, flex:1 }}
                title="First Name"
                titleStyle={{ fontSize: 24 }}
                border
              />
              <InputCom
                design={{ marginVertical: 10,flex: 1 }}
                title="Last Name"
                titleStyle={{ fontSize: 24 }}
                border
              />
            </View>
          </View>
          <View style={ Platform.OS == "web"? { flex: 1 } :{}}>
            <InputCom
              design={{ marginVertical: 10 }}
              title="Name"
              titleStyle={{ fontSize: 24 }}
              border
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileStyle: {},

  webStyle: {
    margin: "10%",
    backgroundColor: "white",
    flexDirection: "row",
  },
});

export default EditProfileScreen;
