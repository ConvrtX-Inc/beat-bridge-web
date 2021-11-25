import React, { Component } from "react";
import { Container, Navbar, Image, Nav, Row, Col, Card } from "react-bootstrap";

import "./dashboard.scss";
// images
import dashboardImage from "../../assets/images/dashboard-image.png";
import totalSongsImage from "../../assets/images/total-songs-image.png";
import locationImage from "../../assets/images/location-image.png";
import GoogleMapContainer from "../google-map/GoogleMapContainer";

// Charts
import CustomLineChart from "../charts/CustomLineChart";
import DashboardStats from "../dashboard-stats/DashboardStats";
import NavBar from "../navbar/NavBar";

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
        <div className="dashboard-container">
          <DashboardStats />
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
                height={450}
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

          <Row>
            <Col className="mb-8">
              <Card>
                <GoogleMapContainer />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
