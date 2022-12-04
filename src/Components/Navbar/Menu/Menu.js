import { bool } from "prop-types";
import React, { useReducer } from "react";
import { StyledMenu } from "../../../Styles/Menu.styled";
import LightBulb from "../../../Assets/iconAssets/lightbulb.svg";

// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'switchOn':
//       return {switch: state.switch false};
//   }
// }

/* 
TODO: 
* - ADD LOGIC TO ENABLE USER SWITCH OF THEME LIGHT OR DARK function maybe using hooks so it allows the theme to be changed univerisally.
*/

const Menu = ({ navOpen }) => {
  const [themeSwitch, toggle] = useReducer(
    (themeSwitch) => !themeSwitch,
    false
  );
  // const [liSwitch, setSwitch] = useState(false);
  // const [liText, setText] = useState("");

  return (
    <StyledMenu navOpen={navOpen}>
      <a href="/">Home</a>
      <a href="/Signup">SignUp</a>
      <a href="/AccountDashboard">Account Dashboard</a>
      <br />
      <label>
        <input type="checkbox" value={themeSwitch} onChange={toggle} />
        <p>{themeSwitch ? "DARK" : "LIGHT"}</p>
        <span>
          <img src={LightBulb} />
        </span>
      </label>
    </StyledMenu>
  );
};
Menu.prototype = {
  open: bool.isRequired,
};
export default Menu;
