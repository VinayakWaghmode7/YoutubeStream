import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from './Utils/appSlice';
import { useSearchParams, Link } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import UserChatButton from './UserChatButton';
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";

import { YOUTUBE_VIDEOS_API, YOUTUBE_VIDEO_BYID } from './Utils/Constant';


const WatchPage = () => {
    
  const [suggestionVideo, setSuggestionVideo] = useState([]);
  

    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"));
    const videoDetails = YOUTUBE_VIDEO_BYID + searchParam.get("v");
    const [videoInfo, setVideoInfo] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(closeMenu());
    });

    useEffect(() => {
      const getVideoInfo = async () => {
        const data = await fetch(videoDetails);
        const json = await data.json();
        // console.log(json.items);
        setVideoInfo(json.items);
      };
      getVideoInfo();
    }, []);

    useEffect(() => {
      const getSubscriber = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        setSuggestionVideo(json.items);
      };
      getSubscriber();
    }, []);

  return (
    <div className='flex flex-col w-full max-md:w-[400px] ml-8 max-md:overflow-x-hidden max-md:ml-1 overflow-x-hidden  '>
    <div className='flex max-md:flex-col'> 
    <div className='mt-12 py-7' >
    <iframe className='max-md:w-[400px] w-[1000px] h-[600px] max-md:h-[280px]' 
   
    src={"https://www.youtube.com/embed/" + searchParam.get("v") }
    title="YouTube video player" frameBorder="0" 
    allow="accelerometer; 
    autoplay; 
    clipboard-write; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture; 
    web-share" 
    allowFullscreen></iframe>
     {videoInfo.map((video) => {
            return (
              <>
                {/* Subscriber Section */}
                <div key={video.id}>
                  <h1 className="font-bold text-xl m-2">
                    {video?.snippet?.title}
                  </h1>
                  <div className="flex   ">
                    <div className="flex m-2  ">
                      <FaUserTie className="rounded-full mt-1 border border-gray-400 text-4xl" />
                      <ul className=''>
                        <li className="font-bold text-gray-800 ml-2">
                          {video?.snippet?.channelTitle}
                        </li>
                        <li className=" text-sm ml-2">2.56M Subscriber</li>
                      </ul>
                      <p className="flex max-md:hidden max-h-12  ">
                        <button className="bg-black   text-white border border-gray-200 shadow-sm px-5 py-1  rounded-full m-2 ml-5">
                          Subscriber
                        </button>
                        <button className="border flex border-gray-200 shadow-sm px-2 py-1  bg-gray-200 rounded-full m-2 hover:bg-gray-300 ml-32">
                          <FiThumbsUp className="mx-3 mt-1" />{" "}
                          {video?.statistics?.likeCount} |{" "}
                          <FiThumbsDown className="mx-3 mt-1" />
                        </button>
                        <button className=" flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                          <PiShareFat className="mx-2 mt-1 text-xl" /> Share
                        </button>
                        <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                          <GoDownload className="mx-1 text-xl" /> Download
                        </button>
                        <button className="border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                          <BsThreeDots />
                        </button>
                        </p>
                    </div>
                  </div>
                </div>
                {/* Video Details */}
                {/* <div className="m-2 rounded-lg w-[900px] shadow-sm bg-gray-100 p-2 ">
                  <p className="font-bold">
                    {video?.statistics?.viewCount} Views 😎{" "}
                    {video?.snippet?.publishedAt} 
                  </p>
                  <p>{video?.snippet?.description}</p>
                </div> */}
                </>
                );
          })}
    </div>
    
    <div className='p-2 w-full h-[734px]  mt-20 max-md:mt-1 ml-1 max-md:w-[395px]  border border-black bg-slate-100 rounded-lg mr-1 overflow-y-scroll flex-col-reverse '>
      <LiveChat/>

    </div>
   
    </div>
    <UserChatButton/>
    

    <span className=' flex flex-row gap-20 max-md:flex-col   '>
    <CommentsContainer/>
     <span className='flex flex-col   '>
    {suggestionVideo.map((info) => {
            return (
              <>
              <span className='w-[30%]   '>
                <Link to={"?v=" + info.id} key={info.id}>
                  <div className="   mt-8 p-2 w-[28rem]  flex hover:bg-gray-200 rounded-md overflow-x-hidden overflow-y-hidden  ">
                    <img
                      className="rounded-xl"
                      src={info?.snippet?.thumbnails?.default?.url}
                      alt="thumails"
                    />
                    <ul className="ml-2 max-md:mr-4 ">
                      <li className="font-bold text-sm text-gray w-[28rem] text-ellipsis overflow-hidden whitespace-normal max-w-[300px] max-md:max-w-[255px] "> 
                        {info?.snippet?.title}
                      </li>
                      <li className="text-sm">{info?.snippet?.channelTitle}</li>
                      <li className="text-sm">
                        {info?.statistics?.viewCount} Views
                      </li>
                    </ul>
                  </div>
                </Link>
                </span>
              </>
            );
          })}
          </span>
          
    </span>
    
    </div>
    

   
   
   
  )
}

export default WatchPage;