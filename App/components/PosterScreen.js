import { Image } from "react-native";
import GLOBAL from './global.js'
import { useIsFocused } from "@react-navigation/native";
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';


export default function PosterScreen({ navigation }) {
    
    const posterDictionary = {
        Curbie: require("../Posters/Curbie.png"),
        ECVC: require("../Posters/ECVC.png"),
        GFL: require("../Posters/GFL.png"),
        HighPoint: require("../Posters/HighPoint.png"),
        MecklenburgCounty: require("../Posters/MecklenburgCounty.png"),
        NorthDavidson: require("../Posters/NorthDavidson.png"),
        Pratt: require("../Posters/Pratt.png"),
        RDS: require("../Posters/RDS.png"),
        RepublicConover: require("../Posters/RepublicConover.png"),
        RepublicGreensboro: require("../Posters/RepublicGreensboro.png"),
        RepublicMooresville: require("../Posters/RepublicMooresville.png"),
        Sonoco: require("../Posters/Sonoco.png"),
        TFC: require("../Posters/TFC.png"),
        WasteManagment: require("../Posters/WasteManagment.png"),
    }

    useIsFocused();

    const finalPoster = posterDictionary[GLOBAL.MRFName]
    return(
        <ReactNativeZoomableView style={{flex: 1, backgroundColor: "darkgreen"}} 
        maxZoom={2}
        minZoom={1}>
            
                <Image source={finalPoster} style={{width: "100%", height: "100%", flex: 1, resizeMode: "center"}}/>
            
        </ReactNativeZoomableView>
    )
}