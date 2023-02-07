import React, {FC} from 'react';
import {ISmsMessage} from "../models/SmsMessage";
import {EMessageState} from "../models/SmsStateMessage";

interface ISmsMessageProps{
    message:ISmsMessage
}

const MessageInfoComponent:FC<ISmsMessageProps> = ({message}) => {
    const submitDate = message.stateHistory
        ?.find(s=>s.state === EMessageState.Submitted)
        ?.setDate.toLocaleString();

    const stateHistory = message.stateHistory
        ?.map(s => `${s.state} - ${s.setDate.toLocaleString()}`)
        .join('\n');

    return (
        <tr>
           <td>{submitDate}</td>
           <td>{message.phone}</td>
           <td>{message.messageText}</td>
           <td title={stateHistory}>{message.stateHistory?.at(0)?.state}</td>
        </tr>
    );
};

export default MessageInfoComponent;