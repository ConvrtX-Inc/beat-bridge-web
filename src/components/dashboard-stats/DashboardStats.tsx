import { Row, Col, Image, Card } from "react-bootstrap";
import CustomAreaChart from "../charts/CustomAreaChart";
import CustomBarChart from "../charts/CustomBarChart";
import './DashboardStats.scss';
import dashboardImage from "../../assets/images/dashboard-image.png";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link,useAsyncError,useNavigate } from 'react-router-dom';

const data = [
  {
    name: "Data 1",
    count: 0,
  },
  {
    name: "Data 2",
    count: 0,
  },
  {
    name: "Data 3",
    count: 0,
  },
  {
    name: "Data 4",
    count: 0,
  },
];

 const DashboardStats = (props: any)=> {
  const [usersCount, setUsersCount] = useState(0);
  const [userStats, setUserStats] = useState([]);
  const [totalPlaylist , setTotalPlaylist] = useState(0);
  const [totalTracks, setTotalTracks] = useState(0);
  const [totalSubscriptions,setTotalSubscriptions] = useState(0);
  const [trackStats,setTrackStats] = useState([]);
  const [playlistStats,setPlaylistStats] = useState([]);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("login")){ 
      const user = localStorage.getItem("login");
      var JSONOBJ = JSON.parse(`${user}`);
      var token = JSONOBJ.data.token;     

      setUserName(JSONOBJ.data.user.username);
      const getTotalCount = async()=>{
        try {
          var res = await axios.get('/api/v1/users/count',{
            headers: { Authorization: `Bearer ${token} ` },
          })          
          setUsersCount(res.data.userCount);
          setUserStats(res.data.user_stats);
          setTotalPlaylist(res.data.queueCount);
          setTotalTracks(res.data.tracksCount);
          setTrackStats(res.data.tracks_stats);
          setTotalSubscriptions(res.data.subscriptionCount);       
          setPlaylistStats(res.data.playlist_stats);
        } catch (error) {
          localStorage.clear();
          navigate("/");
        }
      }
      getTotalCount();
    }else{
      navigate("/");
    }
  },[])



  return (
    <div>
      <Row className="text-start">
        <Col className="welcome-container">
          <div>
            <Image src={dashboardImage} className="welcome-image" />
            <div className="title-text-container">
              <h4>Welcome {userName} !</h4>
              <h1>Beat Bridge Dashboard</h1>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="text-start">
        <Col lg={3} md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col >
                    <div className="graph-title">Active Users</div>
                    <h4 className="count-text users">{usersCount}</h4>
                  </Col>
                  <Col>
                    <div className="graph-title">Since Last Year</div>
                    <div className="graph-percentage users">7,000%</div>
                  </Col>
                </Row>
              </Card.Title>
            </Card.Body>
            <CustomAreaChart
              data={userStats}
              height={100}
              stroke="#8201FF"
              id="usersGraph"
              strokeWidth="2"
              dataKey="count"
            />
          </Card>
        </Col>
        <Col lg={3} md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col xs>
                    <div className="graph-title">Total Songs</div>
                    <h4 className="count-text songs">{totalTracks}</h4>
                  </Col>
                  <Col>
                    <div className="graph-title">Since Last Year</div>
                    <div className="graph-percentage songs">7,000%</div>
                  </Col>
                </Row>
              </Card.Title>
            </Card.Body>
            <CustomBarChart
              data={trackStats}
              height={100}
              fill="#5484ff"
              dataKey="count"
            />
          </Card>
        </Col>
        <Col lg={3} md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col xs>
                    <div className="graph-title">User Subscriptions</div>
                    <h4 className="count-text projects">{totalSubscriptions}</h4>
                  </Col>
                  <Col>
                    <div className="graph-title">Since Last Year</div>
                    <div className="graph-percentage projects">7,000%</div>
                  </Col>
                </Row>
              </Card.Title>
            </Card.Body>
            <CustomAreaChart
              data={data}
              height={100}
              stroke="#FF795B"
              id="projectsGraph"
              dataKey="count"
            />
          </Card>
        </Col>
        <Col lg={3} md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col xs>
                    <div className="graph-title">Total Playlists</div>
                    <h4 className="count-text playlists">{totalPlaylist}</h4>
                  </Col>
                  <Col>
                    <div className="graph-title">Since Last Year</div>
                    <div className="graph-percentage playlists">7,000%</div>
                  </Col>
                </Row>
              </Card.Title>
            </Card.Body>
            <CustomAreaChart
              data={playlistStats}
              height={100}
              stroke="#5ebf22"
              id="playlistGraph"
              strokeWidth="2"
              dataKey="count"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardStats;
