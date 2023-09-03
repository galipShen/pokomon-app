import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { POKEMON_DETAIL } from "./queries";
import { useNavigation } from '@react-navigation/native';
//components
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Label from "../../components/Label";

const Detail = ({ route }) => {
    const navigation = useNavigation();
    const { key, color } = route.params || {
        key: "cetoddle",
        color: "white",
    }
    const { loading, error, data } = useQuery(POKEMON_DETAIL, {
        variables: {
            offset: 17,
            take: 20,
            reverse: true
        }
    })
    if (loading) {
        return <Loading />
    }

    if (error) {
        console.log(error)
        return <Error />
    }

    //ALL POKEMONS
    const pokeData = data?.getAllPokemon;
    //SELECTED POKEMON
    const selectedPoke = pokeData?.find(pokemon => pokemon.key === key)
    //ABILITIES
    const abilityName = selectedPoke?.abilities?.first?.name;
    const abilityDesc = selectedPoke?.abilities?.first?.shortDesc;

    //ATTACK-DEFEND OPTIONAL CHAINING METHOD
    //console.log("ATTACK: ", selectedPoke?.types[0]?.matchup?.attacking?.normalTypes)
    //console.log("DEFEND: ", selectedPoke?.types[1]?.matchup?.attacking?.normalTypes)

    //ATTACK-DEFEND DECONSTRUCTION METHOD
    const { types } = selectedPoke || {}
    const { matchup: attackingMatchup } = types?.[0] || {}
    const { attacking } = attackingMatchup || {}
    const { normalTypes: attackingNormalTypes } = attacking || {}

    const { matchup: defendingMatchup } = types?.[0] || {}
    const { defending } = defendingMatchup || {}
    const { normalTypes: defendingNormalTypes } = defending || {}

    console.log(selectedPoke)
    const pokeBgColor = { backgroundColor: selectedPoke.color.toLowerCase() }

    return (
        <View style={[styles.container, pokeBgColor]}>
            <Image
                style={styles.image}
                source={{
                    uri: `https://play.pokemonshowdown.com/sprites/gen5/${key}.png`
                }}
            />
            <Text style={styles.text} >{key}</Text>
            <Label title="Attacking Types" data={attackingNormalTypes} />
            <Label title="Defending Types" data={defendingNormalTypes} />

            <TouchableOpacity
                style={styles.abilitiesButton}
                onPress={() => navigation.navigate("Abilities", {
                    abilityName: abilityName,
                    abilityDesc: abilityDesc,
                    selectedPoke: selectedPoke
                })}
            >
                <Text style={styles.abilitiesText}> GO ABILITIES</Text>
            </TouchableOpacity>
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
    text: {
        fontSize: 30,
        fontWeight: "600",
        textTransform: "capitalize",
        color: "black",
        textAlignVertical: "center",
        paddingHorizontal: 15,
        marginBottom: 70
    },
    desc: {
        fontSize: 20,
        color: "black"
    },
    abilitiesButton: {
        backgroundColor: "purple",
        flex: 0.5,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        borderWidth: 3,
        borderColor: "rgb(255, 100, 155)",
        borderRadius: 8,
        backgroundColor: 'purple',
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
    abilitiesText: {
        fontSize: 30,
        fontWeight: "600",
        textTransform: "uppercase",
        color: "black",
    }
})
export default Detail;
