import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PlayGame, EndGame, StartGame } from "../screens/Index";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const rootNavigation = (props) => {
  const GameStack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const TabNav = createBottomTabNavigator();

  console.log(props);
  const HeaderRight = (prop) => {
    console.log("   Header Prop  " + prop);
    return (
      <TouchableOpacity
        onPress={() => {
          console.log("pressed");
        }}
      >
        <Text style={{ fontSize: 30, padding: 10 }}>+</Text>
      </TouchableOpacity>
    );
  };

  const BottomTab = () => {
    return (
      <TabNav.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Profile") {
              iconName = focused ? "account" : "account-outline";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }

            // You can return any component that you like here!
          },
        })}
        tabBarOptions={{
          activeTintColor: "#044b59",
          inactiveTintColor: "gray",
        }}
      >
        <TabNav.Screen name="Home" component={StartGame} />
        <TabNav.Screen name="Search" component={PlayGame} />
        <TabNav.Screen name="Profile" component={EndGame} />
      </TabNav.Navigator>
    );
  };

  const HeaderLeft = (prop) => {
    return (
      <TouchableOpacity
        style={{ padding: 5 }}
        onPress={() => {
          prop.drawer;
        }}
      >
        <MaterialCommunityIcons name="hamburger" size={34} color="black" />
      </TouchableOpacity>
    );
  };

  const HeaderTitle = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          style={style.logoImage}
          source={require("../assets/logo_1.png")}
        />
        <Text style={{ fontSize: 24, color: "black", alignSelf: "center" }}>
          {" "}
          Game App{" "}
        </Text>
      </View>
    );
  };

  const Home = () => {
    return (
      <GameStack.Navigator
        initialRouteName="startGame"
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitle: () => {
            return <HeaderTitle />;
          },
          gestureEnabled: false,
        }}
      >
        <GameStack.Screen
          name="startGame"
          component={StartGame}
          options={({ openDrawer }) => ({
            // headerTitle: () => {
            //   return <HeaderTitle />;
            // },
            // headerLeft: () => {
            //   return <HeaderLeft drawer= {openDrawer}/>;
            // },
            headerRight: () => {
              return <HeaderRight />;
            },
          })}
        />

        <GameStack.Screen
          options={{ gestureEnabled: false }}
          name="playGame"
          component={PlayGame}
        />
        <GameStack.Screen name="endGame" component={EndGame} />
        
      </GameStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Account" component={EndGame} />
      </Drawer.Navigator>

      {/* uncomment to see bottom tab navigation */}
      {/* <BottomTab/> */}
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  logoImage: {
    resizeMode: "contain",
    width: 55,
    height: 40,
  },
});

export default rootNavigation;
