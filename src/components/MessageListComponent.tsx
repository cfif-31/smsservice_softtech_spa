import React, {FC} from 'react';
import {ISmsMessage} from "../models/SmsMessage";
import MessageInfoComponent from "./MessageInfoComponent";

interface ISmsMessageListProps{
    messages:ISmsMessage[]
}

const MessageListComponent:FC<ISmsMessageListProps> = ({messages}) => {
    return (
        <table>
            <caption>Message list:</caption>
            <thead>
                <tr>
                    <th className="col1">Send data</th>
                    <th className="col2">Phone</th>
                    <th className="col2">MessageText</th>
                    <th className="col4">State</th>
                </tr>
            </thead>
            <tbody>
                {messages.map(m =>
                        <MessageInfoComponent key={m.id} message={m}/>
                )}
            </tbody>
        </table>
    );
};

export default MessageListComponent;