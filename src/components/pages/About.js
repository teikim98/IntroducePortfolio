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
  text-align: center;
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
  margin-bottom: 2rem;
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
    background-color: rgb(0, 0, 0);
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
    background-color: rgb(0, 0, 0);
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const IntroArticle = styled.div`
  max-width: 800px;
  line-height: 2.5rem;
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: (5.5px);
  background: rgba(255, 255, 255, 0.3);
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
`;

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
              안녕하세요 신입프론트엔드 개발자 김태휘입니다.
              <br /> React , Typescript를 주로 이용하여 다양한 웹사이트를
              제작하고 있습니다! UI/UX 디자인과 웹 접근성에 대한 관심이 많고,
              사용자 친화적이며 반응형인 웹사이트를 구현하는 것을 즐깁니다 또한
              웹의 성능향상이나 신기술 접목에도 큰 관심이 있으며, 아토믹
              디자인의 컴포넌트를 구현하기 위해 힘씁니다 <br />
              팀워크를 중요하게 생각하며, 항상 적극적으로 참여하여 함께 성장하고
              발전하는 기업의 일원이 되고자 합니다.
            </IntroArticle>
          </motion.li>
        </SelfIntro>
        <motion.ul variants={item}>
          <motion.li>
            <IntroName>Skills</IntroName>
          </motion.li>
        </motion.ul>
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
