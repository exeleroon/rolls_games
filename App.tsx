/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
