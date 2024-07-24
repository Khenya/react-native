import { Button } from "react-native"
import { useStorePerson } from "../store/storePerson";

const ButtonZ = () => {
    const setName = useStorePerson((state)=> state.setName)
    return <Button
        title="Reset"
        onPress={() => setName("")} />;
}
export default ButtonZ;