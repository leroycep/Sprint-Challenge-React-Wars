import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  text-align: center;
`;

const Button = styled.button`
  width: 20%;
`;

export default function PageControls(props) {
  const isNext = props.next !== null;
  const gotoNext = () => props.setPage([props.next, null]);
  const isPrev = props.prev !== null;
  const gotoPrev = () => props.setPage([props.prev, null]);
  return (
    <Container>
      <Button onClick={gotoPrev} disabled={!isPrev}>
        Previous
      </Button>
      <div>
        Displaying {props.numCharacters} results out of {props.count}
      </div>
      <Button onClick={gotoNext} disabled={!isNext}>
        Next
      </Button>
    </Container>
  );
}
