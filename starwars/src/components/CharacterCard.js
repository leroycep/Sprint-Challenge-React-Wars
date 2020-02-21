import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  background-color: white;
  width: 40%;
  margin: 2%;
  padding: 2%;
`;

const Name = styled.h3``;

export default function CharacterCard(props) {
  return (
    <Container>
      <Name>{props.name}</Name>
      <ul>
        <li>Height: {props.height}</li>
        <li>Hair Color: {props.hair_color}</li>
        <li>Skin Color: {props.skin_color}</li>
        <li>Eye Color: {props.eye_color}</li>
        <li>Birth Year: {props.birth_year}</li>
        <li>Gender: {props.gender}</li>
      </ul>
    </Container>
  );
}
