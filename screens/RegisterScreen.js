import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignup = () => {
    alert("Welcome");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textKeyboardView}>Register Your Account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={styles.inputView}>
            <AntDesign
              name="adduser"
              style={{ marginLeft: 12 }}
              size={24}
              color="gray"
            />

            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input}
              placeholder="Enter your full name"
            />
          </View>
        </View>

        <View style={{ marginTop: 0 }}>
          <View style={styles.inputView}>
            <MaterialIcons
              style={{ marginLeft: 12 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="Enter your email address"
            />
          </View>
        </View>

        <View style={{ marginTop: 0 }}>
          <View style={styles.inputView}>
            <MaterialCommunityIcons
              style={{ marginLeft: 12 }}
              name="form-textbox-password"
              size={24}
              color="gray"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.input}
              placeholder="Enter your password"
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        ></View>

        <View style={{ marginTop: 80 }} />

        <Pressable
          onPress={handleSignup}
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Create Account
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already have an account? Sign in
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  logo: {
    width: 150,
    height: 100,
  },
  textKeyboardView: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041E42",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  input: {
    color: "gray",
    marginVertical: 10,
    width: 300,
  },
});
