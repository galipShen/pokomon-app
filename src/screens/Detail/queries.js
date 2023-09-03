import { gql } from "@apollo/client";

export const POKEMON_DETAIL = gql`
query GetAllPokemon($offset: Int, $take: Int, $reverse: Boolean) {
  getAllPokemon(offset: $offset, take: $take, reverse: $reverse) {
    key
    color
    sprite
    abilities {
      first {
        shortDesc
        name
      }
    }
    types {
      matchup {
        attacking {
          normalTypes
        }
        defending {
          normalTypes
        }
      }
    }
  }
}
  
`;