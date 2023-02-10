import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Logo from "../img/Logo.png";

//전체 헤더 컨테이너
const HeaderNav = styled.header`
  position: fixed;
  height: 70px;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;
//네비 컨테이너
const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  width: 93%;
  .logo {
    font-size: 50px;
    font-weight: bold;
    color: blue;
  }
  .menu {
    padding: 5px;
    box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
      0 5px 0 0 black, -3px -3px 0 3px #a3a3a3 inset;

    ul {
      display: flex;
    }
    li {
      margin-right: 5px;
      line-height: 38px;
      & > a {
        padding: 0 30px;
        display: inline-block;
        font-weight: 500;
        transition: all 0.3s ease;
        position: relative;
        &::after {
          width: 0;
          left: 0;
          position: absolute;
          height: 100%;
          content: "";
          z-index: -1;
          background-color: gray;
          transition: all 0.6s ease 0.3s;
        }
        &:hover {
          color: tomato;
        }
        &.active {
          left: 0;
          height: 0;
          height: 100%;
          z-index: 100;
          color: blue;
          transition: all 0.6s ease 0.3s;
        }
      }
    }
  }
`;

const LogoImg = styled.img`
  width: 10rem;
  height: 5rem;
  margin-top: 15px;
  margin-left: 15px;
`;

export default function Header() {
  const location = useLocation().pathname;

  return (
    <HeaderNav>
      <Nav>
        <div className="logo">
          <Link to="/">
            <LogoImg src={Logo} alt="Logo"></LogoImg>
          </Link>
        </div>
        <div className="menu pixel-borders pixel-borders--custom">
          <ul>
            <li>
              <Link
                to="/"
                className={
                  location === "Home" || location === "/" ? "active" : ""
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={location === "/About" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Project"
                className={location === "/Project" ? "active" : ""}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/Board"
                className={location === "/Board" ? "active" : ""}
              >
                Board
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </HeaderNav>
  );
}
