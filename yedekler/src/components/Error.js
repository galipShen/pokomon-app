import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Error = () => {
    return (
        <View style={styles.container}>
            <Text>Error</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: "red"
    }
})
export default Error;
