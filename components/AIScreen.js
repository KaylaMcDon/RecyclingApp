import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';


export default function AIScreen() {
    const modelJSON = require("../GraphRecyclingModel/model.json")
    const modelWeights = require("../GraphRecyclingModel/group1-shard1of1.bin")


    const loadModel = (async () => {

        await tf.ready()

        const model = await tf
        .loadGraphModel(bundleResourceIO(modelJSON, modelWeights))
        .catch((e) => {console.log(e)})
        console.log("model loaded")
        return(model);
    })();

    const practiceImagee = require("../08544447-2712014160.jpg")
    const recyclingAI = loadModel

    async function predict() {
        const input = tf.tensor(practiceImagee);
        const prediction = recyclingAI.executeAsync(input);
        const predictionArray = prediction.arraySync();
        console.log(predictionArray)
    }

    predict();
}
    