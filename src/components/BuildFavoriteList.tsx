import { createSignal, For } from "solid-js";

import PokemonCard from "./PokemonCard.astro";
import type { FavoritePokemon } from "../interfaces/favorite-pokemon";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

function getExistingFavorites(): FavoritePokemon[] {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites as FavoritePokemon[];
}

export const BuildFavoriteList = () => {
  const [favList, setFavList] = createSignal(getExistingFavorites());

  return (
    <>
      <For each={favList()}>{({ id, name }) => <FavoritePokemonCard id={+id} name={name} />}</For>
    </>
  );
};
