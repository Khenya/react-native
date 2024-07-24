import { Camera, CameraView, CameraType } from "expo-camera"
import { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native"
import * as MedialLabrary from "expo-media-library"


const CameraScreen = () => {
    const [hasCameraPermission, setHasCamaraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState("back");
    const [flash, setFlash] = useState("on");
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            MedialLabrary.requestPermissionsAsync();
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasCamaraPermission(status === "granted");
        })();
    }, []);

    const savePicture = async () => {
        console.log("gusrdar")
        if (image){
            try {
                const asset = await MedialLabrary.createAssetAsync(image);
                setImage (null);
                console.log("foto guardada");

            } catch(error){
                console.log(error)
            }
        }
    }
    const takePicture = async () => {
        console.log("Tomar foto");
        try {
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
            setImage(photo.uri);
        } catch (error) {
            console.log(error);
        }
    }
    const flashButton = () => {
        setFlash(flash === "on" ? "off" : "on")
    }
    const typeButton = () => {
        setType(type === "back" ? "front" : "back")
    }
    return (
        <View style={styles.constiner}>
            <CameraView
                style={styles.camara}
                facing={type}
                ref={cameraRef}
                flash ={flash}>
                    
                <View style={styles.viewCamara}>
                    <Button title={"Flash"} onPress={flashButton}></Button>
                    <Button title={(type === "back"?"Frontal": "back")} onPress={typeButton}></Button>
                </View>
            </CameraView>
            <View style={styles.buttonContainer}>
                {image ? <View><Button title="Tomar Nuevamente" onPress={takePicture} /><Button title="Guardar" onPress={savePicture} /></View> : <Button title="Tomar Foto" onPress={takePicture} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constiner: {
        flex: 1,
    },
    camara: {
        flex: 2,
        borderRadius: 10,
    },
    viewCamara: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default CameraScreen;