import React, { useState } from "react";
import { NativeRouter, Route,Routes, Link } from "react-router-native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import LoginScreen from './LoginScreen.js';
import Registration from './Registration.js';

const Home = () => <Text>Home</Text>;
const About = () => <Text>About</Text>;

const MyStack = () => (
  <NativeRouter>
    <View>
      {/*Define our routes for this project*/}
       <Routes>
       <Route exact path="/" Component={LoginScreen} />
      <Route exact path="/LoginScreen" Component={LoginScreen} />
      <Route path="/Registration" Component={Registration} />
      </Routes>
    </View>
    {/*The NativeRouter*/}
  </NativeRouter>
);

export default MyStack;