import { StyleSheet, View, Text } from "react-native";
import CircleImageComponent from "../comments/CircleImageComponent";
const imagePreofile = "https://randomuser.me/api/portraits/med/men/1.jpg";

const HeaderPostComponent = ({ user})=>{
    return(
        <View style={styles.header}>
        <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
          <CircleImageComponent uriImage={imagePreofile} personalStyle={styles.profileImage}/>
          <Text style={styles.text}>Post</Text>
        </View>
        <Text style={styles.text}>...</Text>
      </View>
    )
}
const styles=StyleSheet.create({
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
})
export default HeaderPostComponent;