import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import Donate from "./components/pages/Donate";

function App() {
  return (
  <Layout>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/donate" exact element={<Donate />} />
    </Routes>
  </Layout>
  );
}

export default App;
