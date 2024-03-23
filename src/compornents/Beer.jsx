import { useState, useEffect } from "react";
import BeerData from "./BeerData";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 1000px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  padding: 50px 0px 20px 0px;
`;

const Cat = () => {
  const [fetchData, setFetchData] = useState([]);

  const fetchBeers = async () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://api.punkapi.com/v2/beers";

    try {
      const response = await fetch(proxyUrl + apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setFetchData(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <>
      <Wrapper>
        <Title>ビール一覧</Title>
        <BeerData fetchData={fetchData} />
      </Wrapper>
    </>
  );
};

export default Cat;
