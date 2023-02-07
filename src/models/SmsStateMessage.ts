export enum EMessageState {
    Submitted = "Submitted",
    Error = "Error",
    Delivered = "Delivered"
}

export interface ISmsStateMessage{
    id:number
    snsMessageId:number
    state:EMessageState
    setDate:Date
}