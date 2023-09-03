import React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
//issues 
//on long words , go below or overflow
// no png on dudunsparcent, if not show "image not found" on screen
//kingambit , black text on black bg 
const ListItem = ({ item }) => {
    const navigation = useNavigation()
    const itemBgColor = { backgroundColor: item.color.toLowerCase() }
    return (
        <>
            <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.push("Detail", {
                    key: item.key,
                    color: item.color,
                })}>
                <View style={[styles.itemBox, itemBgColor]}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.sprite
                        }}
                    />
                    <Text style={styles.text} >
                        {item.key}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
};
const styles = StyleSheet.create({
    itemBox: {
        marginTop: 15,
        flexDirection: "row",
        borderWidth: 3,
        borderColor: "rgb(255, 100, 155)",
        borderRadius: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",

    },
    //image does not show , cos of long poke name 
    text: {
        fontSize: 30,
        fontWeight: "600",
        textTransform: "capitalize",
        color: "black",
        textAlignVertical: "center",
        paddingHorizontal: 15,
    }
})
export default ListItem;
