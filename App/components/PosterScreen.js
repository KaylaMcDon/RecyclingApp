import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import GLOBAL from './global.js'


export default function PosterScreen({ }) {
    var yourPicture = require ('../Posters/Curbie.png');
    return(
        <View style={{flex: 1, backgroundColor: "darkgreen"}}>
            
                <Image source={yourPicture} style={{width: "100%", height: "100%", flex: 1, resizeMode: "center"}}/>
            
        </View>
    )
}