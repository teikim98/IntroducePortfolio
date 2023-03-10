import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "./data";

const Article = ({ id }) => {
  const { category, title, para } = data.find((data) => data.id === id);

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <motion.div layoutId={`item-motion-${id}`}>
        <Link to="/Project">Go Back</Link>
        <motion.div className="image-motion" layoutId={`image-motion-${id}`}>
          <img className="image" src={require(`./images/${id}.jpeg`)} alt="" />
        </motion.div>
        <div className="content">
          <motion.div className="title-motion" layoutId={`title-motion-${id}`}>
            <span className="category">{category}</span>
            <h2 className="title">{title}</h2>
          </motion.div>
          <p>{para}</p>
        </div>
      </motion.div>{" "}
    </motion.div>
  );
};

export default Article;
