import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import PokemonGrid from './PokemonGrid';
import SearchPanel from './SearchPanel';


const { Meta } = Card;


const service = async() => {
  const data = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      query :
       `query MyQuery {
        pokemon_v2_pokemon(limit: 10) {
          base_experience
          height
          id
          is_default
          name
          order
          pokemon_species_id
          weight
        }
      }`
    })
  })

  return data
}



function PokemonApp() {

    const [data, setData] = useState([]);
    const [weight, setWeight] = useState(0);

    const handleWeight = (value) => {
        setWeight(value);
    }


  useEffect(() => {
    service().then(res => res.json())
    .then(data => {
      // console.log(data.data.pokemon_v2_pokemon);
      setData(data.data.pokemon_v2_pokemon)
    })
    // return () => {
    //   cleanup
    // }
  }, [])

  const style = { background: '#0092ff', padding: '8px 0' };

  return (
    <div className="App">
        <SearchPanel handleWeight = {handleWeight} />
        <PokemonGrid minWeight = {weight} data = {data}/>
    <div> {weight} </div>
    </div>
  );
}

export default PokemonApp;
