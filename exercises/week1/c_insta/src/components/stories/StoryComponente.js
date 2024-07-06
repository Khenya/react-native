import { StyleSheet, Text, View, Image } from 'react-native';

import iconLogo from '../../assets/logo.png';


const StoryComponente =() =>{
    <View style={{flexDirection: 'column', alignContent: 'center'}}>
        <Image 
            source={iconLogo} 
            style={styles.story} 
        />
        <Text style={styles.personText}>Paul</Text>
    </View>
}


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

export default StoryComponente;
