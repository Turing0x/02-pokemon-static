import { createSignal, Show } from "solid-js";
import type { FavoritePokemon } from "../interfaces/favorite-pokemon";

interface Props {
  name: string;
  id: number;
}

export const FavoritePokemonCard = ({ name, id }: Props) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const [isVisible, setIsVisible] = createSignal(true);

  const removePokemonFromFavorites = (id: number) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]") as FavoritePokemon[];
    const newFavorites = favorites.filter((pokemon) => pokemon.id !== id.toString());

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <a class="flex cursor-pointer flex-col items-center justify-center rounded border p-2 transition-all hover:scale-105">
        <picture>
          <img class="h-24 w-24" src={imageUrl} alt={name} />
        </picture>

        <span class="capitalize">
          #{id} {name}
        </span>

        <button class="mt-3 text-white hover:text-red-500" onclick={() => removePokemonFromFavorites(id)}>
          Eliminar
        </button>
      </a>
    </Show>
  );
};
