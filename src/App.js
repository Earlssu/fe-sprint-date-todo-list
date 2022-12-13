import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/mycourse"></Route>
          <Route path="/randomcourse"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
