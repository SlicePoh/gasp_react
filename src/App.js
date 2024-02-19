import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Flipping } from "./pages/Flipping";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/flipping" element={<Flipping/>}/>
          {/* <Route exact path="/" element={<Home/>}/>
          <Route exact path="/" element={<Home/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
