import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


//pic is not evolved pokemons pic
const Evolutions = ({ pokeData, selectedPoke }) => {
    console.log("POKEDATA", pokeData)
    console.log("---------------")
    console.log("SELECTED", selectedPoke)
    console.log("---------------")
    const evoluted = [] || selectedPoke.evolutions[0].key
    console.log(evoluted, typeof evoluted)



    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: `https://play.pokemonshowdown.com/sprites/gen5/${evoluted}.png`
                }}

            />
            <Text style={styles.text}>{evoluted} </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",

    },
    text: {
        fontSize: 20,
        color: "black"
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
})
export default Evolutions;
