import { AiOutlineDown } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { CgPlayListAdd } from "react-icons/cg";

export default function Main({
  dateOption,
  setDateOption,
  todoList,
  setTodoList,
}) {
  return (
    <div className="Main">
      <h2 className="Main-Guide">데이트 코스를 짜 봅시다 📝</h2>
      <MainForm
        dateOption={dateOption}
        setDateOption={setDateOption}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <ul className="Main-List">
        {todoList.map((a, idx) => {
          return <ListItem option={a.option} todo={a.todo} key={idx} />;
        })}
      </ul>
    </div>
  );
}

function MainForm({ dateOption, setDateOption, todoList, setTodoList }) {
  const handleChange = (event) => {
    setDateOption(event.target.value);
  };

  const handleSubmit = () => {
    console.log("submitted!");
  };
  return (
    <form className="Main-Form" onSubmit={handleSubmit}>
      <select value={dateOption} onChange={handleChange}>
        <option value="분류">분류</option>
        <option value="활동">활동</option>
        <option value="식사">식사</option>
        <option value="카페">카페</option>
        <option value="디저트">디저트</option>
      </select>
      <input type="text" placeholder="내용을 입력하세요"></input>
      <input
        type="submit"
        value="Submit"
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <GrEdit onClick={() => console.log("test")} />
        //     </InputAdornment>
        //   ),
        // }}
      ></input>
    </form>
  );
}

// 이후 해당 컴포넌트를 활용해 더미 데이터를 기반으로 랜더할 예정입니다.
function ListItem({ option, todo }) {
  return (
    <li className="List-Item">
      <div className="Item-Dropdown">{option}</div>
      <div className="Item-Desc">{todo}</div>
      <div className="Item-Buttons">
        <button>
          <GrEdit />
        </button>
        <button>
          <GoTrashcan />
        </button>
        <button>
          <CgPlayListAdd />
        </button>
      </div>
    </li>
  );
}
