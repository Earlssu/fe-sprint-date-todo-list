import avatar from "./Images/avatar.jpg";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiStyledcomponents, SiJavascript } from "react-icons/si";
import { FaBlogger, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <div className="About-Info">
        <img src={avatar}></img>
        <div className="About-Detail">
          <p>심민섭</p>
          <a href="https://github.com/shim5505">
            GitHub <BsGithub />
          </a>
          <a href="https://code-in-law.tistory.com/">
            Blog <FaBlogger />
          </a>
        </div>
      </div>
      <div className="Made-With">
        <p>Made With . . .</p>
        <div>
          <span className="React">
            React <FaReact />
          </span>
          {" and "}
          <span className="Styled-Component">
            Styled-Component <SiStyledcomponents />
          </span>
        </div>
        <br></br>
        <p>Based on . . .</p>
        <div>
          <span className="HTML">
            HTML5 <AiFillHtml5 />,
          </span>{" "}
          <span className="CSS">
            CSS <DiCss3 />,
          </span>
          {" and "}
          <span className="JS">
            JavaScript <SiJavascript />
          </span>
        </div>
      </div>
    </div>
  );
}
