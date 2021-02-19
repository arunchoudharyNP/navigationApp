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
  let platformWeb = Platform.OS == "web";
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={platformWeb ? require("../assets/Background_img.jpg") : null}
      >
        <View style={platformWeb ? styles.webStyle : styles.mobileStyle}>
          <View style={platformWeb ? { flex: 1 } : {}}>
            <View
              style={
                platformWeb
                  ? { flexDirection: "row" }
                  : { flexDirection: "column" }
              }
            >
              <InputCom
                design={[
                  { marginVertical: 10 },
                  platformWeb ? { flex: 1 } : null,
                ]}
                maxLength={15}
                minLength={3}
                icon={"account"}
                title="First Name"
                titleStyle={{ fontSize: 24 }}
                border
              />
              <InputCom
                design={[
                  { marginVertical: 10 },
                  platformWeb ? { flex: 1 } : null,
                ]}
                icon={"account-box"}
                title="Last Name"
                titleStyle={{ fontSize: 24 }}
                border
              />
            </View>
               

            <View
              style={
                platformWeb
                  ? { flexDirection: "row" }
                  : { flexDirection: "column" }
              }
            >
              <InputCom
                design={[
                  { marginVertical: 10 },
                  platformWeb ? { flex: 1 } : null,
                ]}
                maxLength={15}
                minLength={3}
                secure
                icon={"account-lock"}
                title="Password"
                titleStyle={{ fontSize: 24 }}
                border
              />
              <InputCom
                design={[
                  { marginVertical: 10 },
                  platformWeb ? { flex: 1 } : null,
                ]}
                secure
                icon={"account-lock"}
                title="Confirm Password"
                titleStyle={{ fontSize: 24 }}
                border
              />
            </View>





          </View>
          <View style={Platform.OS == "web" ? { flex: 1 } : {}}>
            <InputCom
              design={[
                { marginVertical: 10 },
                platformWeb ? { flex: 1 } : null,
              ]}
              title="Name"
              icon={"account-check"}
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
  mobileStyle: {
    flex: 1,
  },

  webStyle: {
    margin: "10%",
    backgroundColor: "white",
    flexDirection: "row",
  },
});

export default EditProfileScreen;
