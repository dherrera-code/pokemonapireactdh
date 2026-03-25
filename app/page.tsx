import DisplayEvolutions from "@/components/DisplayEvolutions";
import DisplayMainPokemon from "@/components/DisplayMainPokemon";
import FavoritesDrawer from "@/components/FavoritesDrawer";
import TopHeaderComponent from "@/components/TopHeaderComponent";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/assets/Pokeball-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed  font-sans ">
      <TopHeaderComponent></TopHeaderComponent>
      <section className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(400px,460px)] gap-9 mb-8 place-items-center">
          <DisplayMainPokemon></DisplayMainPokemon>

          <DisplayEvolutions></DisplayEvolutions>
          {/* Base Stats and Abilities */}
          <div className="lg:col-start-2 lg-row-start-1">
            <div className="grid sm:grid-cols-2 gap-2">

              <div className="bg-[#FAFAFA]/95 border border-current p-3.5 justify-center ">
                <h2 className="pb-3 text-2xl">Base Stats</h2>
                <div className="grid grid-cols-2">
                  <div className="pe-1">
                    <p className="text-end">HP: </p>
                    <p className="text-end">Attack: </p>
                    <p className="text-end">Defense: </p>
                    <p className="text-end">Sp. Attack: </p>
                    <p className="text-end">Sp. Defense: </p>
                    <p className="text-end">Speed: </p>
                  </div>
                  <div className="col-start-2">
                    <p >0</p>
                    <p >0</p>
                    <p >0</p>
                    <p >0</p>
                    <p >0</p>
                    <p >0</p>
                  </div>
                </div>
                <h3 className="mt-18" >Total Stats: 325</h3>
              </div>


              <div className="bg-[#FAFAFA]/95 border border-current p-3.5 max-w-75">
          <h2 className="pb-3 text-2xl">Abilities</h2>
          <p id="abilities">Hidden Ability: Anticipation Other Abilities: Run Away, Adaptability</p>
        </div>


            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
