import { Routes, Route } from "react-router-dom";
import Home from "components/pages/Home";
import Board from "components/pages/Board";
import Project from "components/pages/Project";
import About from "components/pages/About";
import Layout from "./Layout";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
      </Route>
    </Routes>
  );
}
