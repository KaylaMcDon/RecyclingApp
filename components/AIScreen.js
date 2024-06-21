import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { useEffect } from 'react';


export default function AIScreen() {
    const modelJSON = require("../GraphRecyclingModel/model.json")
    const modelWeights = require("../GraphRecyclingModel/group1-shard1of1.bin")
    

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
                
                usedImage = tf.browser.fromPixels(practiceImage)

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

    }, [])}