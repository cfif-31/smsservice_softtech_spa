import React, {FC, useEffect, useState} from 'react';
import {ISmsMessage} from "../models/SmsMessage";
import axios from "axios";
import MessageListComponent from "./MessageListComponent";

const MessageHistory:FC = () => {
    const [messages, setMessages] = useState<ISmsMessage[]>([])

    useEffect(()=>{
        setInterval(async () => {
            await fetchMessages()
        }, 1000)
    }, [])

    async function fetchMessages(){
        try {
            const response = await axios.get<ISmsMessage[]>("http://localhost:5000/api/SmsMessage")
            setMessages(response.data)
        }catch (e){
            console.log(e);
        }
    }

    return (
        <div>
            <MessageListComponent messages={messages}/>
        </div>
    );
};

export default MessageHistory;