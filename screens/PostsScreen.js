import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from "react-native";

import { PostList } from "../components/PostList";
import { HeaderApp } from "../components/HeaderApp";

const logOutIcon = require("../images/log-out.png");

export function PostsScreen() {
  return (
    <View style={styles.container}>
      <HeaderApp title='Публикации' icon={logOutIcon} style={styles.buttonLogOut}/>
      <View style={styles.posts}>
        <View style={styles.shortProfile}>
          <View style={styles.avatarContainer}>
            {/* <Image
                    resizeMode="contain"
                    source={}
                    style={{ width: 60, height: 60, borderRadius: 16}}
                  /> */}
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Логин</Text>
            <Text style={styles.userEmail}>email</Text>
          </View>
          <PostList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  buttonLogOut: {
		bottom: 10,
		right: 16,
	},
  posts: {
		paddingVertical: 32,
		paddingHorizontal: 16,
	},
  shortProfile: {
		justifyContent: 'center',
    flexDirection: 'row',
	},
  avatarContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
		marginRight: 8,
  },
  userInfo: {
		justifyContent:'center',
	},
	userName: {
		fontStyle: 'normal',
   fontWeight: '700',
  fontSize: 13,
  lineHeight: 15,
	color: '#212121',

	},
	userEmail:{
		fontStyle: 'normal',
fontWeight: '400',
fontSize: 11,
lineHeight: 13,
color: 'rgba(33, 33, 33, 0.8)',

	}
});
