import React, { useState } from "react";
import { NativeRouter, Route,Routes, Link } from "react-router-native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Registration= () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [flatDtl, setFlatDtl] = useState("");
  const [societyName, setSocietyName] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration for Society</Text>

       <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      onChangeText={setSocietyName}
                      value={societyName}
                      placeholder="Society Name"
                      keyboardType="text-pad"
                    />

                  </View>

        <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={setOwnerName}
                value={ownerName}
                placeholder="Owner Name"
                keyboardType="text-pad"
              />

            </View>

            <View style={styles.inputContainer}>
                          <TextInput
                            style={styles.input}
                            onChangeText={setFlatDtl}
                            value={flatDtl}
                            placeholder="Building Name/Flat-No"
                            keyboardType="text-pad"
                          />

                        </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Phone number"
          keyboardType="phone-pad"
        />

      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}
        >

        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <TouchableOpacity>
          <Link to="/LoginScreen">
             <Text style={styles.signupText} >Login</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: wp("4%"),
    backgroundColor: "#fff",
  },
  title: {
    fontSize: wp("6%"),
    marginBottom: hp("3%"),
    fontWeight: "bold",
  },
  logo: {
    marginBottom: hp("6%"),
  },
  input: {
    height: hp("7%"),
    width: "100%",
    marginVertical: hp("1%"),
    borderWidth: 1,
    padding: wp("2.5%"),
    borderRadius: 5,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#01a5fc",
    borderRadius: 25,
    padding: wp("3%"),
    alignItems: "center",
    marginTop: hp("2.5%"),
    width: '100%',
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("4%"),
  },
  forgotPassword: {
    color: "#0ed1c0",
    marginTop: hp("2.5%"),
    fontSize: wp("3.5%"),
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: hp("2.5%"),
  },
  signupText: {
    color: "#0ed1c0",
    marginLeft: wp("1%"),
    fontSize: wp("3.5%"),
  },
  logoIcon: {
    width: wp("30%"),
    height: wp("30%"),
    marginTop: hp("1%"),
    marginBottom: hp("4%"),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#ddd",
  },
  eyeIcon: {
    position: "absolute",
    right: wp("2.5%"),
    padding: wp("2.5%"),
  },
  phoneIcon: {
    position: "absolute",
    right: wp("2.5%"),
    padding: wp("2.5%"),
  },
});

export default Registration;