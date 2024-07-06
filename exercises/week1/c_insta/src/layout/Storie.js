import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import StoryComponente from '../components/stories/StoryComponente';
import iconLogo from '../assets/logo.png';

const Storie = () => {
    return (
        <ScrollView horizontal style={styles.stories}>
            <StoryComponente></StoryComponente>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    story: {
        width: 50,
        height: 50,
        borderColor: 'red',
        borderWidth: 3,
        borderRadius: 50,  
        margin: 10         
    },
    stories: {
        flexDirection: 'row'
    },
    storyContainer: {
        width: 60,
        height: 60,
        borderColor: "red",
        borderWidth: 3,
        borderRadius: 60,         

    },
    personText:{
        textAlign: 'center',
        marginRight: 10,
        color: 'red'
    }
});

export default Storie;
