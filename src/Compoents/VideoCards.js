import React from 'react';

const VideoCards = ({ info }) => {

    console.log(info);

   
    //  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=' p-2 m-2 w-[400px] h-[390px] shadow-lg max-md:w-[400px] max-md:h-[400px]'>
        <img className='rounded-lg '  alt="Thumbnail" src={info?.snippet?.thumbnails?.maxres?.url} /> 
        <ul className='p-2'>
            <li className='font-bold py-3'>{info?.snippet?.title}</li> 
             <li>{info?.snippet?.channelTitle}</li>
             <div className='flex gap-3'>
            <li>{info?.statistics?.viewCount} Views</li>
           
            <li>{info?.statistics?.likeCount} Likes</li>
            </div>
        </ul>
    </div>
  );
};

export default VideoCards;