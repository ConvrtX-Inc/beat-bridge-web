import { Row,Col,Image,Card } from "react-bootstrap";
import CustomAreaChart from "../charts/CustomAreaChart";
import CustomBarChart from "../charts/CustomBarChart";
import './DashboardStats.scss';
import dashboardImage from "../../assets/images/dashboard-image.png";
 
const data = [
  {
    name: "Data 1",
    count: 2000,
  },
  {
    name: "Data 2",
    count: 2780,
  },
  {
    name: "Data 3",
    count: 1890,
  },
  {
    name: "Data 4",
    count: 2390,
  },
];

function DashboardStats(props: any) {
  return (
    <div>
      <Row className="text-start">
        <Col className="welcome-container">
          <div>
            <Image src={dashboardImage} className="welcome-image" />
            <div className="title-text-container">
              <h4>Welcome David!</h4>
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
                    <h4 className="count-text users">260</h4>
                  </Col>
                  <Col>
                    <div className="graph-title">Since Last Year</div>
                    <div className="graph-percentage users">7,000%</div>
                  </Col>
                </Row>
              </Card.Title>
            </Card.Body>
            <CustomAreaChart
              data={data}
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
                    <div className="graph-title">Songs Played</div>
                    <h4 className="count-text songs">32</h4>
                  </Col>
                  <Col>
                    <div className="graph-title">Since Last Year</div>
                    <div className="graph-percentage songs">7,000%</div>
                  </Col>
                </Row>
              </Card.Title>
            </Card.Body>
            <CustomBarChart
              data={data}
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
                    <div className="graph-title">Completed Projects</div>
                    <h4 className="count-text projects">19</h4>
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
                    <h4 className="count-text playlists">40</h4>
                  </Col>
                  <Col>
                    <div className="graph-title">Since Last Year</div>
                    <div className="graph-percentage playlists">7,000%</div>
                  </Col>
                </Row>
              </Card.Title>
            </Card.Body>
            <CustomAreaChart
              data={data}
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
