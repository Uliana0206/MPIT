import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Hi from "./screens/Hi";
import Registration from "./screens/Registration";
import ListingScreen from "./screens/ListingScreen";
import progressScreen from "./screens/progressScreen";

const Stack = createNativeStackNavigator();

function App(){
  const [initializing, setInitializing ] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber
  }, []);

  if (initializing) return null;

  if (!user){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Hi"
          component={Hi}
          options={{ title: ' '}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: ' '}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: ' '}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: ' '}}
      />
      <Stack.Screen
             name='ListingScreen'
             component={ListingScreen}
             options={{title: ' '}}
      />
      <Stack.Screen 
            name="progress"
            component={progress}
            options={{title: ' '}}
      />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
