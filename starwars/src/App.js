import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CharacterCard from "./components/CharacterCard.js";
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
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        console.log(res);
        setCount(res.data.count);
        setCharacters(res.data.results);
      })
      .catch(e => console.log("There was an error getting the data: ", e));
  }, []);

  return (
    <Container className="App">
      <h1 className="Header">React Wars</h1>
      <Content>
        <p>
          Displaying {characters.length} results out of {count}
        </p>
        <Cards>
          {characters.map((c, idx) => (
            <CharacterCard key={idx} {...c} />
          ))}
        </Cards>
      </Content>
    </Container>
  );
};

export default App;
