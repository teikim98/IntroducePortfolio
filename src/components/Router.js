import { Routes, Route } from "react-router-dom";
import Home from "components/pages/Home";
import Board from "components/pages/Board";
import Main from "components/pages/Project";
import About from "components/pages/About";
import Layout from "./Layout";
import BoardWrite from "./pages/boardCom/BoardWrite";
import BoardDetail from "./pages/boardCom/BoardDetails";

export default function Router() {
  return (  
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/Board/write" element={<BoardWrite />} />
        <Route path='/board/:id' element={<BoardDetail />} />
        <Route path="/Project" element={<Main />} />
        <Route path="/Project/:id" element={<Main />} />
        <Route path="/About" element={<About />} />
      </Route>
    </Routes>
  );
}
