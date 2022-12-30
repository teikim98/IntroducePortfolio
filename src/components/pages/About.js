import styled from "styled-components";
import { AnimatePresence, motion } from 'framer-motion';

const Container = styled.section`
    
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;

`;

const Introduce = styled.motion.div`

    margin-bottom: 2rem;
`

const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration : 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };
  

function About() {
  return (
    <Container>
      <Introduce variants={list} initial ='hidden' animate='visible'>
        
      </Introduce>
       <motion.ul variants={list} initial="hidden" animate="visible">
        <motion.li variants={item}>저는 이런 사람입니다 ... +++ 이런 가치관과 세계관을 가지고 있습니다 ... ++++ </motion.li>
      </motion.ul>
     </Container>
  );
}

export default About;