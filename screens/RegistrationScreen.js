import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
	Image,
  TouchableOpacity
} from "react-native";

const backgroundImage = require('../images/backgroundImage.jpg');
const plusIcon = require('../images/add.png');

export function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={backgroundImage} resizeMode="cover">
        <View style={styles.form}>
          <View style={styles.avatarContainer}>
						<Image resizeMode="contain"/>
            <TouchableOpacity style={styles.buttonAddAvatar}>
              <Image source={plusIcon}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <TextInput style={styles.input} placeholder="Логин" />
          <TextInput  style={styles.input} placeholder="Адрес электронной почты" />
          <View style={styles.inputContainer}>
            <TextInput style={[styles.input, styles.inputPassword,]}  placeholder="Пароль" />
            <TouchableOpacity style={styles.buttonPassword}>
              <Text style={styles.buttonPasswordTitle}>Показать</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
					<Text style={styles.link}>Уже есть аккаунт? Войти</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##F6F6F6',
  },
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	form: {
    minHeight: 549,
    alignItems: 'center',
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
    // fontFamily: 'Roboto',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: 16,
   lineHeight: 19,
	},
	avatarContainer: {
		width: 120,
    height: 120,
		backgroundColor: '#F6F6F6',
		borderRadius: 16,
    position: 'absolute',
    top: -60,
	},
	buttonAddAvatar: {
		width: 25,
		height: 25,
		backgroundColor:'#FFFFFF',
		borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -12.5,
    bottom: 14,
	},
  title: {
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: '#212121',
    marginBottom: 33,
  }, 
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  inputPassword: {
    marginBottom: 0,
  },
  inputContainer: {
    height: 50,
    width: '100%',
    position: 'relative',
    borderRadius: 8,
    marginBottom: 43,
  },
  buttonPassword: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  buttonPasswordTitle: {
    color: '#1B4371',
  },
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginBottom: 16,
  },
  buttonTitle: {
   color: '#FFFFFF',
  },
  link: {
   color: '#1B4371',
  }
});
