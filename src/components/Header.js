import styled from "styled-components";

export default function Main(){

const Header = styled.header`
    postion: fixed;
    width : 100%;
    top: 0;
    left:0;
    bottom:0;
    background-color:#fff000;

`;
const Nav =styled.nav`
    display: flex;
    margin : 0 auto;
    height: 70px;
`;


    return(
        <header>
            <nav>
            <div className='logo'><a href="#">goHome</a></div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Board</a></li>
            </ul>
            </nav>
        </header>
    )
}