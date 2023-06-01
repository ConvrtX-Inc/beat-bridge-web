import { Component, useRef, useEffect, useCallback, useState } from "react";
import { Col, Row, Image, Button, Form } from "react-bootstrap";
import DashboardStats from "../dashboard-stats/DashboardStats";
import NavBar from "../nav/NavBar";
import "./Support.scss";
import avatar from "../../assets/images/avatar-mock.png";
import supportImage from "../../assets/images/support-image.png";
import * as firebase from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, collectionGroup, orderBy, query, doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import Customloader from "../CustomLoader/customerLoader";
import axios from "../../api/axios";
import { ConsoleWriter } from "istanbul-lib-report";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


// const app = firebase.initializeApp({
//   apiKey: "AIzaSyDoBibzVodiv5FG5AB49KQPiaXDWwGB97s",
//   authDomain: "beatbridge-30087.firebaseapp.com",
//   projectId: "beatbridge-30087",
//   storageBucket: "beatbridge-30087.appspot.com",
//   messagingSenderId: "469833312597",
//   appId: "1:469833312597:web:c51c7da60c0bc25a95e7dc",
//   measurementId: "G-M13QR99KZ0"
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyC_89oUHRz1tbvl6_MklzhtQzAouj1qa2Y",
  authDomain: "beatbridge-71924.firebaseapp.com",
  projectId: "beatbridge-71924",
  storageBucket: "beatbridge-71924.appspot.com",
  messagingSenderId: "1033922139910",
  appId: "1:1033922139910:web:dd6c091141d9e4b7bbf087"
})


const db = getFirestore(app);

function Pointer(props) {

  const item = localStorage.getItem("selectedMessageIndex");
  var localIndex = 0
  if (item !== "undefined") {
    localIndex = JSON.parse(item)
  }
  if (props.index == localIndex) {
    return <div className="pointer"></div>
  }
  return null;
}

