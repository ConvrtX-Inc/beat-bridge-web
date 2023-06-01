import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/users.svg";
import { ReactComponent as SupportIcon } from "../../assets/icons/support.svg";
import { Image } from "react-bootstrap";
import bellIcon from "../../assets/images/bell.png";
import avatar from "../../assets/images/mock-avatar.png";

function NavItemIcon(props: any) {
  if (props.routePath == "/dashboard") {
    return <DashboardIcon className="nav-icon" fill={props.color} />;
  } else if (props.routePath == "/users") {
    return <UsersIcon stroke={props.color} />;
  } else if (props.routePath == "/support") {
    return <SupportIcon stroke={props.color} />;
  }
  return <DashboardIcon stroke={props.color} />;
}

export default NavItemIcon;
