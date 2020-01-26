import React from 'react';
import {Client} from "@stomp/stompjs";
import {connect} from "react-redux";
import {todoAdded, todoDeleted} from "../actions/todos";

const MyStompClient = ({todoAdded, todoDeleted}) => {

    const client = new Client({
        brokerURL: "ws://localhost:8080/ws/websocket",
        reconnectDelay: 3000,
        heartbeatIncoming: 30000,
        heartbeatOutgoing: 30000
    })

    client.onConnect = () => {
        client.subscribe("/topic/todo", onMessage);
    }

    const onMessage = (e) => {
        const {type, payload} = JSON.parse(e.body);

        console.log(e.body);

        switch(type) {
            case ("TODO_ADDED"):
                todoAdded(payload);
                break;
            case "TODO_DELETED":
                todoDeleted(payload.id);
                break;
            default:
                console.log("Default WS case")
        }

        console.log(e.body)
    }

    const connect = () => {
        client.activate();
    }

    return (
        <div>
            <button onClick={() => connect()}>connect</button>
        </div>
    );
};

export default connect(null, {todoAdded, todoDeleted})(MyStompClient);