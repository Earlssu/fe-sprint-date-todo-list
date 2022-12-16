import { GoTrashcan } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { CgPlayListAdd } from "react-icons/cg";
import { useEffect, useState } from "react";
import "./Main.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function Main({ todoList, setTodoList }) {
  const [isEditOn, setIsEditOn] = useState(false);
  const [dateId, setDateId] = useState(null);

  return (
    <div>
      <div className="Main">
        <h2 className="Main-Guide">하고 싶은 데이트를 메모해두세요 📝</h2>
        <MainForm
          todoList={todoList}
          setTodoList={setTodoList}
          isEditOn={isEditOn}
          setIsEditOn={setIsEditOn}
          dateId={dateId}
        />
        <div className="Main-List-Header">
          <p>분류</p>
          <p>내용 및 날짜</p>
          <p>삭제 및 수정</p>
        </div>
        <ul className="Main-List">
          {todoList.dates.map((a, idx) => {
            return (
              <ListItem
                id={a.id}
                option={a.option}
                todo={a.todo}
                date={a.date}
                setTodoList={setTodoList}
                isEditOn={isEditOn}
                setIsEditOn={setIsEditOn}
                setDateId={setDateId}
                key={idx}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function MainForm({ todoList, setTodoList, isEditOn, setIsEditOn, dateId }) {
  const [dateOption, setDateOption] = useState("분류");
  const [dateDesc, setDateDesc] = useState("");
  const [startDate, setStartDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );

  useEffect(() => {
    if (isEditOn) {
      setDateOption(todoList.dates[dateId - 1].option);
      setDateDesc(todoList.dates[dateId - 1].todo);
      setStartDate(todoList.dates[dateId - 1].date);
    }
  }, [isEditOn]);

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
      id: `${todoList.dates.length + 1}`,
      option: dateOption,
      todo: dateDesc,
      date: startDate,
    };

    if (dateOption === "분류") {
      alert("올바른 분류를 골라주세요");
    } else if (dateDesc === "" || dateDesc === null) {
      alert("데이트 내용을 추가해주세요");
    } else {
      axios
        .post("http://localhost:4000/create", newData)
        .then((res) => setTodoList(res.data));
    }
  };

  const handleUpdate = (event) => {
    const fixedData = {
      id: `${dateId}`,
      option: dateOption,
      todo: dateDesc,
      date: startDate,
    };

    if (dateOption === "분류") {
      alert("올바른 분류를 골라주세요");
    } else if (dateDesc === "" || dateDesc === null) {
      alert("데이트 내용을 추가해주세요");
    } else {
      axios
        .post("http://localhost:4000/update", fixedData)
        .then((res) => setTodoList(res.data));
    }

    setDateOption("분류");
    setDateDesc("");
    setStartDate(new Date().toLocaleDateString("en-CA"));
    setIsEditOn(!isEditOn);
    event.preventDefault();
  };

  return (
    <form
      className="Main-Form"
      onSubmit={isEditOn ? handleUpdate : handleSubmit}
    >
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
          placeholder="데이트 내용을 입력하세요"
          value={dateDesc}
          onChange={handleInputChange}
        ></input>
      </div>

      <input type="submit" value={isEditOn ? "수정하기" : "추가하기"}></input>
    </form>
  );
}

function ListItem({
  id,
  option,
  todo,
  date,
  setTodoList,
  isEditOn,
  setIsEditOn,
  setDateId,
}) {
  const deleteDate = () => {
    axios
      .delete("http://localhost:4000/delete", {
        data: { id: id },
      })
      .then((res) => setTodoList(res.data));
  };

  const editDate = () => {
    setDateId(id);
    setIsEditOn(!isEditOn);
  };
  return (
    <li className="List-Item">
      <div className="Item-Dropdown">{option}</div>
      <div className="Item-Desc">
        <p className="Desc-Date">{date}</p>
        <p>{todo}</p>
      </div>
      <div className="Item-Buttons">
        <button onClick={editDate}>
          <GrEdit />
        </button>
        <button onClick={deleteDate}>
          <GoTrashcan />
        </button>
      </div>
    </li>
  );
}
