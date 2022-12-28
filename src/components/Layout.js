import { Outlet,useLocation } from "react-router-dom";
import styled from "styled-components";
import Img from 'img/HomeImg.webp'

//전체 컨테이너
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
//사진 구역
const Picture = styled.div`
    &.active{
        width: 43%;
    }
  position: relative;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  width: 0%;
  transition: 0.5s;
`;
//컨텐츠 
const Contents = styled.div`
  width: 100%;
  background-color: tomato;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &.onActive{
    width: calc(100%-35%);
  }
  transition: 0.5s;
`;


function Layout() {


const location = useLocation().pathname;

  return (
    <Container>
      <div>
        <Picture className={location === "Home" || location === "/" ? "active" : ""}>
          <img src={Img} alt='BigBen'></img>
        </Picture>
        <Contents className={location === "Home" || location === "/" ? "onActive" : ""}>
          <Outlet />
        </Contents>
      </div>
    </Container>
  );
}

export default Layout;