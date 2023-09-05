import React from 'react';



const commentsdata = [
    {
        name:"Vinayak Waghmode",
        text:"You do wonders as you grow up",
        replies:[{
            name:"Vinayak Waghmode",
            text:"You do wonders as you grow up",
            replies:[{
                name:"Vinayak Waghmode",
                text:"You do wonders as you grow up",
                replies:[{
                    name:"Vinayak Waghmode",
                    text:"You do wonders as you grow up",
                    replies:[{
                        name:"Vinayak Waghmode",
                        text:"You do wonders as you grow up",
                        replies:[],
                    },],
                },],
            },],
        },],
    },
    {
        name:"Vinayak Waghmode",
        text:"You do wonders as you grow up",
        replies:[{
            name:"Vinayak Waghmode",
            text:"You do wonders as you grow up",
            replies:[],
        },],
    },
    {
        name:"Vinayak Waghmode",
        text:"You do wonders as you grow up",
        replies:[{
            name:"Vinayak Waghmode",
            text:"You do wonders as you grow up",
            replies:[],
        },],
    },
    {
        name:"Vinayak Waghmode",
        text:"You do wonders as you grow up",
        replies:[{
            name:"Vinayak Waghmode",
            text:"You do wonders as you grow up",
            replies:[],
        },],
    },
    {
        name:"Vinayak Waghmode",
        text:"You do wonders as you grow up",
        replies:[{
            name:"Vinayak Waghmode",
            text:"You do wonders as you grow up",
            replies:[],
        },],
    },
    {
        name:"Vinayak Waghmode",
        text:"You do wonders as you grow up",
        replies:[{
            name:"Vinayak Waghmode",
            text:"You do wonders as you grow up",
            replies:[],
        },],
    },
    {
        name:"Vinayak Waghmode",
        text:"You do wonders as you grow up",
        replies:[{
            name:"Vinayak Waghmode",
            text:"You do wonders as you grow up",
            replies:[],
        },],
    },
]

const CommentsList = ({comments}) => {
   
    return   comments.map((comment , index) => (
    <div >
    <Comment key={index} data={comment} />
    <div className='pl-5 border border-l-black ml-5 flex flex-col '>
    <CommentsList  comments={comment.replies} />
    </div>
    </div>
   
    ));
    

}

const Comment = ({data})=>{
    console.log(data);
    const {name,text,replies} = data;
    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 '>
    <img className='w-8 h-8 ' alt="user" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>
    <div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
    </div>
    </div>

}

const CommentsContainer = () => {
  
  return (
    <>
    <div className='flex flex-col  w-[900px] max-md:w-[397px]  '>
    <div className='  p-2 m-2 font-bold text-xl'>Comments:</div>
    <CommentsList comments={commentsdata}/>
    </div>
    </>
  )

  
}

export default CommentsContainer;