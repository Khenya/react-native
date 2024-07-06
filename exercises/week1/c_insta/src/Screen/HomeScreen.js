import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../layout/Header'; 
import Storie from '../layout/Storie'; 
import StoryComponente from '../components/stories/StoryComponente';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Storie/>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 50,
    },
    text: {
        color: 'white',
    },
});

export default HomeScreen;
