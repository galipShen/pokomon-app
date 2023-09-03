import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import ListItem from "./ListItem";

//components
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { GET_POKEMONS } from "./queries";
const Pokemons = () => {

    const { loading, error, data } = useQuery(GET_POKEMONS, {
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

    return (
        <FlatList
            data={data.getAllPokemon}
            keyExtractor={item => item.key}
            renderItem={({ item }) => <ListItem item={item} />}
            style={styles.container}
        />
    )
};
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    }
})
export default Pokemons;
