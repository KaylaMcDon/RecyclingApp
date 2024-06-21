import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { useEffect } from 'react';
import { CameraView, useCameraPermissions, takePictureAsync, Camera } from 'expo-camera';
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';


export default function AIScreen() {
    const modelJSON = require("../GraphRecyclingModel/model.json")
    const modelWeights = require("../GraphRecyclingModel/group1-shard1of1.bin")
    
    //AI
    /*
    const loadModel = async () => {

        await tf.ready()

        const model = await tf
        .loadGraphModel(bundleResourceIO(modelJSON, modelWeights))
        .catch((e) => {console.log(e)})
        return(model);
    };


    useEffect(() => {
        const predict = async (model) => {  
            try {
        
        
                const practiceImage = ("../08544447-2712014160.jpg")
                
                usedImage = (practiceImage)

                const prediction = model.predict(usedImage);
                console.log("prediction", prediction)
                const predictionArray = prediction.arraySync();
                console.log("predictionarray", predictionArray)
                
            } catch(error) {
                console.log("error", error);
            }
        }
    
    const runPrediction = async () => {
        const model = await loadModel();
        if (model) {
            await predict(model)
        }
    }


    runPrediction();

    }, [])
    */
    
    //Camera to get Image
    
    const [permission, requestPermission] = useCameraPermissions();
    

    if (!permission) {
        // Camera permissions are still loading.
        return (<View />);
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
        <View>
            <Text>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
        </View>
        );
    }

    const pictureTaker = async () => {
        console.log("picture taken")
        const data = await camera.takePictureAsync();
        console.log(data)
    }



    return (
        <View style={styles.container}>
        <CameraView style={styles.container} facing="back" ref={(ref) => { camera = ref }}>
            <View>
            <TouchableOpacity onPress={pictureTaker}>
                <Text>Take Pic</Text>
            </TouchableOpacity>
            </View>
        </CameraView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})