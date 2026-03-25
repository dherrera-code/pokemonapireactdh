import DisplayBaseAbility from "@/components/DisplayBaseAbility";
import DisplayEvolutions from "@/components/DisplayEvolutions";
import DisplayMainPokemon from "@/components/DisplayMainPokemon";
import DisplayMovesLocation from "@/components/DisplayMovesLocation";

import TopHeaderComponent from "@/components/TopHeaderComponent";


export default function Home() {
  return (
    <div className="bg-[url('/assets/Pokeball-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed  font-sans ">
      <TopHeaderComponent></TopHeaderComponent>
      <section className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(400px,460px)] gap-9 mb-8 place-items-center">
          <DisplayMainPokemon></DisplayMainPokemon>

          <DisplayEvolutions></DisplayEvolutions>
          {/* Base Stats and Abilities */}
          <DisplayBaseAbility></DisplayBaseAbility>
          <DisplayMovesLocation></DisplayMovesLocation>


        </div>
      </section>
    </div>
  );
}
