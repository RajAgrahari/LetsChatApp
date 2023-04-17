

const ChatSettings = (props) =>
{
    const {creds,chat} = props;
    return (
      <div className="chat-setting-container">
         {chat && chat.people && chat.people.map((person,index)=>(
            <div className="chat-setting-container-inner">
            <img className="chat-setting-img" src={person?.person?.avatar} alt="chat-setting-avatar"/>
            <p>{person?.person?.first_name}</p>
            </div>
         ))}
    </div>
    )
};

export default ChatSettings;