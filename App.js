import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TrackContextProvider } from "./src/contexts/TrackContext";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import SideBar from "./src/screens/SideBar";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TrackContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SideBar"
            component={SideBar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TrackContextProvider>
  );
};

export default App;
