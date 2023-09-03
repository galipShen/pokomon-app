import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Pokemons from './screens/Pokemons/Pokemons';
import Detail from './screens/Detail/Detail';
import Abilities from './screens/Abilities/Abilities';

const HomeStack = createStackNavigator();

const MyTheme = {
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(255,255, 255)',
        card: 'rgb(255, 100, 155)',
        text: 'rgb(255,255, 255)',
    },
};

export default function App() {
    return (
        <NavigationContainer
            theme={MyTheme}>
            <HomeStack.Navigator  >
                <HomeStack.Screen name="Pokemons" component={Pokemons}
                    options={{ title: "POKEMONS" }}
                />
                <HomeStack.Screen name="Detail" component={Detail}
                    options={({ route }) => ({ title: route.params.key.toUpperCase() })} />
                <HomeStack.Screen name="Abilities" component={Abilities}
                    options={{ title: "ABILITIES" }}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}
