'use client'
import { usePokemon } from '@/context/context'
import { getPokemon } from '@/lib/pokemonFetch';
import { useEffect, useState } from 'react';

interface baseStats {
  hp: number,
  attack: number,
  defense: number,
  spAttack: number,
  spDefense: number,
  speed: number
}

const DisplayBaseAbility = () => {
  const { pokemon } = usePokemon();
  const [abilities, setAbilities] = useState("N/A")
  const [baseTotal, setBaseTotal] = useState(0)
  const [baseData, setBaseData] = useState<baseStats>({
    hp : 0,
      attack : 0,
      defense: 0,
      spAttack: 0,
      spDefense: 0,
      speed: 0
  })

  const displayBaseAbilityStat = async () => {
    const data = await getPokemon(pokemon);
    console.log(pokemon);
    console.log(data);
    setBaseData({
      hp : data.stats[0].base_stat,
      attack : data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      spAttack: data.stats[3].base_stat,
      spDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat
    })

    let statTotal = 0;
    for (let i = 0; i < data.stats.length; i++) {
        statTotal += data.stats[i].base_stat;
    }
    setBaseTotal(statTotal)

    let abilityString = "";
    for (let i = 0; i < data.abilities.length; i++) {
        if (data.abilities[i].is_hidden)
            abilityString += `Hidden Ability: ${data.abilities[i].ability.name}, `
        else
            abilityString += data.abilities[i].ability.name + ", ";
    }

    if(abilityString === "")
        abilityString = "N/A";
    setAbilities(abilityString)
  }

  useEffect(() => {
    displayBaseAbilityStat()
  }, [pokemon])

  return (
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
                    <p>{baseData?.hp}</p>
                    <p >{baseData?.attack}</p>
                    <p >{baseData?.defense}</p>
                    <p >{baseData?.spAttack}</p>
                    <p >{baseData?.spDefense}</p>
                    <p >{baseData?.speed}</p>
                  </div>
                </div>
                <h3 className="mt-18" >Total Stats: {baseTotal}</h3>
              </div>
              <div className="bg-[#FAFAFA]/95 border border-current p-3.5 max-w-75 sm:w-75">
                <h2 className="pb-3 text-2xl">Abilities</h2>
                <p id="abilities">{abilities}</p>
              </div>
              
            </div>
          </div>
  )
}

export default DisplayBaseAbility