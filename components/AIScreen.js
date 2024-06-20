import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as FileSystem from "expo-file-system"


export default function AIScreen() {
    const modelJSON = require("../tfjs_RecyclingModel/model.json")
    const modelWeights1 = require("../tfjs_RecyclingModel/group1-shard1of4.bin")
    /*const modelWeights2 = require("../tfjs_RecyclingModel/group1-shard2of4.bin")
    const modelWeights3 = require("../tfjs_RecyclingModel/group1-shard3of4.bin")
    const modelWeights4 = require("../tfjs_RecyclingModel/group1-shard4of4.bin")

    console.log(modelWeights3)

    const loadModel = async () => {
        const model = await tf
        .loadLayersModel(bundleResourceIO(modelJSON, [modelWeights1, modelWeights2. modelWeights3, modelWeights4]))
        .catch((e) => {console.log(e)})
        console.log("model loaded")
        return(model);
    }*/

}
    