import { GoTrashcan } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { CgPlayListAdd } from "react-icons/cg";
import { useState } from "react";
import "./Main.css";
import "react-datepicker/dist/react-datepicker.css";

export default function Main({ todoList, setTodoList }) {
  return (
    <div className="Main">
      <h2 className="Main-Guide">데이트 코스를 짜 봅시다 📝</h2>
      <MainForm todoList={todoList} setTodoList={setTodoList} />
      <ul className="Main-List">
        {todoList.map((a, idx) => {
          return (
            <ListItem
              option={a.option}
              todo={a.todo}
              date={a.date}
              todoList={todoList}
              setTodoList={setTodoList}
              key={idx}
            />
          );
        })}
      </ul>
    </div>
  );
}

function MainForm({ todoList, setTodoList }) {
  const [dateOption, setDateOption] = useState("분류");
  const [dateDesc, setDateDesc] = useState(null);
  const [startDate, setStartDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );

  const handleOptionChange = (event) => {
    setDateOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setDateDesc(event.target.value);
  };

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleSubmit = (event) => {
    const newData = {
      option: dateOption,
      todo: dateDesc,
      date: startDate,
    };

    if (dateOption === "분류") {
      alert("올바른 분류를 골라주세요");
    } else if (dateDesc === "" || dateDesc === null) {
      alert("데이트 내용을 추가해주세요");
    } else {
      setTodoList([newData, ...todoList]);
    }
    event.preventDefault();
  };
  return (
    <form className="Main-Form" onSubmit={handleSubmit}>
      <div className="Form-Date">
        <label>날짜</label>
        <input
          type="date"
          name="trip-start"
          value={startDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="Form-Detail">
        <select value={dateOption} onChange={handleOptionChange}>
          <option value="분류">분류</option>
          <option value="활동">활동</option>
          <option value="식사">식사</option>
          <option value="카페">카페</option>
          <option value="디저트">디저트</option>
        </select>
        <input
          type="text"
          placeholder="내용을 입력하세요"
          onChange={handleInputChange}
        ></input>
      </div>

      <input type="submit" value="추가하기"></input>
    </form>
  );
}

// 이후 해당 컴포넌트를 활용해 더미 데이터를 기반으로 랜더할 예정입니다.
function ListItem({ option, todo, date, todoList, setTodoList }) {
  const deleteDate = () => {
    setTodoList(todoList.filter((a) => a.option !== option));
  };
  return (
    <li className="List-Item">
      <div className="Item-Dropdown">{option}</div>
      <div className="Item-Desc">
        <p className="Desc-Date">{date}</p>
        <p>{todo}</p>
      </div>
      <div className="Item-Buttons">
        <button>
          <GrEdit />
        </button>
        <button onClick={deleteDate}>
          <GoTrashcan />
        </button>
        <button>
          <CgPlayListAdd />
        </button>
      </div>
    </li>
  );
}
