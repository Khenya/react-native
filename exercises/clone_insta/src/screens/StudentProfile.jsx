import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRoute } from "@react-navigation/native";

const studentProfile = () =>{
    const {params} = useRoute();
    console.log(params)
    const {name} = params
    return(
        <SafeAreaView>
            <Text>hola </Text>
        </SafeAreaView>
    )
}
export default studentProfile