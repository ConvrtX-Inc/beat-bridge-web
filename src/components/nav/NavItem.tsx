import "./NavItem.scss";
import { NavLink, useLocation } from "react-router-dom";
import NavItemIcon from "./NavItemIcon";

function NavItem(props: any) {
  let currentRoute = useLocation().pathname;
  let isActive = currentRoute === props.path;
  var className = isActive ? "nav-item active" : "nav-item";
  let iconColor = isActive ? "#8201ff" : "black";
  return (
    <NavLink to={props.path} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className={className}>
        <NavItemIcon routePath={props.path} className="icon" color={iconColor}  />
        <span className="text">{props.text}</span>
        <Divider isActive={isActive}/>
      </div>
    </NavLink>
  );
}

function Divider(props:any){
  const isActive = props.isActive;
  if (isActive) {
    return <div className="divider"></div>
  }
  return null;
}

export default NavItem;
