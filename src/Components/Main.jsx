import { AiOutlineDown } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { CgPlayListAdd } from "react-icons/cg";

export default function Main() {
  return (
    <div className="Main">
      <h2 className="Main-Guide">데이트 코스를 짜 봅시다 📝</h2>
      <div className="Main-Form">
        <div>내용을 입력하세요</div>
        <button>
          <GrEdit />
        </button>
      </div>
      <ul className="Main-List">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}

function ListItem() {
  return (
    <li className="List-Item">
      <div className="Item-Dropdown">
        분류 <AiOutlineDown />{" "}
      </div>
      <div className="Item-Desc">코스</div>
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
