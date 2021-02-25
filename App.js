import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Provider } from "react-redux";
import { createStore , combineReducers } from "redux";
import UsersReducer from "./Store/Reducers/UsersReducer";

import RootNavigation from "./navigation/rootNavigation";

export default function App() {
  const [isDataLoaded, setisDataLoaded] = useState(false);

  function cacheImages(images) {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
  
  


   const reducers = combineReducers({
    User: UsersReducer,

   })


  const store = createStore(reducers)

  function cacheFonts(fonts) {
    return fonts.map((font) => Font.loadAsync(font));
  }

  const handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const imageAssets = cacheImages([
      require("./assets/splash.png"),
      require("./assets/icon.png"),
      require("./assets/Background_img.jpg")
    ]);

    const fontAssets = cacheFonts([
      { Caveat: require("./assets/fonts/static/Caveat-Medium.ttf") },
    ]);

    return Promise.all([...imageAssets, ...fontAssets]);
  };

  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={handleResourcesAsync}
        onError={(error) => console.warn(error)}
        onFinish={() => setisDataLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store} >
    <RootNavigation>
      <StatusBar style="dark" />
    </RootNavigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
