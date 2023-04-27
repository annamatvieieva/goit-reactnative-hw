import { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import * as ImagePicker from "expo-image-picker";

const backgroundImage = require("../images/backgroundImage.jpg");
const plusIcon = require("../images/plus.png");
const closeIcon = require("../images/close.png");

SplashScreen.preventAutoHideAsync();

export function RegistrationScreen({navigation}) {
  const [avatar, setAvatar] = useState(null);
  const [login, setLogin] = useState("");
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



  const pickImage = async () => {
    if (avatar) {
      setTimeout(() => setAvatar(null), 2000);
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setAvatar(result.uri);
      }
    }
  };

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
      avatar,
      login,
      email,
      password,
    };
    console.log(user);

    navigation.navigate("CreatePostsScreen");
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
            keyboardVerticalOffset={-175}
          >
            <View style={{ ...styles.form, fontFamily: "Roboto" }}>
              <View style={styles.avatarContainer}>
                {avatar && (
                  <Image
                    resizeMode="contain"
                    source={{ uri: avatar }}
                    style={{ width: 120, height: 120, borderRadius: 16}}
                  />
                )}
                <TouchableOpacity
                  style={{
                    ...styles.buttonAddAvatar,
                    borderColor: avatar ? "#E8E8E8" : "#FF6C00",
                  }}
                  onPress={pickImage}
                >
                   <Image source={avatar ? closeIcon : plusIcon} />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Регистрация</Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor:
                    focusInput === "loginInput" ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Логин"
                value={login}
                maxLength={30}
                onChangeText={(text) => setLogin(text)}
                onFocus={() => setFocusInput("loginInput")}
                onBlur={() => setFocusInput("")}
              />
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
                <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
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
    minHeight: 549,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingBottom: 78,
    paddingTop: 92,
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  buttonAddAvatar: {
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 12.5,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -12.5,
    bottom: 14,
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
    borderStyle: "solid",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  inputContainer: {
    height: 50,
    width: "100%",
    position: "relative",
    borderRadius: 8,
    marginBottom: 43,
  },
  inputPassword: {
    marginBottom: 0,
  },
  buttonPassword: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 16,
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
