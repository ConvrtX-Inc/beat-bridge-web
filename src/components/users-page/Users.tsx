import { useEffect, useState } from "react";
import { Col, Row, Image, Table } from "react-bootstrap";
import NavBar from "../nav/NavBar";
import { BsTrash } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";
import "./Users.scss";
import usersImage from "../../assets/images/users-image.png";
import DashboardStats from "../dashboard-stats/DashboardStats";
import SweetAlert2, { withSwal } from 'react-sweetalert2';
import avatar from "../../assets/images/mock-avatar.png";
import Customloader from "../CustomLoader/customerLoader";


const User = (props: any) => {
  const [swalProps, setSwalProps] = useState({});


  const deleteUser = () => {
 
    setSwalProps({
      show: true,
      title: 'Delete User',
      text: 'Are You Sure You Want to Delete this User ?',
      showDenyButton: true,
      denyButtonText: `Cencel`,
      confirmButtonText: 'Delete',
      async onConfirm() {
        console.log(props.data.id);
        try {
          const user = localStorage.getItem("login");
          var JSONOBJ = JSON.parse(`${user}`);
          var token = JSONOBJ.data.token;

          const res = await axios.delete(`/api/v1/users/${props.data.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (res) {
            window.location.reload();
          }
        } catch (error) {
          console.log("Error in Deleting the User");
        }
      },
      didClose() {      
        
      }

    });
  };

  return (
    <>
      <tr>
        <td>
          {props.data.avatar_id ? (
            <img src={props.data.avatar_id}></img>
          ) : (
            <img src={avatar}></img>
          )}
        </td>
        <td>{props.data.username}</td>
        <td>{props.data.email}</td>
        <td>{props.data.phone_no}</td>
        <td>{props.data.location}</td>
        <td>
          <Link to="#" onClick={deleteUser}> <BsTrash /></Link>
        </td>
      </tr>
      <SweetAlert2 {...swalProps} />
    </>
  )
};

const Users = () => {
  const navigate = useNavigate();
  var [user, setUser] = useState([]);
  var [loader, setloader] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/");
    }
    const user = localStorage.getItem("login");
    var JSONOBJ = JSON.parse(`${user}`);
    var token = JSONOBJ.data.token;
    setloader(true);
    const fetchUser = async () => {
      try {
        var res = await axios.get("/api/v1/users?limit=1000", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res) {
          console.log(res);
          setUser(res.data);
          setloader(false);
        } else {
          console.log("No Data found");
        }
      } catch (error) {
        console.log("Error in Getting Data");
        console.log(error);
      }
    };
    fetchUser();
  }, []);


  return (
    <div>
      <NavBar />
      {loader ?
        < Customloader loader={loader} /> :
        <div className="users-container">
          <DashboardStats />
          <Row className="text-start">
            <Col className="welcome-container">
              <Image src={usersImage} />
              <div className="title-text-container">
                <h1>Users</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="mb-8">
              <Table hover>
                <tbody>
                  {user.map((x: any, i: any) => (
                    <User key={i} data={x} />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      }
      
    </div>
  );
};

export default Users;
