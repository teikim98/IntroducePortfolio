import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "./data";

const Item = ({ id, title, category, isSelected }) => {
  return (
    <li className="item">
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
    </li>
  );
};

const List = ({ selectedId }) => {
  return (
    <ul className="list">
      {data.map((item) => (
        <Item key={item.id} {...item} isSelected={item.id === selectedId} />
      ))}
    </ul>
  );
};

export default List;
