import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";

//components
import Loading from "../../components/Loading";
import Error from "../../components/Error";
//syclar

const POKEMON_DETAIL = gql`
query GetAllPokemon($offset: Int, $take: Int, $pokemon: PokemonEnum!) {
    getAllPokemon(offset: $offset, take: $take) {
      key
      color
    }
    getPokemon(pokemon: $pokemon) {
      key
      sprite
      abilities {
        first {
          name
          shortDesc
        }
      }
    }
  }
`
    ;
const Detail = ({ route }) => {
    const { key } = route.params;
    const { loading, error, data } = useQuery(POKEMON_DETAIL, {

        variables: {
            pokemon: key,
            offset: 17,
            take: 20
        }
    });
    if (loading) {
        return <Loading />
    }
    if (error) {
        //console.log(error)
        return <Error />
    }
    console.log(data.getPokemon)
    console.log(data.getPokemon.key)
    console.log(data.getPokemon.abilities.first.name)
    console.log(data.getPokemon.abilities.first.shortDesc)


    return (
        <View style={styles.container}>
            <Text>Detail DENEME</Text>
            <Text style={styles.text} >{key}</Text>
            {/** <Text>{data.getAllPokemon[0].color}</Text> */}
            <Text style={styles.text}>{data.getPokemon.abilities.first.name}</Text>
            <Text style={styles.text} >{data.getPokemon.abilities.first.shortDesc}</Text>

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
        fontSize: 25,
        margin: 10,
        textTransform: "capitalize",
        color: "black",
        fontWeight: "bold",
        textAlignVertical: "center"
    }
})
export default Detail;
