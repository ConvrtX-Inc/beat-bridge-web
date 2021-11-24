import React, { Component } from "react";
import { Container, Navbar, Image, Nav, Row, Col, Card } from "react-bootstrap";
import NavBar from "../NavBar/navbar";

import "./dashboard.scss";
// images
import dashboardImage from "../../assets/images/dashboard-image.png";
import totalSongsImage from "../../assets/images/total-songs-image.png";
import locationImage from "../../assets/images/location-image.png";

// Charts
import CustomAreaChart from "../CustomChart/CustomChart";
import CustomBarChart from "../CustomBarChart/CustomBarChart";
import CustomLineChart from "../CustomLineChart/CustomLineChart";

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

const totalSongsData = [
  {
    name: "Mar 2021",
    playlist_name: "David Jukebox",
    songs_played: 200,
  },
  {
    name: "Apr 2021",
    playlist_name: "David Jukebox",
    songs_played: 1500,
  },
  {
    name: "May 2021",
    playlist_name: "David Jukebox",
    songs_played: 200,
  },
  {
    name: "Jun 2021",
    playlist_name: "David Jukebox",
    songs_played: 600,
  },
  {
    name: "Jul 2021",
    playlist_name: "David Jukebox",
    songs_played: 100,
  },
  {
    name: "Aug 2021",
    playlist_name: "David Jukebox",
    songs_played: 1200,
  },
  {
    name: "Sep 2021",
    playlist_name: "David Jukebox",
    songs_played: 800,
  },
  {
    name: "Oct 2021",
    playlist_name: "David Jukebox",
    songs_played: 1300,
  },
  {
    name: "Nov 2021",
    playlist_name: "David Jukebox",
    songs_played: 300,
  },
  {
    name: "dec 2021",
    playlist_name: "David Jukebox",
    songs_played: 500,
  },
];

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="container">
          <Row className="text-start">
            <Col className="welcome-container">
              <Image src={dashboardImage} className="welcome-image" />
              <div className="title-text-container">
                <h4>Welcome David!</h4>
                <h1>Beat Bridge Dashboard</h1>
              </div>
            </Col>
          </Row>
          <Row className="text-start">
            <Col lg={3} md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col xs>
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
                <CustomBarChart data={data} height={100} fill="#5484ff"  dataKey="count"/>
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
          <Row className="text-start">
            <Col className="welcome-container">
              <Image src={totalSongsImage} />
              <div className="title-text-container">
                <h1>Total Songs Played</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <CustomLineChart
                stroke="#FF5BEF"
                height={500}
                data={totalSongsData}
                id="totalSongsGraph"
                dataKey="songs_played"
              />
            </Col>
          </Row>

          <Row className="text-start">
            <Col className="welcome-container">
              <Image src={locationImage} />
              <div className="title-text-container">
                <h1>Users by location</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
