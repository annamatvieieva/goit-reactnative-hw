import { Text, View, TouchableHighlight, Image } from "react-native";

import { PostList } from "../components/PostList";


const logOutIcon = require("../images/log-out.png");

export function PostsScreen() {

	
	return(
		<View style={styles.container}>
			<View style={styles.header}>
			<Text>Публикации</Text>
			<TouchableHighlight style={styles.buttonLogOut}>
				<Image source={logOutIcon}/>
			</TouchableHighlight>
			<View style={styles.posts}>
			<View style={styles.shortProfile}>
			<View style={styles.avatarContainer}>
                {avatar && (
                  <Image
                    resizeMode="contain"
                    source={{ uri: avatar }}
                    style={{ width: 60, height: 60, borderRadius: 16}}
                  />
                )}
			</View>
			<View style={styles.userInfo}>
			<Text>Логин</Text>
			<Text>email</Text>
			</View>
			<PostList/>
			</View>
			</View>
			</View>
  
	</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
	header:{

	},
	buttonLogOut: {

	},
	posts: {

	},
	shortProfile: {

	},
	avatarContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
	userInfo: {

	},
})