const Support = (props) => {
  const [selectedMessageIndex, setselectedMessageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [inputMessage, setInputMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState("");
  const [chatDisabled, setCharDisabaled] = useState(false);
  const [searchTicket, setSearchTicket] = useState([]);
  const [search, setSearch] = useState(null);

  const navigate = useNavigate();

  const getMessages = useCallback(async () => {
    var mycollection = collection(db, `messages`);
    var myQuery = query(mycollection, orderBy("timestamp", "desc"));
    var querySnapshot = await getDocs(myQuery);

    let dummyArr = []

    console.log(querySnapshot.size)
    for (const doc of querySnapshot.docs) {
      const fields = doc.data();
      const myCollection2 = collection(db, `messages/${doc.id}/texts`);
      const myQuery2 = query(myCollection2, orderBy("timestamp", "asc"));
      const texts = await getDocs(myQuery2);
      const textsArray = [];

      for (const msg of texts.docs) {
        const msgData = msg.data();
        const getNew = {
          content: msgData.text,
          time: "2:30 pm",
          type: msgData.type,
        };
        textsArray.push(getNew);
      }

      const myTicket = {
        name: `${fields.name}`,
        avatar: fields.image || avatar,
        ticketId: doc.id,
        ticket_status: `${fields?.ticket_status}`,
        messages: textsArray
      };
      dummyArr.push(myTicket);
    }
    setTimeout(function () {
      setSelectedTicketId(dummyArr[0]?.ticketId);
      var ticketStatus = undefined;
      if (dummyArr[0]?.ticket_status == undefined) {
        ticketStatus = false;
      } else if (dummyArr[0]?.ticket_status == "completed") {
        console.log("Completed");
        ticketStatus = true;
      }
      setCharDisabaled(ticketStatus)
      setTickets(dummyArr);
    }, 2000);

    setIsLoading(false)

  }, []);

  const inputNewMesaage = (e: any) => {
    e.preventDefault();
    setInputMessage(e.target.value);
  }
  const addNewMessage = async () => {
    if(inputMessage.length !== 0){
    let privateTicketId = null
    if (selectedTicketId) {
      privateTicketId = selectedTicketId;
    } else {
      privateTicketId = tickets[0].ticketId;
    }
   
    const mycollection = collection(db, `messages/${privateTicketId}/texts`);
    let date = new Date().getTime().toString();
    const user = localStorage.getItem("login");
    var JSONOBJ = JSON.parse(`${user}`);
    var senderId = JSONOBJ.data.user.id;
    console.log("sender_id", senderId);
    // console.log(date)
    const newMessage = {
      profilepic: "",
      receiverId: senderId,
      userid: senderId,
      text: inputMessage,
      ticketid: "6d70d5f9-be86-48ef-bbb4-69a72b6b79ce",
      timestamp: `${date}`,
      username: "admin",
      type: "out",
    };

    const docRef = await addDoc(mycollection, newMessage);
    console.log('Added new message with ID: ', docRef.id);

    console.log("After Message ADD");
    console.log("This is Object of message", tickets[selectedMessageIndex]);
    if (tickets[selectedMessageIndex]) {
      const getNew = {
        content: inputMessage,
        time: `${changeMiliSecondsToHours(1646482980000)}`,
        type: "out"
      }
      tickets[selectedMessageIndex].messages.push(getNew);
    }
    // setMessagesArray([...messagesArray, getNew]);
    setInputMessage("");
  }else{
    toast.error("Please Enter Message", {
      position: "top-center",
      autoClose: 2000,
  });
  }
  }

  const changeMiliSecondsToHours = (milliseconds) => {
    const date = new Date(milliseconds);
    const hours = date.getHours();
    let minutes = date.getMinutes();
    // Check if minutes is a valid number, set to 0 if not
    if (isNaN(minutes)) {
      minutes = 0;
    }
    // Convert hours from 24-hour format to 12-hour format and add "am" or "pm"
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    // Combine hours and minutes into a formatted time string
    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    console.log(formattedTime); // Output: "7:25 pm"
    console.log("Time")
    return formattedTime
  }

  const markAsCompleted = async () => {

    const messageDocRef = doc(db, 'messages', selectedTicketId);

    try {
      await updateDoc(messageDocRef, {
        ticket_status: 'completed'
      });
      console.log('Field added successfully!');
    } catch (e) {
      console.error('Error adding field: ', e);
    }

    const user = localStorage.getItem("login");
    var JSONOBJ = JSON.parse(`${user}`);
    var token = JSONOBJ.data.token;

    try {
      var res = await axios.get(`/api/v1/support/completed/${selectedTicketId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res) {
        console.log(res);
        toast.success("Marked Completed Successfully", {
          position: "top-center",
          autoClose: 1000,
        });
        setCharDisabaled(true)
      }
    } catch (error) {
      console.log("Error in Getting Data");
      console.log(error);
    }
  }

  const mock_data_chats = [
    {
      name: "Annette Murphy",
      avatar: avatar,
      messages: [
        {
          content: "hi",
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

  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/");
    }
    setInterval(() => {
      getMessages()
    }, 30000);


  }, [])

  useEffect(() => {
    if (!isLoading && tickets.length > 0) {
      console.log("Second Use Effect", tickets[0])
      if (tickets.length > 0) {
        setSelectedTicketId(tickets[0].ticketId);
      }
    }
  }, [isLoading]);

  const openMessage = (index) => {
    localStorage.setItem("selectedMessageIndex", JSON.stringify(index));
    setSelectedTicketId(tickets[index]?.ticketId);
    var ticketStatus = undefined;
    if (tickets[index]?.ticket_status == undefined) {
      ticketStatus = false;
    } else if (tickets[index]?.ticket_status == "completed") {
      console.log("Completed");
      ticketStatus = true;
    }
    setCharDisabaled(ticketStatus)
    setselectedMessageIndex(index);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
    var res = tickets.filter(function (element) {
      // console.log("ELEMEMT ---- ", element);
      if (element.ticketId != null)
        return element.ticketId
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
    });
    var ticketStatus = undefined;
    if (res[0]?.ticket_status == undefined) {
      ticketStatus = false;
    } else if (res[0]?.ticket_status == "completed") {
      console.log("Completed");
      ticketStatus = true;
    }
    setSelectedTicketId(res[0]?.ticketId);
    setCharDisabaled(ticketStatus)
    setSearchTicket(res);
  };



  return (
    <div>
      <NavBar />
      <div className="support-container mb-8">
        <DashboardStats />
        <Row className="text-start align-items-center">
          <Col md={4} className="welcome-container">
            <Image src={supportImage} />
            <div className="title-text-container">
              <h1>Support</h1>
            </div>
          </Col>
          <Col md={8}>
            <Form>
              <Form.Control type="email" placeholder="Search For Support Ticket No." className="search-box" onChange={handleSearch} />
            </Form>
          </Col>
        </Row>
        {isLoading ? < Customloader loader={isLoading} /> :
          <div className="chat-support-container">
            <div className="people-list">
              {search?.length > 0 ? <>
                {
                  searchTicket.map((chat, i) => (
                    <div className={selectedMessageIndex == i ? "message-container message-active" : "message-container"} key={i} onClick={
                      openMessage.bind(this, i)}>
                      <div className="avatar-container">
                        <img src={chat.avatar} className="avatar" />
                      </div>
                      <div className="sender-name">{chat.name}</div>
                      <div className="message-link">Most Recent Messages</div>
                      <Pointer index={i} selectedMessageIndex={selectedMessageIndex} selectedTicketId={chat.name}>  </Pointer>
                    </div>

                  ))
                }
              </> :
                <>
                  {
                    tickets.map((chat, i) => (
                      <div className={selectedMessageIndex == i ? "message-container message-active" : "message-container"} key={i} onClick={
                        openMessage.bind(this, i)}>
                        <div className="avatar-container">
                          <img src={chat.avatar} className="avatar" />
                        </div>
                        <div className="sender-name">{chat.name}</div>
                        <div className="message-link">Most Recent Messages</div>
                        <Pointer index={i} selectedMessageIndex={selectedMessageIndex} selectedTicketId={chat.name}>  </Pointer>
                      </div>

                    ))
                  }
                </>}

            </div>
            <div className="thread-list">
              <div className="list-header">
                <p>Support Ticket No:<span>{selectedTicketId?.slice(0, 8)}</span></p>
                <div className="rememberMe-container">
                  <div>
                    <Form>
                      <Form.Group controlId="rememberMeCheckbox">
                        <Form.Label className="me-2">Mark as completed</Form.Label>
                        {chatDisabled ? <Form.Check type="checkbox" checked /> : <Form.Check type="checkbox" onChange={markAsCompleted} />}
                      </Form.Group>
                    </Form>
                  </div>

                </div>
              </div>
              <div  >
                <div className="chat-thread-container">
                  {search?.length > 0 ? <>
                    {
                      searchTicket[selectedMessageIndex]?.messages.map((message, i) => (
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
                  </> : <>
                    {
                      tickets[selectedMessageIndex]?.messages.map((message, i) => (
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
                  </>}

                </div>

              </div>

              <div >
                <div className="chat-input-container align-self-end" >
                  <textarea placeholder="Start Typing your Message" value={inputMessage} onChange={inputNewMesaage} ></textarea>
                  {chatDisabled ? <Button className="send-btn" type="submit" onClick={addNewMessage} disabled>Send</Button> : <Button className="send-btn" type="submit" onClick={addNewMessage}>Send</Button>}

                </div>
              </div>

            </div>
          </div>
        }
      </div>
      <div className="custom-spacer">
      </div>
      <ToastContainer />
    </div>
  );
}


export default Support;

