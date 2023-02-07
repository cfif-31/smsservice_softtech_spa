import React, {useState} from 'react';
import MessageHistory from "./components/MessageHistory";
import MessageForm from "./components/MessageForm";

const App = () => {
    const [error, setError] = useState("")
    const setErrorMessage = (str:string) => {
        setError(str)
        setTimeout(()=>{
            setError("")
        }, 2000)
    }
    return (
        <div>
            <MessageForm error={setErrorMessage}/>
            <span className={"ErrorMessage"}>{error}</span>
            <MessageHistory/>
        </div>
    );
};

export default App;