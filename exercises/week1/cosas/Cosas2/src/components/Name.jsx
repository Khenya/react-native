import { Text, View } from "react-native";
import { useStorePerson } from "../store/storePerson";
const Name = () => {
    const name = useStorePerson((state) => state.name)
    return (
        <View>
            <Text> hola {name}</Text>
        </View>
    )
}
export default Name;