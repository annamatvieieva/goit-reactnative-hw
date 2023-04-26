import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, } from "react-native";

import { HeaderApp } from "../components/HeaderApp";

const arrow = require('../images/arrow-left.png');
const mapIcon = require('../images/map-pin.png');
const deleteIcon = require('../images/trash-2.png');
const cameraGreyIcon = require('../images/camera-grey.png');
const cameraWhiteIcon = require('../images/camera-white.png');

export function CreatePostsScreen() {

	return(
		<View style={styles.container}>
		<HeaderApp title='Создать публикацию' icon={arrow} style={styles.buttonBack}/>
		<View style={styles.postMenu}>
			<View style={styles.imageLoader}>
				<Image/>
				<TouchableOpacity style={styles.loadButton}>
				<Image source={cameraGreyIcon} style={styles.locationIcon}/>
				</TouchableOpacity>
				</View>
				<View style={styles.titleContainer}>
				<Text style={styles.imageLoaderTitle}>Загрузите фото</Text>
				</View>
				<TextInput style={styles.input} placeholder="Название..."
                maxLength={30}/>
				<View style={styles.inputContainer}>
					<Image source={mapIcon} style={styles.locationIcon}/>
				<TextInput style={{...styles.input, ...styles.locationInput}}  placeholder="Местность......"
                maxLength={30}/>
				</View>
				<TouchableOpacity style={styles.buttonPost}>
					<Text style={styles.buttonPostTitle}>Опубликовать</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonDelete}>
				<Image source={deleteIcon}/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
		
  },
	buttonBack: {
		bottom: 10,
	 left: 16,},

	postMenu: {
		width: "100%",
    alignItems: 'center',
		justifyContent: "center",
		paddingHorizontal: 16,
		paddingTop: 32,
		paddingBottom: 34,
	},
	imageLoader: {
		height: 240,
		width: "100%",
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F6F6F6',
borderWidth: 1,
borderStyle: 'solid',
borderColor:  '#E8E8E8',
borderRadius: 8,
marginBottom: 8,
	},
	loadButton: {
		height: 60,
		width: 60,
		backgroundColor: '#FFFFFF',
		borderRadius: 30,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 18,
		justifyContent: 'center',
	},
	imageLoaderTitle: {
		fontStyle: 'normal',
fontWeight: '400',
fontSize: 16,
lineHeight: 19,
color: '#BDBDBD',
marginBottom: 48,
	},
	titleContainer: {
		width: '100%',
		justifyContent: 'flex-start',
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
		fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1, 
    borderBottomStyle: 'solid',
    borderColor: '#E8E8E8', 
	},
	locationInput: {
		marginBottom: 0,
		paddingLeft: 28,
	},
	locationIcon: {
		position: 'absolute',
		bottom: 13,
	},
	buttonPost: {
		height: 51,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F6F6F6',
borderRadius: 100,
marginBottom: 120,

	},
	buttonPostTitle: {
		fontStyle: 'normal',
fontWeight: '400',
fontSize: 16,
lineHeight: 19,
color: '#BDBDBD',
	},
	buttonDelete:{
		height: 40,
		width: 70,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F6F6F6',
borderRadius: 20,
	}


	}
	)