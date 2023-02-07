import React, {FC, useState} from 'react';
import {ISmsMessage} from "../models/SmsMessage";
import axios from "axios";

interface MessageFormProps{
    error: (Message:string) => void
}

const MessageForm:FC<MessageFormProps> = ({error}) => {
    const [message, setMessage] = useState<ISmsMessage>({
        messageText: "",
        phone: "",
        senderName: undefined
    })

    const updateForm = (
        fromKey: keyof ISmsMessage,
        value:string
    ) => {
        setMessage({
            ...message,
            [fromKey]: value
        })
    }

    const updateNullText = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value:any = event.target.value
        if(value === "")
            value = undefined
        updateForm("senderName", value)
    }

    const submitMessage = async () => {
        try {
            await axios.post("http://localhost:5000/api/SmsMessage", message);
        } catch (e) {
            error((e as Error).message)
        }
    }

    return (
        <div className={"MessageForm"}>
            <div className={"TextMessage"}>
                <p>Message:</p>
                <textarea required minLength={5} maxLength={2048} placeholder="Message text"
                    value={message?.messageText}
                    onChange={e=> updateForm("messageText", e.target.value)}/>
            </div>
            <div className={"PhoneMessage"}>
                <p>Phone:</p>
                <input type="text" minLength={8} maxLength={20} required placeholder="Phone number"
                       value={message.phone}
                       onChange={e=>updateForm("phone", e.target.value)}/>
            </div>
            <div className={"SenderMessage"}>
                <p>Sender name:</p>
                <input type="text" minLength={3} maxLength={32} required={false} placeholder="Sender name"
                       value={message.senderName}
                       onChange={e=>updateNullText(e)}/>
            </div>
            <div className={"SubmitMessage"}>
                <button onClick={submitMessage}>Submit</button>
            </div>
        </div>
    );
};

export default MessageForm;