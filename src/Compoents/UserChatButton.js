import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMessage } from './Utils/chatSlice';

const UserChatButton = () => {

 const [LiveMessages , setLiveMessages] = useState();

 const dispatch = useDispatch();

  return (
    <form 
    className='w-[430px] ml-[1005px] max-md:w-[400px] rounded-lg mt-0  p-2 border border-black max-md:ml-0'
    onSubmit={(e)=>{
        e.preventDefault();

        dispatch(
            addMessage({
                name:"Vinayak Waghmode",
                message: LiveMessages,
            })
        )
        setLiveMessages("");
    }}>
    <input className='w-80 max-md:w-72 border border-blue-300' type="text"
        value={LiveMessages}
        onChange={(e) =>
        setLiveMessages(e.target.value)}
    />
    <button className='ml-1 px-2 max-md:ml-6 rounded-md bg-green-300'>Submit</button>
    </form>
  )
}

export default UserChatButton