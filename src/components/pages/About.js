import styled from "styled-components";
import { AnimatePresence, motion } from 'framer-motion';

const Container = styled.section`
    
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 70px;

`;

const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
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
       <motion.ul variants={list} initial="hidden" animate="visible">
        <motion.li variants={item}>item 1</motion.li>
        <motion.li variants={item}>item 2</motion.li>
        <motion.li variants={item}>item 3</motion.li>
      </motion.ul>
     </Container>
  );
}

export default About;