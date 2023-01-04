import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "./data";


const projectList = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.1,
    },
  },
};

const projectItem = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};


const Item = ({ id, title, category, isSelected }) => {
  return (
    <motion.li className="item"  variants={projectItem}>
      <motion.div layoutId={`item-motion-${id}`}>
        <Link to={`/Project/${id}`} className="link">
          <div className="content">
            <motion.div
              className="title-motion"
              layoutId={`title-motion-${id}`}
            >
              <span className="category">{category}</span>
              <h2 className="title">{title}</h2>
            </motion.div>
            <motion.div
              className="image-motion"
              aria-hidden="true"
              layoutId={`image-motion-${id}`}
            >
              <img className="image" src={`./images/${id}.jpeg`} alt="" />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </motion.li>
  );
};

const List = ({ selectedId }) => {
  return (
    <motion.ul className="list" variants={projectList} initial="hidden" animate="visible" >
      {data.map((item) => (
        <Item key={item.id} {...item} isSelected={item.id === selectedId}/>
      ))}
    </motion.ul>
  );
};

export default List;
