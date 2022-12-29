
import { AnimatePresence } from "framer-motion";
import { useParams } from "react-router";
import List from "./proCom/List";
import Article from "./proCom/Article";
import "./proCom/style.scss";

export default function Main() {
    const { id } = useParams();
  
    return (
      <>
        <AnimatePresence>{id && <Article id={id} />}</AnimatePresence>
        <List selectedId={id !== undefined ? id : ""} />
      </>
    );
  }