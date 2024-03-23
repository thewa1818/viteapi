import { useState, useEffect } from "react";
import styled from "styled-components";
import Recipe from "./Recipe";
import Button from "@mui/material/Button";

const Form = styled.form`
  text-align: center;
  padding-top: 50px;
`;

const Input = styled.input`
  display: inline-block;
  height: 7px;
  width: 300px;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
`;

const Edamam = () => {
  const app_id = import.meta.env.VITE_API_ID;
  const app_key = import.meta.env.VITE_API_KEY;

  console.log(app_id, "aaa");

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // 入力した時にsearchの更新
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const truncateCalories = (calories) => {
    return Math.floor(calories);
  };

  return (
    <>
      <Form onSubmit={getSearch}>
        <Input type="text" value={search} onChange={updateSearch} />
        <Button
          className="Btn"
          variant="contained"
          type="submit"
          disableElevation
        >
          検索する
        </Button>
      </Form>
      <Wrapper>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            calories={truncateCalories(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            label={recipe.recipe.label}
            mealType={recipe.recipe.mealType}
            source={recipe.recipe.source}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default Edamam;
