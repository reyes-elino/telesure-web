import { Routes, Route } from "react-router-dom";
import Base from "./Base/Base";
import Home from "./Home/Home";
import Login from "./Login/Login";
import VertexSpecification from "./VertexSpecification/VertexSpecification";
import EdgeSpecification from "./EdgeSpecification/EdgeSpecification";
import EdgeList from "./EdgeList/EdgeList";
import GraphList from "./GraphList/GraphList";
import VertexList from "./VertextList/VertexList";
import About from "./AboutUs/AboutUs";
import Help from "./Help/Help";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={< Login />} />
          {/* MAIN Routes - Start  */}
          <Route element={<Base />}>
            <Route path="home" element={< Home />} />
            <Route path="vertex_specification" element={< VertexSpecification />} />
            <Route path="edge_specification" element={< EdgeSpecification />} />
            <Route path="edge_list" element={< EdgeList />} />
            <Route path="graph_list" element={< GraphList />} />
            <Route path="vertex_list" element={< VertexList />} />
            <Route path="about" element={< About />} />
            <Route path="help" element={< Help />} />

          </Route>
          {/* MAIN Routes - End  */}
        </Routes>
    </>
  );
}

export default App;