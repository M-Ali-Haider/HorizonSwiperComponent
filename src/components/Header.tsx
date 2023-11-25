import "./Header.css";
import optionsvg from "../assets/option.svg";

const Header = () => {
  return (
    <div className="Header">
      <h2>HORIZON WEBWORKS</h2>

      <div className="linksheader">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Work</li>
        </ul>
        <button className="contactbtn">Contact</button>
        <div className="mobilebtn">
          <img src={optionsvg} alt="" />
          <div className="btncontent">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Work</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
