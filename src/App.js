import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import { useState } from "react";
import MyCourse from "./Components/MyCourse";
import RandomCourse from "./Components/RandomCourse";
import { dummyData } from "./Data/SampleData.js";

function App() {
  const [todoList, setTodoList] = useState(dummyData);
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Main todoList={todoList} setTodoList={setTodoList} />}
          ></Route>
          <Route
            path="/mycourse"
            element={<MyCourse todoList={todoList} />}
          ></Route>
          <Route path="/randomcourse" element={<RandomCourse />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
