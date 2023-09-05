import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div  className=' mt-7 max-[767px]:ml-0 max-md:w-[500px]  overflow-x-hidden'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer;