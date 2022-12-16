import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import AboutMe from "./Components/AboutMe";

function App() {
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/data").then((res) => {
      setTodoList(res.data);
    });
  }, []);

  return (
    <div>
      <Router>
        <Nav />
        {todoList && (
          <Routes>
            <Route
              path="/"
              element={<Main todoList={todoList} setTodoList={setTodoList} />}
            ></Route>
            <Route path="/aboutme" element={<AboutMe />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
