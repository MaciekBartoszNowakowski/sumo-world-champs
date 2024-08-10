import {Text, View} from "react-native";
import * as React from "react";
import {styles} from "@/components/custom_components/myStyles";
import {MyMap} from "@/components/custom_components/mapComponent";

export const CompetitionInfoScreen =() => {
    return (
        <View style={[styles.defaultBackground]}>
            <View style={[styles.defaultBackground, {flex: 3}]}>
                <MyMap></MyMap>
            </View>
            <View style={[styles.defaultBackground, {flex: 2}]}>

            </View>
        </View>


    );
};