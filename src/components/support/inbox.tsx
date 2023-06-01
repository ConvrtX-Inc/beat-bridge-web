
import { Component, useRef, useEffect, useState } from "react";

const inboxss = (props) => {

    const [selectedMessageIndex, setselectedMessageIndex] = useState(0);
    var tickets = props.data;

    const openMessage = (index) => {
        setselectedMessageIndex(index);
    }
    function Pointer(props) {

        if (props.index == props.selectedMessageIndex) {
            return <div className="pointer"></div>
        }
        return null;
    }

   

}
export default inboxss;