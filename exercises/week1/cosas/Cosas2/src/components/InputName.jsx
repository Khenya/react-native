import { View, TextInput } from "react-native";
import { useStorePerson } from "../store/storePerson";

const ImputName = () => {
    const setName = useStorePerson((state) => state.setName);
    const name = useStorePerson((state)=>state.name)
    return (
        <View>
            <TextInput
                placeholder="Ingrese el Nombre"
                value={name}
                onChangeText={setName}
            />
        </View>
    )
}
export default ImputName;