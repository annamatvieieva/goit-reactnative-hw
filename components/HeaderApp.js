import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"

export const HeaderApp = ({title, icon, style, func}) => {

	return(<View style={styles.header}>
		<Text style={styles.headerTitle}>{title}</Text>
		<TouchableOpacity style={{...styles.buttonLogOut, ...style}} onPress={func}>
			<Image source={icon} />
		</TouchableOpacity>
	</View>
 )
}

const styles = StyleSheet.create({
  header: {
    height: 88,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
		paddingTop: 55,
		paddingBottom: 11,
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
		borderBottomColor: 'rgba(0, 0, 0, 0.3)',
		position: 'relative',
		// shadowColor: 'rgba(0, 0, 0, 0.3)',
		// shadowOffset: {width: 0,height: 0.5},
		// shadowOpacity: 0,
  },
	headerTitle: {
		fontStyle: 'normal',
		fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
		color: '#212121',
	},
  buttonLogOut: {
		position: 'absolute',
	},})