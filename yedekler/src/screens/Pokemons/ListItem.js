import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ item }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => {
                navigation.push("Detail", {
                    key: item.key,
                })
            }}
        >
            <View style={styles.pokeBox} >
                <View style={[styles.pokeColor, { backgroundColor: item.color.toLowerCase() }]}>
                    <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={{
                            uri: `https://play.pokemonshowdown.com/sprites/gen5/${item.key.toLowerCase()}.png`
                        }}
                    />
                    {/*<Text>{item.color}</Text> */}
                </View>
                <Text style={styles.text}>{item.key}</Text>
            </View>
        </TouchableOpacity >
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pokeBox: {
        flexDirection: "row",
        margin: 10,
        borderWidth: 1,
        borderColor: "gray",
        padding: 5,
        borderRadius: 5
    },
    image: {
        width: 150,
        height: 150
    },
    text: {
        fontSize: 25,
        margin: 10,
        textTransform: "capitalize",
        color: "black",
        fontWeight: "bold",
        textAlignVertical: "center"
    },
    pokeColor: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 5
    }
})
export default ListItem;