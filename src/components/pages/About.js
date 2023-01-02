import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.section`
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 5rem;

`;

const Introduce = styled(motion.div)`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 3.125rem;
  .text {
    line-height: 25px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const Skill = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3.125rem;
  > li {
    margin-right: 2rem;
    h2 {
      font-size: x-large;
      font-weight: 500;
    }
  }
  
`;

const SelfIntro = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 3.125rem;
  > li {
    
  }
  align-items: center;
  
`;

const IntroName = styled.span`
    
    display: inline-block;
    padding-bottom: 0.5rem;
    position: relative;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-weight: 700;
    color: rgb(51, 51, 51);
    font-size: 60px;
    font-weight: 500;

    &::after {
    content: "";
    margin-left: 1.563rem;
    position: absolute;
    width: 300px;
    height: 1px;
    background-color: rgb(0,0,0);
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    }

    &::before {
    content: "";
    margin-right: 1.563rem;
    position: absolute;
    width: 300px;
    height: 1px;
    background-color: rgb(0,0,0);
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    }
`

const IntroArticle = styled.div`
   backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: (5.5px);
    background: rgba(255, 255, 255, 0.30);
    border: 1px solid rgba(255, 255, 255, 0.34);
    border-radius: 16px; 
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    color: #232323;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
    padding: 10px;
    min-width: 768px;
    font-size: 20px;
`


const list = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

function About() {
  return (
    <Container>
      <Introduce variants={list} initial="hidden" animate="visible">
        <SelfIntro variants={item}>
          <motion.li>
            <IntroName>about me</IntroName>
          </motion.li>
          <motion.li>
            <IntroArticle>
              이러쿵 저러쿵 저는 이런사람이고 어쩌구 저쩌구 loremals colnts <br></br>
              asdnlwa dmclakn alckawmd,s kakk w adwk;aw <br></br>
              rkskekfk aksqktk dks krkqwkdkkqw kqnlf ql nw <br></br>
              여기까지
            </IntroArticle>
          </motion.li>
        </SelfIntro>
        <Skill variants={item}>
          <motion.li>
            <FontAwesomeIcon icon={faJsSquare} size="5x" />
          </motion.li>
          <motion.li>
            <FontAwesomeIcon icon={faHtml5} size="5x" />
          </motion.li>
          <motion.li>
            <FontAwesomeIcon icon={faCss3} size="5x" />
          </motion.li>
        </Skill>
        <Skill variants={item}>
          <motion.li>
            <FontAwesomeIcon icon={faNode} size="5x" />
          </motion.li>
          <motion.li>
            <FontAwesomeIcon icon={faReact} size="5x" />
          </motion.li>
          <motion.li>
            <FontAwesomeIcon icon={faBootstrap} size="5x" />
          </motion.li>
        </Skill>
      </Introduce>
    </Container>
  );
}

export default About;
