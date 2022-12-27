import styled from "styled-components"

const FooterBar = styled.footer`
  height: 70px;
  line-height: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  position: fixed;
  padding: 0 70px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 20px;
  }
`;
function Footer() {
  return (
    <FooterBar>
      <Wrapper>
        <div className='copyright'>Copyright © 2022</div>
        <div className='menu'>
          <a href='https://github.com/teikim98'>
            Github
          </a>
        </div>
      </Wrapper>    
    </FooterBar>
  );
}
export default Footer;