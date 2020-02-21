import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  text-align: center;
  height: 20vh;
`;

const Input = styled.input``;

const Button = styled.button`
  width: 20%;
`;

export default function SearchBar(props) {
  const [search, setSearch] = useState("");
  const gotoSearch = () => {
    props.setPage(["https://swapi.co/api/people", { search: search }]);
  };
  return (
    <Container>
      <Input type="text" onChange={ev => setSearch(ev.target.value)} />
      <Button onClick={gotoSearch} enabled={search === "" ?  "disabled" : "enabled"}>
        Go
      </Button>
    </Container>
  );
}
