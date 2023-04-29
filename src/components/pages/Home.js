import styled from "styled-components";
import { motion } from "framer-motion";

//홈 컨테이너
const Cotainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
//모션 래퍼
const MotionWrapper = styled.div`
    div{
        margin-left: 3rem;
    }
  h1 {
    font-size: 80px;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 20px;
  }

  h2 {
    font-size: 50px;
    font-weight: 400;
    line-height: 1.2;
    opacity: 0.75;
    margin: 0;
  }
  .word-wrapper {
    white-space: nowrap;
  }
`;
const Wrapper = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

const AnimatedCharacters = (props) => {
  const item = {
    hidden: {
      y: "200%",
      color: "gray",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "black",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = props.text.split(" ");

  const words = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  const Tag = tagMap[props.type];

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

const placeholderText = [
  { type: "heading1", text: "TY's 포트폴리오" },
  { type: "heading1", text: "-----" },
  {
    type: "heading2",
    text: "Welcome to my WebApp!",
  },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

function Home() {
  return (
    <Cotainer>
      <MotionWrapper>
        <motion.div initial="hidden" variants={container} animate="visible">
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </motion.div>
      </MotionWrapper>
    </Cotainer>
  );
}

export default Home;
