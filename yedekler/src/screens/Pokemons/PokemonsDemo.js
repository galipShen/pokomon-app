import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "./ListItem";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const GET_POKEMONS = gql`
query GetPokemonByDexNumber($number: Int!) {
    getPokemonByDexNumber(number: $number) {
      key
      color
    }
  }
`;
const PokemonsDemo = () => {
    const { error, loading, data } = useQuery(GET_POKEMONS, {
        variables: {
            number: 1
        }
    })

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    console.log(data)

    return (
        <FlatList
            data={null}
            key={item => item.key}
            renderItem={({ item }) => <ListItem item={item} />}
        />
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default PokemonsDemo;