import { Component } from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import DashboardStats from "../dashboard-stats/DashboardStats";
import NavBar from "../nav/NavBar";
import "./Support.scss";
import avatar from "../../assets/images/avatar-mock.png";
import supportImage from "../../assets/images/support-image.png";

const mock_data_chats = [
  {
    name: "Annette Murphy",
    avatar: avatar,
    messages: [
      {
        content: "Hi, how are you?",
        time: "2:30 pm",
        type: "in"
      }, {
        content: "I'm good",
        time: "2:30 pm",
        type: "out"
      }, {
        content: "Good to hear!",
        time: "2:30 pm",
        type: "in"
      }, {
        content: "What about you?",
        time: "2:30 pm",
        type: "out"
      }, {
        content: "Where are you?",
        time: "2:30 pm",
        type: "out"
      },
      {
        content: "At home!",
        time: "2:30 pm",
        type: "in"
      }, {
        content: "Hi, how are you?",
        time: "2:30 pm",
        type: "in"
      }, {
        content: "I'm good",
        time: "2:30 pm",
        type: "out"
      }, {
        content: "Good to hear!",
        time: "2:30 pm",
        type: "in"
      },
      
    ]
  },
  {
    name: "John Doe",
    avatar: avatar,
    messages: [
      {
        content: "Hi, how are you?",
        time: "2:30 pm",
        type: "in"
      }, {
        content: "I'm good",
        time: "2:30 pm",
        type: "out"
      }, {
        content: "Good to hear!",
        time: "2:30 pm",
        type: "in"
      }, {
        content: "What about you?",
        time: "2:30 pm",
        type: "out"
      }, {
        content: "Where are you?",
        time: "2:30 pm",
        type: "out"
      }
    ]
  },
  {
    name: "Annette Murphy",
    avatar: avatar,
    messages: [
      {
        content: "Hi, how are you?",
        time: "2:30 pm",
        type: "in"
      }, {
        content: "I'm good",
        time: "2:30 pm",
        type: "out"
      }, {
        content: "Good to hear!",
        time: "2:30 pm",
        type: "in"
      }, 
    ]
  },
  {
    name: "Annette Murphy",
    avatar: avatar,
    messages: [
      {
        content: "Hi, how are you?",
        time: "2:30 pm",
        type: "in"
      }, {
        content: "I'm good",
        time: "2:30 pm",
        type: "out"
      },  
    ]
  },
  {
    name: "Juan Dela Cruz",
    avatar: avatar,
    messages: [
      {
        content: "Hi, how are you?",
        time: "2:30 pm",
        type: "in"
      }, 
    ]
  }
]

function Pointer(props:any){
     
  if (props.index == props.selectedMessageIndex) {
    return <div className="pointer"></div>
  }
  return null;
}


export default class Support extends Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      selectedMessageIndex: 0
    };
  }

  openMessage = (index: number) => {
    this.setState({ selectedMessageIndex: index });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="support-container mb-8">
          <DashboardStats />
          <Row className="text-start">
            <Col className="welcome-container">
              <Image src={supportImage} />
              <div className="title-text-container">
                <h1>Support</h1>
              </div>
            </Col>
          </Row>

          <div className="chat-support-container">
        
            <div  className="people-list">
                {
                  mock_data_chats.map((chat, i) => (
                    <div className={this.state.selectedMessageIndex == i ? "message-container message-active" : "message-container"} key={i} onClick={
                      this.openMessage.bind(this, i)
                    }>
                      <div className="avatar-container">
                        <img src={chat.avatar} className="avatar" />
                      </div>
                      <div className="sender-name">{chat.name}</div>
                      <div className="message-link">Most Recent Messages</div>
                      <Pointer index ={i} selectedMessageIndex = {this.state.selectedMessageIndex}> </Pointer>
                    </div>

                  ))
                }
            
            </div>
         

            <div className="thread-list">
              <div  >
                <div className="chat-thread-container">
                  {
                    mock_data_chats[this.state.selectedMessageIndex].messages.map((message,i) => (
                      <div key={i} className={message.type == 'in' ? "incoming-message" : "my-message"}>
                        <div className="message">
                          {message.content}
                        </div>
                        <div className="time">
                          {message.time}
                        </div>
                      </div>
                    ))
                  }
                </div>

              </div>

              <div >
                <div className="chat-input-container align-self-end" >
                  <textarea placeholder="Start Typing your Message"></textarea>
                  <Button className="send-btn" type="submit">Send</Button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="custom-spacer">

        </div>
      </div>
    );
  }

  
}
