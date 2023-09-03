import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 30
    }
})
export default Loading;
