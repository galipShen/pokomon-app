import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Abilities = ({ route }) => {

    const { abilityName, abilityDesc, selectedPoke } = route.params
    const key = selectedPoke.key;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: `https://play.pokemonshowdown.com/sprites/gen5/${key}.png`
                }}
            />
            <Text style={styles.title} >{key}</Text>
            <Text style={styles.title} >Ability: {abilityName}</Text>
            <Text style={styles.desc} >{abilityDesc}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        textTransform: "capitalize",
        color: "black",
        textAlignVertical: "center",
        paddingHorizontal: 15,
    },
    desc: {
        fontSize: 20,
        color: "black"
    },
})
export default Abilities;
