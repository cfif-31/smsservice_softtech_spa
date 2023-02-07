import {ISmsStateMessage} from "./SmsStateMessage";

export interface ISmsMessage{
    id?:number
    messageText:string
    phone:string,
    senderName?:string,
    stateHistory?:ISmsStateMessage[]
}