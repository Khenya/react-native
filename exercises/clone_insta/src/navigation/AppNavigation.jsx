import { Footer } from "../layout/Footer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import studentProfile from "../screens/StudentProfile";
import PortadaScreen from "../screens/PortadaScreen";
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tab" component={Footer} />
      <Stack.Screen name="student" component={studentProfile} />
      <Stack.Screen name="postadaScreen" component={PortadaScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
