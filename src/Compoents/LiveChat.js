import React from 'react'
import ChatMessage from './ChatMessage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './Utils/chatSlice';
import { makeidRandomMessage } from './Utils/Helper';
import { generateRandomName } from './Utils/Helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() =>{
  const i =  setInterval(()=>{
        console.log("Api Poling");
        dispatch(
            addMessage({
                name:generateRandomName(),
                message:makeidRandomMessage(20) + "",
            })
        )
           

    },1000)

    return () => clearInterval(i);

  },[])


  return (
    <>
    <div >LiveChat
    {chatMessage.map((c,index)=>(
        <ChatMessage key={index} name={c.name} message={c.message}/>
    ))}
    </div>
    
    </>
  );
};

export default LiveChat;