import { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const backgroundImage = require("../images/backgroundImage.jpg");

SplashScreen.preventAutoHideAsync();

export function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hide, setHide] = useState(true);
  const [focusInput, setFocusInput] = useState("");

  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const hidePassword = () => {
    if (!hide) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };
    console.log(user);
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ImageBackground
          style={styles.image}
          source={backgroundImage}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-241}
          >
            <View style={{ ...styles.form, fontFamily: "Roboto" }}>
              <Text style={styles.title}>Войти</Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor:
                    focusInput === "emailInput" ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Адрес электронной почты"
                value={email}
                maxLength={30}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                onFocus={() => setFocusInput("emailInput")}
                onBlur={() => setFocusInput("")}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={{
                    ...styles.input,
                    ...styles.inputPassword,
                    borderColor:
                      focusInput === "passwordInput" ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  secureTextEntry={hide}
                  value={password}
                  maxLength={30}
                  onChangeText={(text) => setPassword(text)}
                  onFocus={() => setFocusInput("passwordInput")}
                  onBlur={() => setFocusInput("")}
                />
                <TouchableOpacity
                  style={styles.buttonPassword}
                  onPress={hidePassword}
                >
                  <Text style={styles.buttonPasswordTitle}>
                    {hide ? "Показать" : "Скрыть"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonTitle}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
              <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##F6F6F6",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    minHeight: 489,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 144,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  inputPassword: {
    marginBottom: 0,
  },
  inputContainer: {
    height: 50,
    width: "100%",
    position: "relative",
    borderRadius: 8,
    marginBottom: 43,
  },
  buttonPassword: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  buttonPasswordTitle: {
    color: "#1B4371",
  },
  button: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginBottom: 16,
  },
  buttonTitle: {
    color: "#FFFFFF",
  },
  link: {
    color: "#1B4371",
  },
});
