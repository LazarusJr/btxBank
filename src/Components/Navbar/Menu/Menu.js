import { bool } from "prop-types";
import React, { useReducer } from "react";
import { StyledMenu } from "../../../Styles/Menu.styled";
import LightBulb from "../../../Assets/iconAssets/lightbulb.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../Redux/themeSlice";

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
  // const handleClick = () => {
  //   updateState(!false);
  // };
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <StyledMenu navOpen={navOpen}>
      <a href="/">Home</a>
      <a href="/Signup">SignUp</a>
      <a href="/AccountDashboard">Account Dashboard</a>
      <br />
      <label>
        <input
          type="checkbox"
          // value={themeSwitch}
          onChange={() => dispatch(toggleTheme())}
        />
        <p>
          {theme.dark ? (
            "DARK"
          ) : (
            <span style={{ color: "skyblue" }}>LIGHT</span>
          )}
        </p>
        <span className="lightSwitcher">
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
