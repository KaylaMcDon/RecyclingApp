import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { manipulateAsync } from 'expo-image-manipulator';
import { useState } from 'react';
import "@tensorflow/tfjs-react-native/dist/platform_react_native"
import GLOBAL from './global.js'
import { withNavigationFocus } from 'react-navigation';


export default function AIScreen() {
    
    
    //AI
    
    var imageTensor = "temp"
    const [isRecyclable, setIsRecyclable] = useState("")
    const [AIPrediction, setAIPrediction] = useState("Take a picture to recieve an AI prediction");
    const modelJSON = require("../GraphRecyclingModel/model.json")
    const modelWeights = require("../GraphRecyclingModel/group1-shard1of1.bin")
    
    
    

    const loadModel = async () => {

        const model = await tf
        .loadGraphModel(bundleResourceIO(modelJSON, modelWeights))
        return(model);
    };

    function roundArray(array) {
        for (let item = 0; item < array.length; item++) {
            roundedItem = (Math.round(array[item]*1000))/1000
            array[item]=roundedItem
        }
        return(array)
    }

    function predictionFunction() {
        const predict = async (model) => {  
            const prediction = model.predict(imageTensor);
            const predictionArray = prediction.arraySync();

            roundedArray = roundArray(predictionArray[0])

            const materialArray = ['Aluminium', 'Carton', 'Glass', 'Organic Waste', 'Other Plastics', 'Paper and Cardboard', 'Plastic', 'Textiles', 'Wood']
            const highestPredictionNum = Math.max(...roundedArray)
            const numIndex = roundedArray.indexOf(highestPredictionNum)
            const finalMaterial = materialArray[numIndex]
            setAIPrediction("The AI detects it as: "+finalMaterial+" with a strength of: "+highestPredictionNum*100+"%.")
            //possible results ['', '', 'Glass', 'Organic Waste', 'Other Plastics', ', '', 'Textiles', 'Wood']
            if (finalMaterial == "Carton" || finalMaterial == "Aluminum" || finalMaterial == "Plastic" || finalMaterial == "Paper and Cardboard" || (GLOBAL.allowGlass && finalMaterial == "Glass")) {
                setIsRecyclable("This item is recyclable at your location! However please note that the AI is not always accurate, and that results that seem wrong probaly are.")
            } else {
                setIsRecyclable("This item is not recyclable at your location. However please note that the AI is not always accurate, and that this could be incorrect.")
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
        setAIPrediction("The AI is processing (this may take a minute)")
        setIsRecyclable("")

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
            <CameraView style={styles.camera} facing="back" ref={(ref) => { camera = ref }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={pictureTaker} style={styles.button}>
                        <Text style={styles.text}>Take Pic</Text>
                        <Text>{AIPrediction+isRecyclable}</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        flexDirection: 'row',
      },
      button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 10000,
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
      },
})