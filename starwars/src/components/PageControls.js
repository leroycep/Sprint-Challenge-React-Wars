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
  const gotoNext = () => props.setPage(props.next);
  const isPrev = props.prev !== null;
  const gotoPrev = () => props.setPage(props.prev);
  return (
    <Container>
      <Button onClick={gotoPrev} enabled={isPrev ? "enabled" : "disabled"}>
        Previous
      </Button>
      <div>
        Displaying {props.numCharacters} results out of {props.count}
      </div>
      <Button onClick={gotoNext} enabled={isNext ? "enabled" : "disabled"}>
        Next
      </Button>
    </Container>
  );
}
