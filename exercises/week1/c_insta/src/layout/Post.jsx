import { View, Text, StyleSheet } from "react-native";
import HeaderPostComponent from "../components/post/HeaderPostComponent";

const Post = () => {
  return (
    <View>
      <HeaderPostComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage:{
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10
  },
  text: {
    color: "white",
  },
  profileImage:{
  width: 30,
  height: 30,
  borderRadius: 15,
  marginRight: 5
  }

});
export default Post;