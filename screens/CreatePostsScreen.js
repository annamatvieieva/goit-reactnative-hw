import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import { HeaderApp } from "../components/HeaderApp";

const arrow = require("../images/arrow-left.png");
const mapIcon = require("../images/map-pin.png");
const deleteIcon = require("../images/trash-2.png");
const cameraGreyIcon = require("../images/camera-grey.png");
const cameraWhiteIcon = require("../images/camera-white.png");

export function CreatePostsScreen({ navigation }) {
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const handleSubmit = () => {
    const post = {
      photo,
      title,
      location,
    };
    console.log(post);

    navigation.navigate("PostsScreen");
  };

  const onClick = () => {
    navigation.navigate("PostsScreen");
  };

  const clearData = () => {
    setPhoto(null);
    setTitle("");
    setLocation("");
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
		<TouchableWithoutFeedback onPress={hideKeyboard}>
    <View style={styles.container}>
      <HeaderApp
        title="Создать публикацию"
        icon={arrow}
        style={styles.buttonBack}
        func={onClick}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={styles.postMenu}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ ...styles.imageLoader, borderWidth: photo ? 0 : 1 }}>
            <ImageBackground
              style={styles.image}
              imageStyle={{ borderRadius: 8 }}
              source={{ uri: photo }}
              resizeMode="cover"
            >
              <TouchableOpacity style={styles.loadButton} onPress={pickImage}>
                <Image source={photo ? cameraWhiteIcon : cameraGreyIcon} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.imageLoaderTitle}>
              {!photo ? "Загрузите фото" : "Редактировать фото"}
            </Text>
          </View>
            <TextInput
              style={{ ...styles.input, fontWeight: title ? "500" : "400" }}
              placeholder="Название..."
              maxLength={30}
              value={title}
              onChangeText={(text) => {
                setTitle(text);
              }}
            />
            <View style={styles.inputContainer}>
              <Image source={mapIcon} style={styles.locationIcon} />
              <TextInput
                style={{ ...styles.input, ...styles.locationInput }}
                placeholder="Местность......"
                maxLength={30}
                value={location}
                onChangeText={(text) => setLocation(text)}
              />
            </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              ...styles.buttonPost,
              backgroundColor:
                photo && title && location ? "#FF6C00" : "#F6F6F6",
            }}
          >
            <Text
              style={{
                ...styles.buttonPostTitle,
                color: photo && title && location ? "#FFFFFF" : "#BDBDBD",
              }}
            >
              Опубликовать
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDelete} onPress={clearData}>
            <Image source={deleteIcon} />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
			
    </View>
		</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  buttonBack: {
    bottom: 10,
    left: 16,
  },

  postMenu: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 34,
  },
  imageLoader: {
    height: 240,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 8,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLoaderTitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 48,
  },
  titleContainer: {
    width: "100%",
    justifyContent: "flex-start",
  },
  inputContainer: {
    height: 37,
    width: "100%",
    position: "relative",
    marginBottom: 32,
  },
  input: {
    height: 38,
    width: "100%",
    paddingBottom: 15,
    marginBottom: 29,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderColor: "#E8E8E8",
  },
  locationInput: {
    marginBottom: 0,
    paddingLeft: 28,
  },
  locationIcon: {
    position: "absolute",
    bottom: 13,
  },
  buttonPost: {
    height: 51,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 120,
  },
  buttonPostTitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  buttonDelete: {
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
