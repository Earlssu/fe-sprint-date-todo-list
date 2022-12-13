import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Nav() {
  const [navClicked, setNavClicked] = useState(false);

  const toggleHamburger = () => {
    console.log("hello!");
    setNavClicked(!navClicked);
  };

  return (
    <header>
      <nav className="App-Nav">
        <div className="Nav-Logo">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "logo.png"}></img>
          </Link>
        </div>
        <h1 className="Nav-Title">
          <span>데이</span>투두리스트
        </h1>
        <ul className="Nav-List">
          <Link to="/" className="Nav-Item">
            처음으로
          </Link>
          <Link to="/mycourse" className="Nav-Item">
            나의 데이트 코스
          </Link>
          <Link to="/randomcourse" className="Nav-Item">
            랜덤 코스 추천
          </Link>
          <Link to="/aboutme" className="Nav-Item">
            누가 만들었나요?
          </Link>
        </ul>

        <div className="Nav-Hamburger" onClick={toggleHamburger}>
          <RxHamburgerMenu />
        </div>
      </nav>
    </header>
  );
}
