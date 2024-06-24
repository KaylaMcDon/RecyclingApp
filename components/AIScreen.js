import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { manipulateAsync } from 'expo-image-manipulator';

export default function AIScreen() {
    var imageTensor = "temp"
    const modelJSON = require("../GraphRecyclingModel/model.json")
    const modelWeights = require("../GraphRecyclingModel/group1-shard1of1.bin")
    
    //AI
    
    const loadModel = async () => {

        await tf.ready()

        const model = await tf
        .loadGraphModel(bundleResourceIO(modelJSON, modelWeights))
        .catch((e) => {console.log(e)})
        return(model);
    };


    function predictionFunction() {
        const predict = async (model) => {  
            try {

                console.log(imageTensor)
                const prediction = model.predict(imageTensor);
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
        console.log("picture taken")    
        data = await camera.takePictureAsync();
        console.log(data)
        
        const manipResult = await manipulateAsync(
            data["uri"],
            [{ resize: { width: 32, height: 24 } }],
            { format: 'jpeg' }
        );

        
        const response = await fetch(manipResult["uri"]);
        console.log("1")
        const imageDataArrayBuffer = await response.arrayBuffer();
        console.log("2")
        const imageData = new Uint8Array(imageDataArrayBuffer)
        console.log("3")
        console.log(typeof(imageData))
        imageTensor = decodeJpeg(imageData).then(function(data){
            console.log("PROMISE RESOLVED")
        }).catch(function(data){
            console.log("PROMISE REJECTED")
        });
        console.log("4")
        console.log("image tensor: ", imageTensor)



        // Probaly delete other comment later
        /*
        function load(url){
            return new Promise((resolve, reject) => {
                  const im = new Image()
                  im.crossOrigin = 'anonymous'
                  im.src = url
                  im.onload = () => {
                    resolve(im)
                  }
                  
             })
          }
        
          (async() => {
            console.log("0")
            const image = await load(data["uri"])
            console.log("1")
            imageTensor = await tf.browser.fromPixels(image)
            console.log("This is an image tensor: ", imageTensor)
          })()
          */
        console.log("word")
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