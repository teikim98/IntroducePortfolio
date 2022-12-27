import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  position: absolute;
  top: 70px;
  bottom: 70px; 
  left: 70px;
  right: 70px;
  overflow: hidden;
  & > div {
    height: 100%;
    display: flex;
  }
`;
const Picture = styled.div`
  width: 43%;
  position: relative;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
const Contents = styled.div`
  width: calc(100% - 35%);
  background-color: tomato;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
function Layout() {
  return (
    <Container>
      <div>
        <Picture>
          <img src={''} alt='MainPic'></img>
        </Picture>
        <Contents>
          <Outlet />
        </Contents>
      </div>
    </Container>
  );
}

export default Layout;