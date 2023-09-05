import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {toggleMenu }from './Utils/appSlice';
import { YOUTUBE_SEARCH_API } from './Utils/Constant';
import {  BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";



const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);

    const [ suggestions , setSuggestions] = useState([]);

   
  
    
    useEffect(()=>{
      console.log(searchQuery);
      getSearchQuery();
    },[searchQuery]);

    
  

    const getSearchQuery = async() => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      console.log(json);
      //After getting an api data will set the suggestiones
      setSuggestions(json[1]);

    }

  const dispatch = useDispatch();
   const toggleMenuHandler = () => {
    dispatch(toggleMenu());
   }

  
  return (
    <div className="grid grid-flow-col w-full p-3  shadow-lg z-10 bg-white fixed max-md:w-[440] ">
     
       <div className='flex'>
          <img className='h-8 cursor-pointer max-[767px]:hidden'  
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-17.jpg" />
 
         <a href="/">
          <img className='h-10 mx-2 max-md:w-24  '
          alt="youtube-logo"
          src="https://fullforms.com/images/image/YT_12317.jpg"/>
          </a>
       </div>
       <div className='col-span-10 max-md:ml-10 ' >
        <input className=' w-1/2  px-2 border border-gray-400 p-2 rounded-l-full'
         type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          // onFocus={() => setSuggestions(true)}
          // onBlur={() => setSuggestions(false)}
        
         />

        <button className='p-2 border border-gray-400 rounded-r-full'>Search</button>
          

      <div 
      className=' absolute  bg-white px-2 py-2 w-[37rem] rounded-lg border border-gray-100'>
         
      <ul>
       {suggestions.map((s)=>(
        <li key={s} className=' shadow-sm px-3 py-2 hover:bg-gray-100'>{s} </li>
       ) 
       )}
       </ul>
       </div>
    
       </div>
      
               
       <div className='col-span-1 max-md:mr-5 flex  '>
       <div className='flex max-md:hidden'>
       <BiVideoPlus className="h-8 mr-7 text-3xl" />
       <BsBell className="h-8 mr-7 text-2xl" />
       </div>
         <img className='h-8 rounded-full '
         alt="user-Icon"
         src="https://openthemagazine.com/wp-content/uploads/2020/01/Virat1.jpg"/>
       </div>

       
    </div>
  )
}

export default Head;