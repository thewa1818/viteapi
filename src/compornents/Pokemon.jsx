import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Items = styled.div`
  padding: 30px 40px;
`;

const Next = styled.div`
  width: 500px;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Pokemon = () => {
  const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemonData, setPokemonData] = useState([]);

  //非同期でurlに与えたURLからデータを取得する関数
  const getAllPokemon = (url) => {
    return new Promise((resolve) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
  };
  const getPokemon = (url) => {
    return new Promise((resolve) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
  };

  //map関数で一つ一つ各ポケモンのurlにアクセスして詳細を取得してstateに格納する関数
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  //上記の関数を一度だけ実行する
  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(pokeApiUrl);
      loadPokemon(res.results);
    };
    fetchPokemonData();
  }, []);

  console.log(pokemonData);
  return (
    <>
      <Flex>
        {pokemonData.map((pokemon) => {
          return (
            <Items key={pokemon.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={pokemon.sprites.front_default}
                  title={pokemon.species.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {pokemon.species.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    weight:{pokemon.weight}
                    <br />
                    height:{pokemon.height}
                    <br />
                    type:{pokemon.types[0].type.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Items>
          );
        })}
      </Flex>
      <Next>
        <Stack spacing={2}>
          <Pagination count={10} size="large" />
        </Stack>
      </Next>
    </>
  );
};

export default Pokemon;
