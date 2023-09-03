import React from "react";
import { View, Text, StyleSheet } from "react-native";;

const Label = ({ title, data }) => {
    //console.log(data)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.labelContainer} >
                {data.map((item, id) => (<Text key={id} style={styles.label} >
                    {item}</Text>))}
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        // backgroundColor: "gray",
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "100%",
    },
    title: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        marginBottom: 5,
    },
    labelContainer: {

        flexDirection: "row",
        flexWrap: "wrap",

    },
    label: {
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 3,
        marginBottom: 5,
        padding: 5,
        backgroundColor: "orange",
        color: "black"
    },


})
export default Label;
