import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { manipulateAsync } from 'expo-image-manipulator';
import "@tensorflow/tfjs-react-native/dist/platform_react_native"

export default function AIScreen() {
    var imageTensor = "temp"
    const modelJSON = require("../GraphRecyclingModel/model.json")
    const modelWeights = require("../GraphRecyclingModel/group1-shard1of1.bin")
    
    //AI
    
    const loadModel = async () => {

        const model = await tf
        .loadGraphModel(bundleResourceIO(modelJSON, modelWeights))
        .catch((e) => {console.log(e)})
        return(model);
    };


    function predictionFunction() {
        const predict = async (model) => {  
            try {

                const prediction = model.predict(imageTensor);
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

    }
    
    
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
        data = await camera.takePictureAsync();
        
        const manipResult = await manipulateAsync(
            data["uri"],
            [{ resize: { width: 256, height: 256 } }],
            { format: 'jpeg' }
        );

        
        const response = await fetch(manipResult["uri"]);
        const imageDataArrayBuffer = await response.arrayBuffer();
        const imageData = new Uint8Array(imageDataArrayBuffer)
        await tf.ready()

        const decodedJpeg = decodeJpeg(imageData)
        const resized = tf.cast(decodedJpeg, 'float32');
        imageTensor = tf.tensor4d(Array.from(resized.dataSync()),[1,256,256,3])
        predictionFunction()
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