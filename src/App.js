import {ChatEngine} from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm.jsx';
import ChatFeed from "./components/ChatFeed.jsx";
import ChatSettings from "./components/ChatSettings.jsx";
const App = () => {
    if(!localStorage.getItem('username'))
    return <LoginForm/>
    return (
        <ChatEngine
            height="100vh"
            projectID="4af4f979-12da-4d9a-be98-7dd387dc0fca"
            userName="Raj Agrahari"
            userSecret="Allahabad@123"
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
            renderChatSettingsTop={(creds,chat)=><ChatSettings creds={creds} chat={chat}/>}
        />
    )
}

export default App;