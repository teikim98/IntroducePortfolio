import styled from "styled-components";
import BoardList from "./boardCom/BoradList";

const Container = styled.section`
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 5rem;
`;

function Board() {
  return (
    <Container>
        <BoardList></BoardList>
    </Container>
  );
}

export default Board;
