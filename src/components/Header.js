import styled from "styled-components";

export default function Main() {
  const Header = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${props => props.theme.bgColor};
    z-index: 999;
  `;
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
          &:hover{
            color: tomato;
          }
          &.active{
            left: 0;
            height: 0;
            background-color: ${props => props.theme.textColor};
            height: 100%;
            z-index: 100;
            color: ${props => props.theme.bgColor};
            }
        }
      }
    }
  `;

  return (
    <Header>
      <Nav>
        <div className="logo">
          <a href="#">goHome</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Board</a>
            </li>
          </ul>
        </div>
      </Nav>
    </Header>
  );
}
