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
  margin-bottom: 3.125rem;
  > li {
    margin-right: 2rem;
    h2 {
      font-size: x-large;
      font-weight: 500;
    }
  }
  
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
        <Skill variants={item}>
          <motion.li>
            <h2>
              Self Introduce
            </h2>
          </motion.li>
          <motion.li>
            <p>
              이러쿵 저러쿵 저는 이런사람이고 어쩌구 저쩌구 loremals colnts
              asdnlwa dmclakn alckawmd,s kakk w adwk;aw
            </p>
          </motion.li>
        </Skill>
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
