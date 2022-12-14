import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import { useState } from "react";
import MyCourse from "./Components/MyCourse";
import RandomCourse from "./Components/RandomCourse";

function App() {
  const dummyData = [
    {
      option: "활동",
      todo: "신촌 로빈훗",
    },
    {
      option: "식사",
      todo: "홍대 닭꼬얌",
    },
    {
      option: "카페",
      todo: "차차 티클럽",
    },
    {
      option: "디저트",
      todo: "Molly's",
    },
  ];

  const [dateOption, setDateOption] = useState("분류");
  const [todoList, setTodoList] = useState(dummyData);
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                todoList={todoList}
                setTodoList={setTodoList}
                dateOption={dateOption}
                setDateOption={setDateOption}
              />
            }
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
