import "./NavItem.scss";

import { NavLink, useLocation } from "react-router-dom";
import NavItemIcon from "../NavItemIcon/NavItemIcon";

function NavItem(props: any) {
  let currentRoute = useLocation().pathname;
  let isActive = currentRoute === props.path;
  var className = isActive ? "active" : "";
  return (
    <NavLink to={props.path} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className={className}>
        <NavItemIcon routePath={props.path} />
        {props.text}
      </div>
    </NavLink>
  );
}

export default NavItem;
