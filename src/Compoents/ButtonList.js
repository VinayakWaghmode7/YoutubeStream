import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex mt-14 py-3 max-md:ml-1  '>
        <Button name={"All"} />
        <Button name={"Cricket"} />
        <Button name={"News"} />
        <Button name={"Football"} />
         <div className='max-md:hidden flex'>
        
        <Button name={"Popular"} />
        <Button name={"India"} />
        <Button name={"Tech"} />
        </div>
    </div>
  )
}

export default ButtonList;