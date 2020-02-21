import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import PageControls from "./components/PageControls";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  max-width: 1080px;
  margin: 0 auto;
`;

const Content = styled.div`
  margin-top: 20vh;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [pageAndParams, setPage] = useState([
    "https://swapi.co/api/people",
    null
  ]);

  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const [page, params] = pageAndParams;
    axios
      .get(page, { params: params })
      .then(res => {
        console.log(res);
        setCount(res.data.count);
        setCharacters(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
      })
      .catch(e => console.log("There was an error getting the data: ", e));
  }, [pageAndParams]);

  return (
    <Container className="App">
      <h1 className="Header">React Wars</h1>
      <Content>
        <SearchBar setPage={setPage} />
        <PageControls
          numCharacters={characters.length}
          count={count}
          prev={prev}
          next={next}
          setPage={setPage}
        />

        <Cards>
          {characters.map((c, idx) => (
            <CharacterCard key={idx} {...c} />
          ))}
        </Cards>

        <PageControls
          numCharacters={characters.length}
          count={count}
          prev={prev}
          next={next}
          setPage={setPage}
        />
        <SearchBar setPage={setPage} />
      </Content>
    </Container>
  );
};

export default App;
