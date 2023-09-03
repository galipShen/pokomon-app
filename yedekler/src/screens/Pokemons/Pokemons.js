import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "./ListItem";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const GET_POKEMONS = gql`
query GetAllPokemon($offset: Int, $take: Int) {
    getAllPokemon(offset: $offset, take: $take) {
      key
      color
    }
  }
`;
const Pokemons = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {
            offset: 17,
            take: 20
        }
    })

    if (loading) {
        return <Loading />
    }

    if (error) {
        console.log(error)
        return <Error />
    }
    console.log(data.getAllPokemon)
    return (
        <FlatList
            data={data.getAllPokemon}
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
export default Pokemons;